<template>
  <div style="position:relative;">
    <div class="navBar">
        <nav>
            <a href="#uno" data-ancla="uno">Seccion Uno</a>
            <a href="#dos" data-ancla="dos" >Seccion Dos</a>
            <a href="#tres" data-ancla="tres">Seccion Tres</a>
        </nav>
    </div>
    <div name="uno" id="uno" style="height:600px;width:100%;background-color:beige;">
        Seccion Uno
    </div>
    <div name="dos" id="dos" style="height:600px;width:100%;background-color:brown">
        Seccion Dos
    </div>
    <div name="tres" id="tres" style="height:600px;width:100%;background-color:blue">
        Seccion Tres
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollPrueba',
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
.navBar{
    /* position:fixed; */
    top:0;
    left:0;
    width:100%;
    height: 50px;
    display: flex;
    justify-content: center;
    background-color:chocolate;
    align-items: center;
}
</style>
