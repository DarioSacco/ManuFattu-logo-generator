<template>
  <form @change="onEdit">
    <fieldset class="brand">
      <label class="title">Nome della tua attività</label>
      <input type="text" v-model="brandName" required />
      <label class="title">Di cosa ti occupi?</label>
      <span>Dillo con due o tre parole</span>
      <input type="text" v-model="brandDescription" placeholder="es. riciclo creativo" required />
    </fieldset>
  </form>
</template>

<script>
export default {
  data() {
    return {
      brandName: '',
      brandDescription: ''
    };
  },
  methods: {
    onEdit() {
      this.$emit('dataChange', {
        brandName: this.brandName,
        brandDescription: this.brandDescription
      });
    }
  }
};
</script>

<style>
.brand label:not(:first-of-type) {
  margin-top: var(--gutter);
}

.brand input[type="text"] {
  height: calc(var(--gutter) * 2);
  margin-top: 4px;
  padding: 4px 8px;
  border: 2px solid var(--input-red);
  border-radius: calc(var(--gutter) * 2);
  outline: none;
  font-family: inherit;
  font-size: 1rem;
}
</style>