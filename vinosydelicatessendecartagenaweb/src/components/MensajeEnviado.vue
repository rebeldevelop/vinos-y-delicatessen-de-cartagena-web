<template>
  <div class="mensajeEnviado" style="display:flex;justify-content:center;flex-direction:column;margin-top:30px;">
      <h2 style="margin:0;padding:0;" class="text-center titulo_style">Mensaje enviado correctamente</h2>
      <p style="margin:0;padding:0;text-align: center;width:100%;">Nos pondremos en contacto contigo lo antes posible.</p>
      <div class="d-flex justify-content-center" style="margin-top:20px;">
        <a type="submit" class="btn btn-primary" href="http://localhost:8080/">Volver</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MensajeEnviado',
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
</style>
