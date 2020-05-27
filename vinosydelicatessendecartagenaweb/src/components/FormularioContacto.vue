<template>
  <div class="formulario_contacto">
          <div>
              <h1 class="formulario__contacto_section--title text-center titulo_style">Contáctanos</h1>
              <form class="formulario-contacto">
                <div class="form-group">
                  <label for="nameInput">Nombre</label>
                  <input type="text" class="form-control" id="nameInput" aria-describedby="nombreHelp" placeholder="tu nombre">
                  <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="tu email">
                </div>
                <div class="form-group">
                  <label for="exampleFormessageTextmControlTextarea1">Tu mensaje</label>
                  <textarea class="form-control" id="messageText" rows="9"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
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
.formulario-contacto{
  padding: 50px;
  max-width: 600px;
  margin: auto;
}
</style>
