<template>
  <div class="footer d-flex justify-content-between">
        <div class="direction_container">
            <p class="direction">C/ Budapest 56</p>
            <p class="direction">30392 Cartagena, Murcia</p>
            <p class="direction">0034 699 213 851</p>
        </div>
        <div class="logo_footer-container align-self-center">
          <img src='../assets/images/letrassolas.svg' class="logo_footer my-auto">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
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

.direction_container{
  min-width: 250px;
}

.direction{
  font-family: 'Poiret One', cursive;
  color: white;
  margin: 20px 0 0 0;
  padding-left: 30px;
}
.logo_footer{
  height: 100px;
}

@media (min-width: 768px) {
  .logo_footer{
    height: 150px;
  }
}

.logo_footer-container{
  margin-right: 80px;
}

@media (max-width: 768px) {
  .logo_footer-container{
  margin-right: 20px;
  }
}

</style>
