<template>
  <div class="adminPage">
      <AdminPageMensajes></AdminPageMensajes>
  </div>
</template>

<script>
import AdminPageMensajes from '@/components/AdminPage_Mensajes'
export default {
  name: 'AdminPage',
  data () {
    return {
    }
  },
  // computed : {}
  components: { AdminPageMensajes }
  // props: {}
  // methods: {}
  // created () {}
  // mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
