<template>
  <div class="quienes_somos-section">
          <div>
              <h1 class="quienes__somos_section--title text-center titulo_style" id="quienesSomos">{{$t('quienesSomos')}}</h1>
              <div class="row container_section-quienes-somos">
                <div class="col-md-6 seccion_botellas"></div>
                <div class="col-md-6 section-texts">
                  <section class="text_style quienes-somos-texto">{{$t('primerParrafo')}}</section>
                  <section class="text_style quienes-somos-texto">{{$t('segundoParrafo')}}</section>
                </div>
              </div>
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
.seccion_botellas{
    background-image: url('../assets/images/bottles.png');
    height: auto;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    text-align: center;
}
@media (min-width: 768px) {
  .seccion_botellas{
  min-height: 700px;
  }
}

.logo_image{
  height: 300px;
}

.quienes-somos-texto{
  padding: 15px;
  text-align: center;
  max-width: 600px;
}

@media (min-width: 768px) {
  .quienes-somos-texto{
  text-align: right;
  }
}

.container_section-quienes-somos{
  min-height: 500px;
  position: relative;
}

.section-texts{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}

@media (max-width: 768px) {
  .section-texts{
  background-color:rgba(255, 255, 255, 0.685);
  position:absolute;
  top: 15%;
  padding-right: 50px;
  }
}

@media (max-width: 1200px) {
  .section-texts{
  padding-right: 50px;
  }
}
</style>
