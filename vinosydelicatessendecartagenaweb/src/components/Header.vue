<template>
  <div class="header-GeneralWrapper">
    <!-- <h3>{{$t('quienesSomos')}}</h3> -->
    <img src="../assets/images/todojunto.svg" alt="logo vinos y delicatessen de cartagena" class="logo__header">
  </div>
</template>

<script>
export default {
  name: 'Header',
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
.header-GeneralWrapper{
    width:100%;
    height: 150px;
    background-color: white;
}
.logo__header{
  height: 150px;
  padding-left: 5%;
}
</style>
