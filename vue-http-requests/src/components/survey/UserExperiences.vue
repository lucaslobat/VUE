<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    getExperiences() {
      fetch(
        "https://vue-http-requests-2f3fb-default-rtdb.europe-west1.firebasedatabase.app/surveys.json"
      )
        // Receives the response from the server and parse it to json.
        .then((res) => {
          const parsedResult = res.json();
          return parsedResult;
        })

        /* Receives the json object, iterate over each of its properties, and push a new object to the results Array.
          propertyId is used as the value for the new object's id property.

          El bucle for recorre todos los elementos de dentro del objeto "data".
          Para cada elemento, crea un nuevo objeto con las propiedades id, name y rating.
          "id" tiene como valor el nombre de la llave del elemento actual.
          "name" tiene como valor la propiedad "name" correspondiente al elemento actual.
          "rating" tiene como valor la propiedad "rating" correspondiente al elemento actual.

          The for loop loops through all the elements inside the "data" object.
          For each element, it creates a new object with properties id, name and rating.
          "id" has as value the key name of the current element.
          "name" has as value the "name" property corresponding to the current element.
          "rating" has as value the "rating" property corresponding to the current element.
          
          */
        .then((data) => {
          const newResults = []
          for (const objectKey in data) {
            newResults.push({
              id: objectKey,
              name: data[objectKey].name,
              rating: data[objectKey].rating,
            });
          }

          this.results = newResults
        })
        .catch((err) => {
          return console.log(`Error in the request: ${err}`);
        });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
