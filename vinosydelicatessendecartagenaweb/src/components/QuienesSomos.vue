<template>
  <div class="quienes_somos-section">
          <div>
              <h1 class="quienes__somos_section--title text-center titulo_style" id="quienesSomos">Quiénes somos</h1>
              <div class="row container_section-quienes-somos">
                <div class="col-md-6 seccion_botellas"></div>
                <div class="col-md-6 section-texts">
                  <section class="text_style quienes-somos-texto">
                    Somos un pequeño equipo especializado en la representación, comercialización y distribución de todo tipo de vinos elaborados en diversas bodegas: desde las más representativas de nuestro país a otras aún no tan populares cuya calidad de producto es impecable. Cabe señalar que también contamos con productos de ámbito internacional.
                  </section>
                  <section class="text_style quienes-somos-texto">Trabajamos a diario para ofrecer el mejor servicio y satisfacer a los paladares más exquisitos. Nuestro objetivo es claro: dar la mejor calidad al mejor precio. Para ello nos adaptamos a ti, haciendo que tu experiencia sea inolvidable.
                  </section>
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

.logo_image{
  height: 300px;
}

.quienes-somos-texto{
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
}

.section-texts{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
