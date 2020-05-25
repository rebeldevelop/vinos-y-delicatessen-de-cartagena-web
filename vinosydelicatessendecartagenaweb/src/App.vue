<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

html{
    scroll-behavior:smooth;
    overflow-x:hidden;
}

* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

.App{
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    color: #751027;
    font-family: 'Abhaya Libre', serif;
}
</style>
