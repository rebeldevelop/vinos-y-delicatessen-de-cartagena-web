<template>
  <div class="adminPage-mensajes">
    <h1 class="title align-self-center">Mensajes Recibidos</h1>
    <div class="mensajesContainer">
        <div class="mensaje" v-for="item in mensajes" :key="item.id">
            <div class="mensajeInfo">
                <p class="mensajeLabel">Nombre remitente:</p>
                <p class="product-nombre"> {{ item.nombre }} </p>
                <p class="mensajeLabel">Mail remitente:</p>
                <p class="product-nombre"> {{ item.email }} </p>
                <p class="mensajeLabel">Mensaje:</p>
                <p class="product-nombre"> {{ item.mensaje }} </p>
                <p class="mensajeLabel">Fecha:</p>
                <p class="product-nombre"> {{ item.fecha }} </p>
                <p class="mensajeLabel">ID:</p>
                <p class="product-nombre"> {{ item.id }} </p>
            </div>
            <div class="d-flex justify-content-end mt-4">
              <button id="btnEliminar" class="btn btn-success btnEliminar" @click="eliminarMensaje(item.id)">Eliminar</button>
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
      mensajes: [],
      fecha: ''
    }
  },
  methods : {
      cargarElementos (datos){
      this.mensajes = []
      for (let key in datos) {
        this.mensajes.push({
          id: key,
          nombre: datos[key].Nombre,
          email: datos[key].Email,
          mensaje: datos[key].Mensaje,
          fecha: datos[key].Fecha
        })
      }
    },
    eliminarMensaje (id) {
      db.ref('/mensajes/nuevosMensajes/' + id).remove()
    }
  },
  created () {
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

.adminPage-mensajes{
  display: flex;
  flex-direction: column;
}
.title{
    margin: 50px 0;
    color: rgb(23, 76, 146);
}
.mensajesContainer{
    display:flex;
    flex-direction: column-reverse;
    width: 100%;
    align-items: center;
}
.mensaje{
    width: 80%;
    max-width: 1200px;
    height: auto;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:10px;
    /* border-bottom: 0.5px solid grey; */
    border: 1px solid black;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.5);
}
.mensajeInfo{
    margin:0 20px;
    padding-top:30px;
}
.mensajeLabel{
    color: rgb(23, 76, 146);
    margin: 0;
}
.product-nombre{
  color: rgb(51, 51, 51);
}
.btnEliminar{
  margin-bottom: 10px;
  margin-right: 20px;
}
</style>
