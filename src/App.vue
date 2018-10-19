<template>
  <div id="app">
    <div class="menu">
      <nav>
        <router-link to="/about">About</router-link>
        <router-link to="/">Archief</router-link>
        <router-link to="/analyse">Analyse</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>

    <div class="rightside">
      <router-view />
    </div>

  </div>
</template>

<script>
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  components: {
    Skills
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
}

body, html {
  margin: 0;
  height: 100%;
}

html {
  margin-right: 1.5em;
}

#app {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 8fr;
}

nav {
  padding-right: 1em;
  display: flex;
  flex-direction: column;
  grid-column-start: 1fr;
  position: fixed;
}

nav a {
  padding: 0.5em;
  text-decoration: none;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  width: 100%;
}

.menu {
  background-color: #444;
  height: 100%;
  padding-top: 1em;
  margin-right: 1.5em;
  padding-left: 1em;
}

.rightside {
  margin-top: 1em;
}

/* footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  float: left;
} */

a {
  text-decoration: none;
  color: #ccc;
}

.form {
-webkit-box-shadow: 9px 14px 49px -11px rgba(201,201,201,1);
-moz-box-shadow: 9px 14px 49px -11px rgba(201,201,201,1);
box-shadow: 9px 14px 49px -11px rgba(201,201,201,1);
}

</style>
