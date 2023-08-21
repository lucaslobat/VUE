<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-average" value="average" name="rating" v-model="chosenRating" />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <div>
          <BaseButton>Submit</BaseButton>
        </div>
        <p v-if="errorMessage"> {{ errorMessage }}</p>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      chosenRating: null,
      invalidInput: false,
      errorMessage: null
    };
  },
  methods: {

    /* This function will send a POST request to the server, with an stringified object. 
       The object has 2 properties: name and rating */
    async submitSurvey() {

      /* Set errorMessage to null before submiting. If we had an error message before, it will get reseted to null. */
      this.errorMessage = null;

      /* If either the name or rating fields are empty, we abort the request by running the return */
      if (this.enteredName === "" || !this.chosenRating) {
        this.invalidInput = true;
        return;

      } else {
        this.invalidInput = false;
        await fetch(
          "https://vue-http-requests-2f3fb-default-rtdb.europe-west1.firebasedatabase.app/surveys.json",
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              name: this.enteredName,
              rating: this.chosenRating,
            }),
          }
        ).then(response => {
          // If we get an error response from the serve, we throw a new error, which will trigger the .catch block
          if (!response.ok) throw new Error("Unable to save data, please try later.")

        }).catch(error => {
          this.errorMessage = error;
        });
      }

      this.enteredName = "";
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type="text"] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
