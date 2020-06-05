<template>
  <div class="footer row d-flex justify-content-between">
        <div class="col-md-6">
            <p class="direction">Calle Budapest 56</p>
            <p class="direction">30392 Cartagena, Murcia</p>
            <p class="direction">0034 699 213 851</p>
        </div>
        <img src='../assets/images/letrassolas.svg' class="col-md-6 logo_footer">
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
.direction{
    color: white;
    font-family: 'Abhaya Libre', serif;
    margin: 20px 0 0 0;
    padding-left: 30px;
}
.logo_footer{
  height:0;
}
@media (min-width: 768px) {
  .logo_footer{
    height: 150px;
  }
}

</style>
