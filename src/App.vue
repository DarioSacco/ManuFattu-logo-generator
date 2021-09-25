<template>
  <div class="page">
    <section class="data-forms">
      <transition name="slide" mode="out-in">
        <BrandForm
          v-if="step == 1"
          :brand-name="brandName"
          :brand-description="brandDescription"
          @dataChange="onBrandChanged"
        ></BrandForm>
        <WorkAreaForm
          v-else-if="step == 2"
          :materiali="materiali"
          :prodotti="prodotti"
          :tecnica="tecnica"
          @dataChange="onWorkAreaChanged"
        ></WorkAreaForm>
        <PaletteForm
          v-else-if="step == 3"
          :palette="palette"
          @dataChange="onPaletteChanged"
        ></PaletteForm>
      </transition>
    </section>

    <section class="result-container">
      <div class="aspect-ratio-box">
        <div :class="['result', palette]">
          <LogoFragment
            v-for="prodotto in prodotti"
            :name="prodotto"
            :key="prodotto"
            data-layer="prodotto"
          ></LogoFragment>
          <LogoFragment
            v-for="materiale in materiali"
            :name="materiale"
            :key="materiale"
            data-layer="materiale"
          ></LogoFragment>
          <LogoFragment v-show="!!tecnica" :name="tecnica" data-layer="tecnica"></LogoFragment>
        </div>
      </div>

      <div class="brand">
        <p class="brand-name">{{ brandName || 'nome attività' }}</p>
        <p class="brand-description">{{ brandDescription || 'descrizione attività' }}</p>
        <Stepper :step="step" :max="3" @stepChanged="onStepChanged"></Stepper>
      </div>
    </section>
  </div>
</template>

<script>
import Stepper from './components/Stepper.vue';
import BrandForm from './components/BrandForm.vue';
import WorkAreaForm from './components/WorkAreaForm.vue';
import PaletteForm from './components/PaletteForm.vue';
import LogoFragment from './components/LogoFragment.vue';

export default {
  name: 'App',
  components: {
    Stepper,
    BrandForm,
    WorkAreaForm,
    PaletteForm,
    LogoFragment,
  },
  data() {
    return {
      brandName: '',
      brandDescription: '',
      materiali: [],
      palette: '',
      prodotti: [],
      tecnica: '',
      step: 1,
      previousStep: 1,
    };
  },
  methods: {
    onBrandChanged(ev) {
      this.brandName = ev.brandName;
      this.brandDescription = ev.brandDescription;
    },
    onWorkAreaChanged(ev) {
      this.materiali = ev.materiali;
      this.prodotti = ev.prodotti;
      this.tecnica = ev.tecnica;
    },
    onPaletteChanged(ev) {
      this.palette = ev.palette;
    },
    onStepChanged(ev) {
      this.previousStep = this.step;
      this.step = ev.step;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Rectory";
  src: url("../public/assets/font/Rectory-Display.eot");
  src: url("../public/assets/font/Rectory-Display.eot?#iefix") format("embedded-opentype"),
    url("../public/assets/font/Rectory-Display.woff2") format("woff2"),
    url("../public/assets/font/Rectory-Display.woff") format("woff"),
    url("../public/assets/font/Rectory-Display.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

@import './assets/css/palettes.css';

:root {
  --input-red: #cf3851;
  --gray-dark: #383836;
  --gutter: 16px;
}

* {
  box-sizing: border-box;
}

html,
body,
main {
  width: 100%;
  height: 100%;
}

html {
  font-size: 16px;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

button {
  font-family: inherit;
}

p {
  margin: 0;
}

fieldset,
legend {
  margin: 0;
  padding: 0;
  border: none;
}

#app {
  /* previene che la scrollbar spunti arrandom
  durante la transition dei forms */
  overflow: hidden;
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.4s;
}

.slide-enter-from {
  transform: translate(100vw, 0);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.slide-leave-to {
  transform: translate(-100vw, 0);
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gutter);
  width: 100%;
  height: 100%;
  padding: var(--gutter);
}

.page > * {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;
  width: 100%;
  height: 100%;
}

.data-forms {
  z-index: 0;
}

.data-forms fieldset {
  display: flex;
  flex-direction: column;
}

.data-forms fieldset .title {
  position: relative;
}

.data-forms fieldset .title::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  transform: translate(-45%, -30%);
  background-size: contain;
}

.data-forms * + .list {
  margin-top: var(--gutter);
}

.list {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}

.list li {
  display: flex;
  align-items: center;
}

.list li:not(:first-of-type) {
  margin-top: calc(var(--gutter) * 0.5);
}

.list input[type="radio"],
.list input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.list label {
  display: inline-flex;
  align-items: center;
  border: 2px solid transparent;
  cursor: pointer;
}

.list input + label::before {
  content: "";
  width: 16px;
  min-width: 16px;
  height: 16px;
  margin-right: calc(var(--gutter) * 0.5);
  line-height: 0;
  font-size: 32px;
  border: 3px solid var(--input-red);
  border-radius: 6px;
  background: transparent;
}

.list input[data-checked] + label::before {
  content: "\2713";
}

.result-container {
  flex-direction: column;
  gap: var(--gutter);
  z-index: 1;
  background: white;
  text-align: center;
}

.result-container .result {
  position: relative;
  width: 25vw;
  height: 25vw;
}

.result-container .result:empty {
  border: 6px solid var(--gray-dark);
  border-radius: 100%;
}

.result-container .result svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  fill: var(--gray-dark);
  transition: fill 0.6s ease;
}

.result-container .result svg[data-layer="prodotto"] {
  fill: var(--primary, var(--gray-dark));
  z-index: 0;
}

.result-container .result svg[data-layer="tecnica"] {
  fill: var(--tertiary, var(--gray-dark));
  z-index: 1;
}

.result-container .result svg[data-layer="materiale"] {
  fill: var(--secondary, var(--gray-dark));
  z-index: 2;
}

.result-container .brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: calc(var(--gutter) * 0.5);
  color: var(--gray-dark);
}

.result-container .brand-name {
  font-family: "Rectory", sans-serif;
  font-size: 3rem;
  -webkit-text-stroke: 1px currentColor;
}

.result-container .brand-description {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
}

@media (max-width: 1023px) {
  html {
    font-size: 14px;
  }
}

@media (max-width: 767px) {
  :root {
    --gutter: 12px;
  }

  .page {
    flex-wrap: wrap;
  }

  .page > * {
    --half-screen: calc(50vh - (var(--gutter) * 2));
    max-width: 100%;
    height: var(--half-screen);
  }

  .data-forms {
    overflow: hidden auto;
    border-bottom: 2px solid var(--gray-dark);
  }

  .result-container {
    width: 100%;
    justify-content: flex-start;
  }

  .result-container .aspect-ratio-box {
    position: relative;
    width: calc(var(--half-screen) / 2);
  }

  .result-container .aspect-ratio-box::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .result-container .result {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
