<template>
  <div class="footer row d-flex justify-content-between">
        <div class="col-6 direction_container">
            <p class="direction">C/ Budapest 56</p>
            <p class="direction">30392 Cartagena, Murcia</p>
            <p class="direction">0034 699 213 851</p>
        </div>
        <img src='../assets/images/letrassolas.svg' class="col-6 logo_footer my-auto">
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
    color: white;
    font-family: 'Abhaya Libre', serif;
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

</style>
