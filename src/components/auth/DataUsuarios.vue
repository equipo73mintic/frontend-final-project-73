<template>
<div id="app">
  <v-app id="inspire">
    <v-data-table
      :headers="headers"
      :items="usuarios"
      sort-by="nombre"
      class="elevation-1"
      :loading="cargando"
      loading-text="Loading... Please wait"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Lista de Usuarios</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                Nuevo
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre Usuario"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="editedItem.email"
                        label="Email Usuario"
                      ></v-text-field>
                    </v-col> 
                    <v-col
                      cols="12"
                    >
                      <v-text-field v-if="editedId < 0"
                        v-model="editedItem.password"
                        label="Password"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                     <v-select
                        v-model="editedItem.rol"
                        label="Rol"
                        :items="roles"
                      ></v-select>
                    </v-col>    
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogEstado" max-width="350px">
            <v-card>
              <v-card-title class="headline">{{ cardEstadoTitle }}</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeEstadoItem">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="confirmEditEstado">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="editEstadoItem(item)"
        >
        <template v-if="item.estado == 1">
           mdi-lightbulb-off
        </template>
        <template v-else>
           mdi-lightbulb-on
        </template>
         
        </v-icon>

      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="list"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
    
  </v-app>

  <pre>
      {{ $data.usuarios }}
  </pre>
</div>
</template>

<script>
import axios from 'axios';
export default {
name : 'DataUsuarios',
data: () => ({
    dialog: false,
    dialogEstado: false,
    cargando: true,
    headers: [
      {
        text: 'Nombre Usuario',
        align: 'start',
        sortable: true,
        value: 'nombre',
      },
      { text: 'Email', value: 'email', sortable: false },
      { text: 'Estado', value: 'estado' },
      { text: 'Rol', value: 'rol' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    usuarios: [],
    roles: ['Administrador', 'Vendedor', 'Almacenero'],
    editedId: -1,
    editedItem: {
      nombre: '',
      email: '',
      rol: '',
      password: '',
      estado: 0,
    },
    defaultItem: {
      nombre: '',
      email: '',
      rol: '',
      password: '',
      estado: 0,
    },
  }),

  computed: {
    formTitle () {
      return this.editedId === -1 ? 'New Item' : 'Edit Item'
    },
    cardEstadoTitle() {
       return this.editedItem.estado === 0 ? 'Desea activar el item?' : 'Desea desactivar el item?'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogEstado (val) {
      val || this.closeEstadoItem()
    },
  },

  created () {
    this.list()
  },

  methods: {

    list(){
      this.$http.get('/api/usuario/list')
      .then(response =>{
        this.usuarios = response.data;
        this.cargando = false;
      })
      .catch(error =>{
        console.log(error);
      });
    },

    editItem (item) {
      this.editedId = item.id
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    editEstadoItem (item){
      this.editedId = item.id;
      this.editedItem = Object.assign({}, item)
      this.dialogEstado = true;
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedId = -1
      })
    },

    closeEstadoItem () {
      this.dialogEstado = false
      this.$nextTick(() => {
        this.editedId = -1
      })
    },

    save () {
      if (this.editedId > -1) {
        //PUT (update)
        axios.put('https://radiant-shore-56700.herokuapp.com/api/usuario/update', {
          id: this.editedId,
          nombre: this.editedItem.nombre,
          // password: this.editedItem.password,
          email: this.editedItem.email,
          rol: this.editedItem.rol
        })
        .then(response =>{
          this.list();
        })
        .catch(error =>{
          return error
        });
      } else {
        //POST (add)
        axios.post('https://radiant-shore-56700.herokuapp.com/api/usuario/add', {
          nombre: this.editedItem.nombre,
          email: this.editedItem.email,
          password: this.editedItem.password,
          rol: this.editedItem.rol
        })
        .then(response =>{
          this.list();
        })
        .catch(error =>{
          return error
        });
      }
      this.close();
    },

    confirmEditEstado(){
      if (this.editedItem.estado == 1){
        axios.put('https://radiant-shore-56700.herokuapp.com/api/usuario/deactivate', {
          id: this.editedId
        })
        .then(response =>{
          this.list();
        })
        .catch(error =>{
          return error
        })
      } else{
        axios.put('https://radiant-shore-56700.herokuapp.com/api/usuario/activate', {
          id: this.editedId
        })
        .then(response =>{
          this.list();
        })
        .catch(error =>{
          return error
        })
      }
      this.closeEstadoItem();
    },
    
  },
}
</script>