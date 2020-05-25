<template>
  <div class="pageBody-GeneralWrapper">
      <div class="section01">
          <div>
              <h1>Soy la sección 1</h1>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PageBody',
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
.pageBody-GeneralWrapper{
    width: 100vw;
    height: auto;
    background-color: burlywood;
}
.section01{
    width: 100vw;
    height: 200px;
    background-color: darkgray;
}
</style>
