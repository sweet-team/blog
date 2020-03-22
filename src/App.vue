<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    components: {}
  };
</script>


<style lang="scss">
  #app {
    /*font-family: Verdana, Geneva, sans-serif;*/
    /*font-family: Georgia, serif;*/
    font-family: "roboto-regular", sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #app {
    font-family: microsoft yahei, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    #nav {
      padding: 30px;

      a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
</style>

