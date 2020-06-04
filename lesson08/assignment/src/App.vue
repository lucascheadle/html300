// router utilized. Content created from script section, not hard coded//
<template>
  <div id="app">
    <div class="header">
      <div id="bizname">
        <p class="h1 font-weight-bold text-uppercase pt-4">{{ bizname }}</p>
        <p class="h3">{{ tagline }}</p>
      </div>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      bizname: 'Cheadle     Design',
      tagline: 'Landscape - Gardening'
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  padding: 20px;
  background-color: rgb(255, 233, 196);
  margin-bottom: 2rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.header {
  background-image: radial-gradient(circle, #7ebb05 0%, #42b983 100%);
  background-color: #42b983;
  height: 125px;
}
</style>
