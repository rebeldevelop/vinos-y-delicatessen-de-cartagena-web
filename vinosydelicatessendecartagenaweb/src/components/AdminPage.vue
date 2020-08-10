<template>
  <div class="adminPage">
    <div class="adminLogin" v-if="!showAdminPage">
      <form
        id="FormularioContacto"
        @submit="checkPassword"
        action="https://vuejs.org/"
        method="post"
        class="formulario-password"
      >
        <div class="form-group">
          <label for="password">{{$t('Introduce la contraseña')}}</label>
          <input type="text" class="form-control" id="password" v-model="password" aria-describedby="nombreHelp">
        </div>
        <p v-if="errors.length">
          <ul class="errorsLabel">
            <li v-for="error in errors" :key="error.text">{{ error }}</li>
          </ul>
        </p>
        <div class="d-flex justify-content-end">
          <button type="submit" id="btnAceptar" class="btn btn-success">{{$t('conectar')}}</button>
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
  width:100%;
  height: 100vh;
  background-color: antiquewhite;
}
</style>
