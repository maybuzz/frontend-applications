<template>
<div class="risico">
  <div class="leftside">
    <div class="meter">
      <h1>Risico analyse</h1>

      <h3>Gebruiksaanwijzing</h3>
        <p>Vul het formulier in om een risico analyse te maken. Hoe hoger het percentage, hoe hoger het risico van mogelijke uit huisplaatsing.</p>
        <p>Gebruik deze tool ook om een overzicht te krijgen van risico- en beschermings factoren.</p>
        <div class="result">
          <h3 id="percentage">0.00%</h3>
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
              <select v-bind:data-id="categorie.id" @change="onChange" >
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
   // wordt gerenderd voor de pagina wordt geladen
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

     // find index by change
     addItemsToCategories: function(subject) {
       const seperatedCategoryObjects = []
       const filteredItems = this.myJson
         .map(category => category)
         .filter(item => item.Categorie == subject)

      seperatedCategoryObjects.push({categorie: subject, items: filteredItems})

       return seperatedCategoryObjects
     },

     onChange: function(e) {
       // Gijs heeft geholpen met eerste deel om de functie op te zetten en het gewicht mee te geven en door te geven aan het object weight.
       // e = je event
       // e.target.value
       const targetId = e.target.getAttribute('data-id')
       let valueArrays = Object.values(this.weight)
       let percentage = calculated(valueArrays)
       let percentageElement = document.querySelector("#percentage")

       this.weight[targetId] = e.target.value;

       percentageElement.textContent = percentage + "%"

       function calculated(valueArrays) {
         var sum = valueArrays.reduce(function(totaal, currentWeight){
           return Number(totaal) + Number(currentWeight)
         }, 0)
         return Number( ( 1 / ( 1 + Math.exp( -1 * ( -8.57219 + sum ) ) ) * 100 ).toFixed( 2 ) )
       }

       if (percentage > 5) {
         percentageElement.className = "red"
       } else if (percentage > 3 ) {
         percentageElement.className = "orange"
       } else {
         percentageElement.className = "green"
       }
     }
   }

// in data maak je een array of object aan
// in je onchange haal je de waarde van een selectie op
// push value naar je data
// Zorg dat je data niet overschrijft maar toevoegd

// e.target.getAttribute('data-id')


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
  border-color: #ccc;
}

select {
  margin-top: 0.5em;
  margin-bottom: 1em;
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
