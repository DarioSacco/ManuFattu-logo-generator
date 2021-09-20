<template>
  <div class="stepper">
    <button class="next" @click="next">Avanti</button>
    <button class="previous" v-if="step > 1" @click="previous">Indietro</button>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    next() {
      this.current++;
      this.$emit('stepChanged', { step: this.current });
    },
    previous() {
      Math.max(this.current--, 0);
      this.$emit('stepChanged', { step: this.current });
    },
  },
  created() {
    this.current = this.step;
  }
}
</script>

<style>
.stepper {
  display: flex;
  gap: var(--gutter);
}

.stepper button {
  height: calc(var(--gutter) * 2);
  margin: 0;
  padding: 0 calc(var(--gutter) * 2);
  border-radius: calc(var(--gutter) * 2);
  cursor: pointer;
}

.next {
  color: white;
  background: linear-gradient(to top, #686836, #E2E333);
  border: none;
}

.previous {
  background: white;
  border: 1px solid #707070;
}
</style>