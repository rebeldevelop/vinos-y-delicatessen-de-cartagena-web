<template>
  <div class="formulario_contacto">
          <div>
              <h1 class="formulario__contacto_section--title text-center titulo_style" id="formularioContacto">Contáctanos</h1>
              <form
                id="FormularioContacto"
                @submit="checkForm"
                action="https://vuejs.org/"
                method="post"
                class="formulario-contacto"
              >
                <div class="form-group">
                  <label for="name">Nombre</label>
                  <input type="text" class="form-control" id="name" v-model="name" aria-describedby="nombreHelp" placeholder="tu nombre">
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" v-model="email" placeholder="tu email">
                </div>
                <div class="form-group">
                  <label for="messageText">Tu mensaje</label>
                  <textarea class="form-control" id="messageText" v-model="messageText" rows="9"></textarea>
                </div>
                <p v-if="errors.length">
                  <ul class="errorsLabel">
                    <li v-for="error in errors" :key="error.text">{{ error }}</li>
                  </ul>
                </p>
                <div class="d-flex justify-content-end">
                  <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
              </form>
          </div>
      </div>
</template>

<script>
export default {
  name: 'FormularioContacto',
  data () {
    return {
      errors: [],
      name: null,
      email: null,
      messageText: null
    }
  },
  // computed : {}
  // components: {}
  // props: {}
  methods: {
    sendMail: function (e) {
      var initialURL = 'https://us-central1-vinosydelicatessendecartagena.cloudfunctions.net//sendMail?'
      var destinatario = 'dest=rebeldevelop@gmail.com'
      var remitente = '&from=remitente@gmail.com'
      var nombreInput = this.name
      var emailInput = this.email
      var mensajeTextBox = this.messageText
      var body = '&html=<h3>Nombre:</h3><br><p>' + nombreInput + '</p><br><h3>Mail del Remitente:</h3><br><p>' + emailInput + '</p><br><h3>Mensaje:</h3><br><p>' + mensajeTextBox + '</p>'
      var totalURL = initialURL + destinatario + remitente + body
      window.location.href = totalURL
    },
    checkForm: function (e) {
      if (this.name && this.email && this.messageText) {
        this.sendMail()
      }

      this.errors = []

      if (!this.name) {
        this.errors.push('El nombre es obligatorio.')
      }
      if (!this.email) {
        this.errors.push('El email es obligatorio.')
      }
      if (!this.messageText) {
        this.errors.push('Escriba un mensaje.')
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
.formulario-contacto{
  padding: 0 50px 50px;
  max-width: 600px;
  margin: auto;
}
.errorsLabel{
  width:100%;
  display:flex;
  justify-content:space-around;
  font-size:12px;
  padding-left: 15px;
}
</style>
