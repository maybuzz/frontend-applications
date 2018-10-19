<template>
<div class="risico">
  <div class="leftside">
    <div class="meter">
      <h1>Analyse</h1>

      <h3>Gebruiksaanwijzing</h3>
        <p>Vul het formulier in om een risico analyse te maken. Hoe hoger het percentage, hoe hoger het risico van mogelijke uit huisplaatsing.</p>
        <p>Gebruik deze tool ook om een overzicht te krijgen van risico- en beschermings factoren.</p>
        <div class="result">
          <h1 id="percentage">0.00%</h1>
        </div>
    </div>
  </div>

<div class="rightside">
  <div class="form" v-for="(cat, index) in getQuestionsByCategory">
    <div class="question" v-for="(item, index) in cat">
      <p class="title">{{ item.categorie }}</p>
        <div v-for="categorie in Object.values(item.items)">
          <label>{{ categorie.Vraag}}</label>

            <form>
              <select v-bind:data-id="categorie.id" @change="onChange">
                <option disabled selected>Kies een antwoord</option>
                <option v-for="answer in categorie.Opties" v-bind:value="answer.Gewicht"
                 >{{ answer.Antwoord }}</option>
              </select>
            </form>

        </div>
    </div>
  </div>
</div>
</div>


</template>

<script>
// Algemene opmerking: mijn code zal overeen komen met Mitch Goudkuil, Daniel van der Schuur en Nathan Keyzer. Wij hebben hulp gehad van Tim Ruiterkamp, Gijs Laarman en Dennis Wegereef. Vervolgens hebben wij onze code met elkaar gedeeld.

import json from '../data.json'
export default {
   data() {
     return {
         myJson: json,
         Categorie: "",
         currentOption: [],
         weight: new Object()
     };
   },
   // Tim Ruiterkamp heeft deze code voor Mitch Goudkuil geschreven. Ik heb deze overgenomen en aangepast aan mijn eigen project.
   computed: {
     filterCategories: function() {
       let categoryNames = [];
       const categories = this.myJson
         .map(category => category.Categorie)
         .filter((categorie, index, all) => {
           if (all.indexOf(categorie) == index) {
             categoryNames.push(categorie);
           } else {
           }
         });
       return categoryNames;
     },

     getQuestionsByCategory: function() {
       return this.filterItemsByCategory()
     }

   },
   methods: {
     filterItemsByCategory: function() {
        const categories = this.filterCategories
        const newArr = []
        categories.forEach(category => {
          const result = this.addItemsToCategories(category)
          newArr.push(result)
         })
         return newArr
     },

     // Tim Ruiterkamp heeft mij geholpen deze functie te schrijven
     addItemsToCategories: function(subject) {
       const seperatedCategoryObjects = []
       const filteredItems = this.myJson
         .map(category => category)
         .filter(item => item.Categorie == subject)

      seperatedCategoryObjects.push({categorie: subject, items: filteredItems})

       return seperatedCategoryObjects
     },

     // Gijs heeft geholpen om de functie op te zetten en het gewicht mee te geven en door te geven aan het object weight. In deze functie koppel ik de vragen aan de antwoorden en daarmee aan het gewicht. Ook zorg ik er hier voor dat een antwoord upgedate kan worden ipv. alleenmaar toegevoegd.
     onChange: function(e) {
       const targetId = e.target.getAttribute('data-id')
       let valueArrays = Object.values(this.weight)
       let percentage = calculated(valueArrays)
       let percentageElement = document.querySelector("#percentage")

       this.weight[targetId] = e.target.value;

       percentageElement.textContent = percentage + "%"

       // .reduce() documentatie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
       // Jim heeft mij geholpen deze functie te schrijven
       // de formule is afkomstig van Arjan de Jager en is getest door Folkert-Jan van der Pol en Danier van de Velde
       function calculated(valueArrays) {
         var sum = valueArrays.reduce(function(totaal, currentWeight){
           return Number(totaal) + Number(currentWeight)
         }, 0)
         return Number( ( 1 / ( 1 + Math.exp( -1 * ( -8.57219 + sum ) ) ) * 100 ).toFixed( 2 ) )
       }

       // Wouter heeft mij gewezen op ....className, zo kan ik de kleuren van mijn percentage aanpassen afhankelijk van de grootte van het percentage
       if (percentage > 5) {
         percentageElement.className = "red"
       } else if (percentage > 3 ) {
         percentageElement.className = "orange"
       } else {
         percentageElement.className = "green"
       }
     },

    }

    }
</script>

<style scoped>

.risico {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.meter {
  margin-right: 1em;
  height: 100%;
  display: block;
  grid-column-start: 1fr;
  position: fixed;
  max-width: 14rem;
  background-color: #EEEEEE;
}

h2 {
  margin: 0;
}

form {
  margin-top: 0;
}

a {
  margin-top: 1em;
  padding: 0.5em;
  text-decoration: none;
  border-radius: 3px;
  color: #000;
  background-color: #E08701;
  font-weight: bold;
  width: 100%;
}

select {
  margin-top: 0.5em;
  margin-bottom: 1em;
  border: solid 1px;
  border-color: #ccc;
}

.title {
  font-weight: bold;
  font-size: 1.25em;
  margin-bottom: 0.5em;
  margin-top: 0;
  padding-bottom: 0.5em;
}

.question {
  background-color: #fff;
  margin-bottom: 1em;
  padding: 0.75em;
  border-left: solid 5px;
  border-color: #E08701;
}

.red {
  color: red;
}

.orange {
  color: orange;
}

.green {
  color: green;
}
</style>
