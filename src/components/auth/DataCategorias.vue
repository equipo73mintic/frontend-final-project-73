<template>
<div id="app">
  <v-app id="inspire">
    <v-data-table
      :headers="headers"
      :items="categorias"
      sort-by="nombre"
      class="elevation-1"
      :loading="cargando"
      loading-text="Loading... Please wait"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Lista de Categorias</v-toolbar-title>
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
                        label="Category name"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <v-textarea
                        v-model="editedItem.descripcion"
                        label="Descripción"
                        rows="3"
                        counter="250"
                      ></v-textarea>
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
            <v-card class="">
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
      {{ $data.categorias }}
  </pre>
</div>
</template>

<script>
import axios from 'axios';
export default {
name : 'DataCategorias',
data: () => ({
    dialog: false,
    dialogEstado: false,
    cargando: true,
    headers: [
      {
        text: 'Nombre Categoría',
        align: 'start',
        sortable: true,
        value: 'nombre',
      },
      { text: 'Descripción', value: 'descripcion', sortable: false },
      { text: 'Estado', value: 'estado' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    categorias: [],
    editedId: -1,
    editedItem: {
      nombre: '',
      descripcion: '',
      estado: 0,
    },
    defaultItem: {
      nombre: '',
      descripcion: '',
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
      axios.get('https://radiant-shore-56700.herokuapp.com/api/categoria/list')
      .then(response =>{
        this.categorias = response.data;
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
        axios.put('https://radiant-shore-56700.herokuapp.com/api/categoria/update', {
          id: this.editedId,
          nombre: this.editedItem.nombre,
          descripcion: this.editedItem.descripcion,
        })
        .then(response =>{
          this.list();
        })
        .catch(error =>{
          return error
        });
      } else {
        //POST (add)
        axios.post('https://radiant-shore-56700.herokuapp.com/api/categoria/add', {
          nombre: this.editedItem.nombre,
          descripcion: this.editedItem.descripcion,
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
        axios.put('https://radiant-shore-56700.herokuapp.com/api/categoria/deactivate', {
          id: this.editedId
        })
        .then(response =>{
          this.list();
        })
        .catch(error =>{
          return error
        })
      } else{
        axios.put('https://radiant-shore-56700.herokuapp.com/api/categoria/activate', {
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