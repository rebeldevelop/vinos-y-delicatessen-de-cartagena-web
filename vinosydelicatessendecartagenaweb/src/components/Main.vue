<template>
  <div class="main-GeneralWrapper">
    <div class= "d-flex justify-content-between">
    <Header></Header>
    <div class="languaje_container ">
      <a href="#" @click="setLocale('es')">Español</a>
      <a href="#" @click="setLocale('en')" style="margin-left:15px;" >English</a>
    </div>
    </div>
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

a{
  height: 25px;
}
a:link, a:visited, a:active {
    text-decoration:none;
    color: #4A4A4A;
}

a:hover{
    color: #751027;
    border-bottom: 1px solid #751027;
}

.languaje_container{
  width:100%;
  display:flex;
  justify-content:flex-end;
  margin-top:10px;
  padding-right: 30px;
}
@media (max-width: 768px) {
  .languaje_container{
  font-size: 14px;
}
}
</style>
