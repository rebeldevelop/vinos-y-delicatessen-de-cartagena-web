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
    height: 100vh;
    /* background-image: url('../assets/images/inicioDegradado.png'); */
    background-image: url('../assets/images/copa.jpg');
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    text-align: center;
    animation-name: fadeAnimation;
    animation-duration: 3s;
    /* border-bottom: 5px solid #923E50; */
}
@keyframes fadeAnimation {
  from {opacity: 0.2;}
  to {opacity: 1;}
}
.inicio_section--title{
    font-size: 3rem;
    text-align: center;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    text-shadow: 2px 2px 2px black;
    /* text-shadow: 0 0 20px rgba(0, 0, 0, 0.8); */
}

@media (min-width: 768px) {
  .inicio_section--title{
     font-size: 4rem;
  }
}

@media (min-width: 992px) {
  .inicio_section--title{
     font-size: 5rem;
  }
}
</style>
