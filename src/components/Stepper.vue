<template>
  <div class="stepper">
    <button class="next" v-show="step < max" @click="next">Avanti</button>
    <button class="previous" v-show="step > 1" @click="previous">Indietro</button>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: 1,
    },
    max: Number,
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    next() {
      if (this.current == this.max) {
        return;
      }

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
  font-size: 1rem;
  cursor: pointer;
}

.stepper button:hover {
  filter: drop-shadow(0 0 2px #707070);
}

.next {
  color: white;
  background: linear-gradient(to top, #c3c434, #e2e333);
  border: none;
}

.previous {
  background: white;
  border: 1px solid var(--gray-dark);
}
</style>