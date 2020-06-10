<template>
  <div class="main-GeneralWrapper">
    <div style="width:100%;display:flex;justify-content:flex-end;padding-right: 50px;margin-top:10px;">
      <a href="#" @click="setLocale('es')">Español</a>
      <a href="#" @click="setLocale('en')" style="margin-left:15px;" >English</a>
    </div>
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
  components: { Header, NavBar, PageBody },
  methods: {
    setLocale (locale) {
      this.$i18n.locale = locale
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-GeneralWrapper{
    width: 100vw;
    height: auto;
}
</style>
