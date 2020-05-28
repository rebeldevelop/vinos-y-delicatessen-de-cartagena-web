<template>
  <div class="navBar-GeneralWrapper">
    <div class="navBar-buttonsZone">
      <nav>
          <a href="#inicio" data-ancla="inicio">Inicio</a>
          <a href="#quienesSomos" data-ancla="quienesSomos">Quiénes Somos</a>
          <a href="#formularioContacto" data-ancla="formularioContacto">Contacto</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
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
.navBar-GeneralWrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50px;
    background-color: bisque;
}
.navBar-buttonsZone > nav{
  width:300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
