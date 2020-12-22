<template>
  <!-- Vista del login -->
  <div class="container h-100">
    <div class="d-flex justify-content-center h-100 mt-5">
      <div class="user_card mt-5">
        <div class="d-flex justify-content-center">
          <div class="brand_logo_container">
            <img
              src="https://www.pngitem.com/pimgs/m/22-224999_green-energy-png-photos-solar-panel-solar-energy.png"
              class="brand_logo"
              alt="Logo"
            />
          </div>
        </div>

        <div class="d-flex justify-content-center form_container">
           
          <form>

            <div class="text_company">
            <div class="d-flex justify-content-center links">Green Energy</div>
          </div>

            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text"
                  ><i class="fas fa-user"></i
                ></span>
              </div>
              <input
                type="text"
                class="form-control input_user"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="username"
                v-model="login.email"
              />
            </div>

            <div class="input-group mb-2">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input
                type="password"
                id="exampleInputPassword1"
                class="form-control input_pass"
                v-model="login.password"
                placeholder="password"
              />
            </div>

            <div class="d-flex justify-content-center mt-3 login_container">
              <button
                type="button"
                name="button"
                class="btn login_btn"
                @click.prevent="loginUser"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div class="mt-2">
          <div class="text">
            <div class="d-flex justify-content-center links">
              Ciclo III - Grupo 73
            </div>
          </div>
          <div class="d-flex justify-content-center links">
            <a
              href="https://github.com/equipo73mintic/front-semana-3-73.git"
              target="_blank"
            >
              <i class="fab fa-github fa-fw Git-hub"> </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";

export default {
  name: "TheLogin",
  props: {
    msg: String,
  },
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  beforeCreate() {
    if (this.$store.state.user != null) {
      this.$router.push("/auth");
    }
  },
  methods: {
    loginUser() {
      this.$http
        .post("/api/usuario/login", this.login)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          this.$store.dispatch("guardarToken", data.tokenReturn); //Llama al action del store
          this.$router.push("/auth");
          swal("Éxito!", "Login Correcto", "success");
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
          swal("Oops!", "Usuario o contraseña incorrectos", "error");
        });
    },
  },
};
</script>

<style>
/* Coded with love by Mutiullah Samim */
.user_card {
  height: 400px;
  width: 350px;
  margin-top: auto;
  margin-bottom: auto;
  background: #faf9f6;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}

.brand_logo_container {
  position: absolute;
  height: 190px;
  width: 190px;
  top: -75px;
  border-radius: 50%;
  background: #355a2a;
  padding: 10px;
  text-align: center;
}

.brand_logo {
  height: 170px;
  width: 170px;
  border-radius: 50%;
  /* border: 2px solid white;  */
}

.form_container {
  margin-top: 150px;
}

.login_btn {
  width: 100%;
  background: #355a2a !important;
  color: white !important;
}

.login_btn:focus {
  box-shadow: none !important;
  outline: 0px !important;
}

.login_container {
  padding: 0 2rem;
}

.input-group-text {
  background: #355a2a !important;
  color: white !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}

.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #355a2a !important;
}

.Git-hub {
  font-size: 40px;
  color: #8dc13f;
}

.text {
  color: #355a2a !important;
  font: oblique bold 90% cursive;
  font-style: italic;
}

.text_company {
  color: #355a2a !important;
  font: oblique bold 120% cursive;
}
</style>