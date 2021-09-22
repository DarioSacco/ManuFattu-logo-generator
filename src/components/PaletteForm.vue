<template>
  <form @change="onEdit">
    <fieldset class="palettes">
      <legend class="title">I tuoi colori aziendali</legend>
      <span>Scegli una sola palette.</span>
      <ul class="list">
        <li v-for="paletteName in PALETTES" :key="paletteName">
          <input
            :id="paletteName"
            :value="paletteName"
            type="radio"
            v-model="currentPalette"
            :data-checked="paletteName === currentPalette || null"
          />
          <label :for="paletteName">{{ paletteName }}</label>
        </li>
      </ul>
    </fieldset>
  </form>
</template>

<script>
const PALETTES = [
  'fresco',
  'solare',
  'pastello',
  'dark',
  'bio',
  'gold',
  'tea',
  'pink',
  'estate',
  'mare',
  'coffee',
  'lago',
  'salotto',
  'muschio'
];

export default {
  props: {
    palette: String,
  },
  data() {
    return {
      currentPalette: this.palette,
    };
  },
  methods: {
    onEdit() {
      this.$emit('dataChange', { palette: this.currentPalette });
    }
  },
  computed: {
    PALETTES() {
      return PALETTES;
    },
  },
}
</script>

<style>
.palettes label {
  text-transform: capitalize;
}

.palettes .list {
  display: block;
  column-count: 2;
}
</style>