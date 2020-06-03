<template>
  <div class="formulario_contacto">
          <div>
              <h1 class="formulario__contacto_section--title text-center titulo_style">Contáctanos</h1>
              <form class="formulario-contacto">
                <div class="form-group">
                  <label for="nameInput">Nombre</label>
                  <input type="text" class="form-control" id="nameInput" aria-describedby="nombreHelp" placeholder="tu nombre" v-model="userNameInput">
                  <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" v-model="userMailInput" placeholder="tu email">
                </div>
                <div class="form-group">
                  <label for="exampleFormessageTextmControlTextarea1">Tu mensaje</label>
                  <textarea class="form-control" id="messageText" rows="9" v-model="userMensajeTextBox"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" @click="sendMail">Enviar</button>
                <!-- <a href="https://us-central1-vinosydelicatessendecartagena.cloudfunctions.net/sendMail?dest=rebeldevelop@gmail.com&from=meloinvento@gmail.com&html=<p>Este es el body</p>" class="btn btn-primary">Enviar</a> -->
              </form>
          </div>
      </div>
</template>

<script>
export default {
  name: 'FormularioContacto',
  data () {
    return {
    }
  },
  // computed : {}
  // components: {}
  // props: {}
  methods: {
    sendMail: function (e) {
      e.preventDefault()
      var initialURL = 'https://us-central1-vinosydelicatessendecartagena.cloudfunctions.net//sendMail?'
      var destinatario = 'dest=rebeldevelop@gmail.com'
      var remitente = '&from=remitente@gmail.com'
      var nombreInput = this.userNameInput
      var emailInput = this.userMailInput
      var mensajeTextBox = this.userMensajeTextBox
      var body = '&html=<h3>Nombre:</h3><br><p>' + nombreInput + '</p><br><h3>Mail del Remitente:</h3><br><p>' + emailInput + '</p><br><h3>Mensaje:</h3><br><p>' + mensajeTextBox + '</p>'
      var totalURL = initialURL + destinatario + remitente + body
      window.location.href = totalURL
      return false
    }
  }
  // created () {}
  // mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formulario-contacto{
  padding: 50px;
  max-width: 600px;
  margin: auto;
}
</style>
