<template>
  <BaseContainer>
    <form @submit.prevent="saveResource">
      <label class="form-label" for="title">Title</label>
      <input
        class="form-input"
        type="text"
        id="title"
        name="title"
        v-model="resourceObject.title"
      />

      <label class="form-label" for="author">Author</label>
      <input
        class="form-input"
        type="text"
        id="author"
        name="author"
        v-model="resourceObject.author"
      />

      <!--      <label class="form-label" for="description">Description</label>
      <textarea
        class="form-input"
        id="description"
        name="description"
        required
        :value="this.resourceObject.description"
      ></textarea> -->

      <label class="form-label" for="link">Link</label>
      <input
        class="form-input"
        type="url"
        id="link"
        name="link"
        v-model="resourceObject.link"
      />

      <BaseButton type="submit">Save resource</BaseButton>
    </form>
    <BaseModal @toggle-valid="toggleValid" v-if="!isFormValid">
      <template #modalHeader> Warning </template>
      <template #modalBody> You need to fill in all the spaces </template>
    </BaseModal>
  </BaseContainer>
</template>

<script>
export default {
  data() {
    return {
      resourceObject: {
        title: "",
        link: "",
        author: "",
      },
      isFormValid: true,
    };
  },

  methods: {
    saveResource() {
      if (
        this.resourceObject.title === "" ||
        this.resourceObject.link === "" ||
        this.resourceObject.author === ""
      ) {
        this.toggleValid();
      } else {
        this.addResource(this.resourceObject);
        this.resourceObject.title = "";
        this.resourceObject.link = "";
        this.resourceObject.author = "";
      }
    },
    toggleValid(){
      this.isFormValid = !this.isFormValid;
    }
  },

  inject: ["addResource"],
};
</script>

<style scoped>
form {
  width: 50%;
  margin: 1rem auto;
}
.form-input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 16px;
}

.form-input:focus {
  border-color: #007bff;
  outline: none;
}

.form-label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}
</style>
