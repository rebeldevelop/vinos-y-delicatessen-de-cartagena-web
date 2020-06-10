<template>
  <div class="inicio_section">
    <h1 class="inicio_section--title text-center titulo_style">{{$t('somosTradicion')}}</h1>
  </div>
</template>

<script>

export default {
  name: 'Inicio',
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
.inicio_section{
    background-image: url('../assets/images/inicio.png');
    height: 100vh;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    text-align: center;
}

.inicio_section--title{
    font-size: 5rem;
    text-align: center;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);}
</style>
