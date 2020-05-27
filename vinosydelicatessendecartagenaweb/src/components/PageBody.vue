<template>
  <div class="pageBody-GeneralWrapper">
    <Inicio class="inicio--container"></Inicio>
    <QuienesSomos class="quienes_somos--container"></QuienesSomos>
    <FormularioContacto class="formulario_contacto--container"></FormularioContacto>
  </div>
</template>

<script>
import Inicio from '@/components/Inicio'
import QuienesSomos from '@/components/QuienesSomos'
import FormularioContacto from '@/components/FormularioContacto'

export default {
  name: 'PageBody',
  data () {
    return {
    }
  },
  // computed : {}
  components: { Inicio, QuienesSomos, FormularioContacto }
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

</style>
