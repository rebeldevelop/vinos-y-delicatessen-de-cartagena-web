<template>
  <div class="adminPage">
    <div class="adminLogin" v-if="!showAdminPage">
      <h1 class="welcome">¡Bienvenido!</h1>
      <form
        id="FormularioContacto"
        @submit="checkPassword"
        action="https://vuejs.org/"
        method="post"
        class="formulario-password"
      >
        <div class="form-group container">
          <label for="password" class="mb-3">Introduce la contraseña</label>
          <input type="text" class="form-control input__password" id="password" v-model="password" aria-describedby="nombreHelp">
        <p v-if="errors.length">
          <ul class="errorsLabel">
            <li v-for="error in errors" :key="error.text">{{ error }}</li>
          </ul>
        </p>
          <div class="d-flex justify-content-center mt-4">
            <button type="submit" id="btnAceptar" class="btn btn-success">Entrar</button>
          </div>
        </div>
      </form>
    </div>
    <AdminPageMensajes v-if="showAdminPage"></AdminPageMensajes>
  </div>
</template>

<script>
import AdminPageMensajes from '@/components/AdminPage_Mensajes'
export default {
  name: 'AdminPage',
  data () {
    return {
      errors: [],
      showAdminPage: false,
      password: ''
    }
  },
  // computed : {}
  components: { AdminPageMensajes },
  // props: {}
  methods: {
    checkPassword: function (e) {
      this.errors = []
      if (this.password === '123456') {
        this.showAdminPage = true
      } else {
        this.errors.push('El password no es válido')
      }

      if (!this.password) {
        this.errors.push('Por favor introduce un password')
      }
      e.preventDefault()
    }
  }
  // created () {}
  // mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.formulario-password{
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.container{
  color: rgb(51, 51, 51);
  width: 350px;
  padding-bottom: 500px;
}
.welcome{
  display: flex;
  justify-content: center;
  color:rgb(51, 51, 51);
  padding-top: 200px;
}
</style>
