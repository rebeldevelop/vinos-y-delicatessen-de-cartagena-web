<template>
  <div class="navBar-GeneralWrapper d-flex justify-content-around">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav menu">
          <li class="nav-item item-menu active">
            <a class="nav-link" href="#inicio">{{$t('home')}}</a>
          </li>
          <li class="nav-item item-menu">
            <a class="nav-link" href="#quienesSomos">{{$t('quienesSomos')}}</a>
          </li>
          <li class="nav-item item-menu">
            <a class="nav-link" href="#formularioContacto">{{$t('contacto')}}</a>
          </li>
        </ul>
    </nav>
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
  background-color: #F8F9FA;
    width: 100vw;
}
.item-menu{
padding: 0 30px;
}
.navBar-buttonsZone > nav{
  width:300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 992px) {
  .menu{
    align-items: center;
  }
}

</style>
