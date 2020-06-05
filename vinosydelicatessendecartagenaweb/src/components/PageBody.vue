<template>
  <div class="pageBody-GeneralWrapper">
    <Inicio class="inicio--container"></Inicio>
    <QuienesSomos class="quienes_somos--container"></QuienesSomos>
    <FormularioContacto class="formulario_contacto--container"></FormularioContacto>
    <Footer class="footer_container"></Footer>
  </div>
</template>

<script>
import Inicio from '@/components/Inicio'
import QuienesSomos from '@/components/QuienesSomos'
import FormularioContacto from '@/components/FormularioContacto'
import Footer from '@/components/Footer'

export default {
  name: 'PageBody',
  data () {
    return {
    }
  },
  // computed : {}
  components: { Inicio, QuienesSomos, FormularioContacto, Footer }
  // props: {}
  // methods: {}
  // created () {}
  // mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pageBody-GeneralWrapper{
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
}
.section01{
  height: 200px;
}
.footer_container{
  background-color: #9C1534;
  height: 150px;
}

</style>
