<template>
<div class="blok">

    <div class="holder">
      <h1>TODO</h1>
      <form @submit.prevent="addSkill">

        <input type="text" placeholder="Vul hier een nieuwe taak in..." v-model="skill" v-validate="'min:5'" name="skill">

      <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
        <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
      </transition>

      </form>

      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <li v-for="(data, index) in skills" :key='index'>{{ data.skill }}</li>
      </transition-group>
      </ul>

      <p>Dit zijn de taken die nog voltooid moeten worden.</p>
  </div>
</div>
</template>

<script>
// Opzet van dit document is afkomstig van deze youtube tutorial; https://www.youtube.com/watch?v=78tNYZUS-ps

export default {
  name: 'Skills',
  data() {
    return {
      skill: '',
      skills: [
        { "skill": "Risico analyse doen"},
        { "skill": "Dossier bijwerken"}
      ]
    }
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then((result) => {
        if(result) {
          this.skills.push({skill: this.skill})
          this.skill = '';
        } else {

        }
      })
    }
  }
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2";

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #FAE1BC;
  border-left: 5px solid #E08701;
  margin-bottom: 2px;
  color: #3E5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
  background-color: #fff;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687F7F;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}

.alert-in-enter-active {
  animation: bounce-in .5s;
}

.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
