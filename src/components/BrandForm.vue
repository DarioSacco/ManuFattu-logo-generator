<template>
  <form class="brand-form" @change="onEdit">
    <Logo class="manufattu-logo"></Logo>
    <fieldset>
      <label class="title">Nome della tua attività</label>
      <input type="text" v-model="name" @input="onEdit" required />
    </fieldset>
    <fieldset>
      <label class="title">Di cosa ti occupi?</label>
      <span>Dillo con due o tre parole</span>
      <input
        type="text"
        v-model="description"
        @input="onEdit"
        placeholder="es. riciclo creativo"
        required
      />
    </fieldset>
  </form>
</template>

<script>
import Logo from '../../public/assets/images/logo.svg?inline';

export default {
  components: {
    Logo,
  },
  props: {
    brandName: String,
    brandDescription: String,
  },
  data() {
    return {
      name: this.brandName,
      description: this.brandDescription,
    };
  },
  methods: {
    onEdit() {
      this.$emit('dataChange', {
        brandName: this.name,
        brandDescription: this.description,
      });
    }
  }
};
</script>

<style>
.brand-form {
  display: flex;
  flex-direction: column;
  gap: var(--gutter);
}

.brand-form .manufattu-logo {
  height: 60px;
  align-self: flex-start;
}

.brand-form .manufattu-logo .cls-1 {
  fill: var(--gray-dark);
}

.brand-form input[type="text"] {
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