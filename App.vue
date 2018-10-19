<template>
  <div id="app">
    <div class="menu">
      <nav>
        <router-link to="/">TODO</router-link>
        <router-link to="/analyse">Analyse</router-link>
        <router-link to="/about">Introductie</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>

    <div class="rightside">
      <router-view />
    </div>
    </div>
</template>

<script>
// Opzet van dit document is afkomstig van deze youtube tutorial; https://www.youtube.com/watch?v=78tNYZUS-ps

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

html {
  margin-right: 1.5em;
}

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
}

body, html {
  margin: 0;
  height: 100%;
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

a {
  text-decoration: none;
  color: #E08701;
}

#app {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 2fr 8fr;
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

.form {
  -webkit-box-shadow: 9px 14px 49px -11px rgba(201,201,201,1);
  -moz-box-shadow: 9px 14px 49px -11px rgba(201,201,201,1);
  box-shadow: 9px 14px 49px -11px rgba(201,201,201,1);
  margin-right: 1.5em;
}

.blok {
  display: grid;
  grid-template-columns: 3fr 2fr;
}
</style>
