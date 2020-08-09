<template>
  <div class="formulario_contacto">
          <div>
              <h1 class="formulario__contacto_section--title text-center titulo_style" id="formularioContacto">{{$t('contactanos')}}</h1>
              <form
                id="FormularioContacto"
                @submit="checkForm"
                action="https://vuejs.org/"
                method="post"
                class="formulario-contacto"
              >
                <div class="form-group">
                  <label for="name">{{$t('nombre')}}</label>
                  <input type="text" class="form-control" id="name" v-model="name" aria-describedby="nombreHelp" :placeholder='$t("tuNombre")'>
                </div>
                <div class="form-group">
                  <label for="email">{{$t('email')}}</label>
                  <input type="email" class="form-control" id="email" v-model="email" :placeholder='$t("tuEmail")'>
                </div>
                <div class="form-group">
                  <label for="messageText">{{$t('tuMensaje')}}</label>
                  <textarea class="form-control" id="messageText" v-model="messageText" rows="9"></textarea>
                </div>
                <p v-if="errors.length">
                  <ul class="errorsLabel">
                    <li v-for="error in errors" :key="error.text">{{ error }}</li>
                  </ul>
                </p>
                <div class="d-flex justify-content-end">
                  <button type="submit" id="btnEnviar" class="btn btn-success" :disabled="hasClicked">{{$t('enviar')}}</button>
                </div>
              </form>
          </div>
      </div>
</template>

<script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDiZKt1qPWCgPSgWKc7lETkBcpO53-IZo8",
    authDomain: "vinosydelicatessendecartagena.firebaseapp.com",
    databaseURL: "https://vinosydelicatessendecartagena.firebaseio.com",
    projectId: "vinosydelicatessendecartagena",
    storageBucket: "vinosydelicatessendecartagena.appspot.com",
    messagingSenderId: "316936332273",
    appId: "1:316936332273:web:59f9f36e33b9134d62da50",
    measurementId: "G-5HTY6E5NHY"
  };
  firebase.initializeApp(config);

  //REFERENCIA A LA BASE DE DATOS
  var db = firebase.database();
</script>
<script>
import router from '@/router'
export default {
  name: 'FormularioContacto',
  data () {
    return {
      errors: [],
      name: null,
      email: null,
      messageText: null,
      hasClicked: false,
    }
  },
  // computed : {}
  // components: {}
  // props: {}
  methods: {
    sendMail: function (e) {
      // METEDO DE FIREBASE QUE NO FUNCIONA CON NODE.JS 10
      // var initialURL = 'https://us-central1-vinosydelicatessendecartagena.cloudfunctions.net//sendMail?'
      // var destinatario = 'dest=vinosydelicatessencartagena@gmail.com'
      // var remitente = '&from=remitente@gmail.com'
      // var nombreInput = this.name
      // var emailInput = this.email
      // var mensajeTextBox = this.messageText
      // var body = '&html=<p style="margin:0;padding:0;text-decoration: underline;">Nombre:</p><br><p style="margin:10;padding:0;">' + nombreInput + '</p><br><p style="margin:0;padding:0;text-decoration: underline;">Mail del Remitente:</p><br><p style="margin:10;padding:0;">' + emailInput + '</p><br><p style="margin:0;padding:0;text-decoration: underline;">Mensaje:</p><br><p style="margin:10;padding:0;">' + mensajeTextBox + '</p>'
      // var totalURL = initialURL + destinatario + remitente + body
      // window.location.href = totalURL
      console.log('lo intento')
      this.hasClicked = true
      event.preventDefault();
      db.ref('/mensajes/nuevosMensajes').push({
        'Nombre': this.name,
        'Email': this.email,
        'Mensaje': this.messageText
      }).then(() => {
        console.log("mensaje enviado")
        router.push({name: 'MensajeEnviado'})
      })
      // db.ref('/mensajes/nuevosMensajes').set({
      //   nombre: this.name,
      //   emailRemitente: this.email,
      //   mensaje: this.messageText
      // })
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
  padding: 40px 50px 50px;
  max-width: 600px;
  margin: auto;
}
.formulario__contacto_section--title{
  color: black;
}
.errorsLabel{
  width:100%;
  display:flex;
  justify-content:space-around;
  font-size:12px;
  padding-left: 15px;
}
</style>
