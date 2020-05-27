<template>
  <div class="main-GeneralWrapper">
      <Header></Header>
      <NavBar></NavBar>
      <PageBody></PageBody>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import PageBody from '@/components/PageBody'

export default {
  name: 'Main',
  data () {
    return {
    }
  },
  components: { Header, NavBar, PageBody }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-GeneralWrapper{
    width: 100vw;
    height: auto;
}
</style>
