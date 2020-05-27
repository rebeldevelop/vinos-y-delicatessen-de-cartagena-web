<template>
  <div class="quienes_somos-section">
          <div>
              <h1 class="quienes__somos_section--title text-center titulo_style">Quiénes somos</h1>
              <div class="row container_section-quienes-somos">
                <div class="col-md-6 seccion_botellas"></div>
                <div class="col-md-6 section-texts">
                  <section class="text_style quienes-somos-texto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at arcu posuere, pellentesque tellus cursus, mattis erat. Quisque sollicitudin, tortor mollis vulputate dignissim, erat neque sagittis ipsum, vel posuere magna odio a ex. Integer mauris nisi, tempus condimentum faucibus sed, posuere non lorem. Ut et felis non massa dapibus dignissim. Integer sed nisi a arcu ultricies tristique.
                  </section>
                  <section class="text_style quienes-somos-texto">Suspendisse mattis nisl lorem, bibendum volutpat velit tempus nec. Suspendisse potenti. Proin viverra felis sapien, id venenatis mauris commodo non. Nullam ac nisl congue, rhoncus erat et, lacinia eros. Nunc at massa sollicitudin, accumsan est quis, scelerisque urna. In et erat vel purus suscipit bibendum et quis elit.
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
  max-width: 600px;

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
