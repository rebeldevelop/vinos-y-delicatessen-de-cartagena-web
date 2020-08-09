<template>
  <div class="adminPage-mensajes">
    <p>Mensajes Recibidos</p>
    <div class="mensajesContainer">
        <div class="mensaje" v-for="item in mensajes" :key="item.id" @click="selectItem(item)">
            <div class="mensajeInfo">
                <p class="mensajeLabel">Nombre remitente:</p>
                <p class="product-nombre"> {{ item.nombre }} </p>
                <p class="mensajeLabel">Mail remitente:</p>
                <p class="product-nombre"> {{ item.email }} </p>
                <p class="mensajeLabel">Mensaje:</p>
                <p class="product-nombre"> {{ item.mensaje }} </p>
            </div>
        </div>
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
export default {
  name: 'AdminpageMensajes',
  data () {
    return {
      mensajes: []
    }
  },
  methods : {
      cargarElementos (datos){
      console.log(datos)
      this.mensajes = []
      for (let key in datos) {
        this.mensajes.push({
          nombre: datos[key].Nombre,
          email: datos[key].Email,
          mensaje: datos[key].Mensaje
        })
      }
    }
  },
  created () {
    // console.log(db.ref('/'));
    // console.log('cargando mensajes')
    db.ref('/mensajes/nuevosMensajes').on('value', datos  => this.cargarElementos(datos.val()))
  }
  // computed : {}
  // components: {}
  // props: {}
  // methods: {}
  // created () {}
  // mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mensajesContainer{
    display:flex;
    flex-direction: column-reverse;
    width: 100%;
    overflow-y: auto;
}
.mensaje{
    width: 80%;
    height: auto;
    min-height: 200px;
    background-color:antiquewhite;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    margin:10px;
}
.mensajeInfo{
    margin-left: 20px;
}
.mensajeLabel{
    color:black;
    text-decoration: underline black;
}
</style>
