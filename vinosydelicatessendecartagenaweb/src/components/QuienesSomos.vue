<template>
  <div class="quienes_somos-section" id="quienesSomos">
    <h1 class="quienes__somos-title text-center titulo_style">{{$t('quienesSomos')}}</h1>
      <div class="section-texts">
        <section class="text_style quienes-somos-texto">{{$t('primerParrafo')}}</section>
        <section class="text_style quienes-somos-texto">{{$t('segundoParrafo')}}</section>
      </div>
  </div>
</template>

<script>
export default {
  name: 'QuienesSomos',
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
.quienes_somos-section{
  background-image: url('../assets/images/corks-in-bottles.png');
  display: flex;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-bottom: 25px solid #923E50;
}
@media (min-width: 768px) {
  .quienes_somos-section{
  min-height: 600px;

  }
}

.logo_image{
  height: 300px;
}
.quienes__somos-title{
  text-shadow: 2px 2px 2px #3c0c16;
  margin-top:12%;
}
.quienes-somos-texto{
  padding: 15px;
  text-align: center;
  max-width: 600px;
}
.container_section-quienes-somos{
  /* text-align: center;
  min-height: 500px; */
}

.section-texts{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color:rgba(255, 255, 255, 80%);
}

@media (min-width: 768px) {
 .quienes__somos-title{
  margin-top: 15%;
}
}

  /* .section-texts{
  position:absolute;
  } */

@media (max-width: 768px) {
  .section-texts{
  margin-bottom: 50px;
  }
}
</style>
