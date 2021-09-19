<template>
  <div class="page">
    <form>
      <fieldset class="brand">
        <label class="title">Nome della tua attività</label>
        <input type="text" v-model="brandName" />

        <label class="title">Di cosa ti occupi?</label>
        <span>Dillo con due o tre parole</span>
        <input type="text" v-model="brandDescription" placeholder="es. riciclo creativo" />
      </fieldset>

      <fieldset class="prodotti">
        <legend class="title">Quali prodotti realizzi?</legend>
        <span>Scegli tutto quello che vuoi.</span>
        <ul class="list">
          <li>
            <input
              id="abbigliamento"
              value="abbigliamento"
              type="checkbox"
              v-model="prodotti"
              :data-checked="prodotti.includes('abbigliamento') || null"
            />
            <label for="abbigliamento">Abbigliamento e accessori</label>
          </li>
          <li>
            <input
              id="gioielli"
              value="gioielli"
              type="checkbox"
              v-model="prodotti"
              :data-checked="prodotti.includes('gioielli') || null"
            />
            <label for="gioielli">Gioielli</label>
          </li>
          <li>
            <input
              id="design"
              value="design"
              type="checkbox"
              v-model="prodotti"
              :data-checked="prodotti.includes('design') || null"
            />
            <label for="design">Design, complementi d'arredo</label>
          </li>
          <li>
            <input
              id="cosmetica"
              value="cosmetica"
              type="checkbox"
              v-model="prodotti"
              :data-checked="prodotti.includes('cosmetica') || null"
            />
            <label for="cosmetica">Cosmetica</label>
          </li>
        </ul>
      </fieldset>
    </form>

    <form>
      <fieldset class="tecnica">
        <legend class="title">
          Qual è la tecnica che utilizzi maggiormente?
        </legend>
        <span>Scegline una soltanto.</span>
        <ul class="list">
          <li>
            <input
              id="sartoria"
              value="sartoria"
              type="radio"
              v-model="tecnica"
              :data-checked="tecnica === 'sartoria' || null"
            />
            <label for="sartoria">Sartoria</label>
          </li>
          <li>
            <input
              id="pittura"
              value="pittura"
              type="radio"
              v-model="tecnica"
              :data-checked="tecnica === 'pittura' || null"
            />
            <label for="pittura">Pittura</label>
          </li>
          <li>
            <input
              id="scultura"
              value="scultura"
              type="radio"
              v-model="tecnica"
              :data-checked="tecnica === 'scultura' || null"
            />
            <label for="scultura">Scultura</label>
          </li>
          <li>
            <input
              id="oreficeria"
              value="oreficeria"
              type="radio"
              v-model="tecnica"
              :data-checked="tecnica === 'oreficeria' || null"
            />
            <label for="oreficeria">Oreficeria</label>
          </li>
          <li>
            <input
              id="miscelatura"
              value="miscelatura"
              type="radio"
              v-model="tecnica"
              :data-checked="tecnica === 'miscelatura' || null"
            />
            <label for="miscelatura">Miscelatura</label>
          </li>
        </ul>
      </fieldset>

      <fieldset class="materiali">
        <legend class="title">Che materiali usi?</legend>
        <span>Scegli tutto quello che vuoi.</span>
        <ul class="list">
          <li>
            <input
              id="ceramica"
              value="ceramica"
              type="checkbox"
              v-model="materiali"
              :data-checked="materiali.includes('ceramica') || null"
            />
            <label for="ceramica">Ceramica</label>
          </li>
          <li>
            <input
              id="legno"
              value="legno"
              type="checkbox"
              v-model="materiali"
              :data-checked="materiali.includes('legno') || null"
            />
            <label for="legno">Legno</label>
          </li>
          <li>
            <input
              id="tessuto_cuoio"
              value="tessuto_cuoio"
              type="checkbox"
              v-model="materiali"
              :data-checked="materiali.includes('tessuto_cuoio') || null"
            />
            <label for="tessuto_cuoio">Tessuto e cuoio</label>
          </li>
          <li>
            <input
              id="metalli"
              value="metalli"
              type="checkbox"
              v-model="materiali"
              :data-checked="materiali.includes('metalli') || null"
            />
            <label for="metalli">Metalli</label>
          </li>
          <li>
            <input
              id="carta"
              value="carta"
              type="checkbox"
              v-model="materiali"
              :data-checked="materiali.includes('carta') || null"
            />
            <label for="carta">Carta</label>
          </li>
          <li>
            <input
              id="pietra"
              value="pietra"
              type="checkbox"
              v-model="materiali"
              :data-checked="materiali.includes('pietra') || null"
            />
            <label for="pietra">Pietra</label>
          </li>
          <li>
            <input
              id="liquido"
              value="liquido"
              type="checkbox"
              v-model="materiali"
              :data-checked="materiali.includes('liquido') || null"
            />
            <label for="liquido">Liquido</label>
          </li>
        </ul>
      </fieldset>
    </form>

    <form>
      <fieldset class="palettes">
        <legend class="title">I tuoi colori aziendali</legend>
        <span>Scegli una sola palette.</span>
        <ul class="list">
          <li v-for="paletteName in PALETTES" :key="paletteName">
            <input
              :id="paletteName"
              :value="paletteName"
              type="radio"
              v-model="palette"
              :data-checked="paletteName === palette || null"
            />
            <label :for="paletteName">{{ paletteName }}</label>
          </li>
        </ul>
      </fieldset>
    </form>

    <section class="result-container">
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
        <LogoFragment
          v-show="!!tecnica"
          :name="tecnica"
          data-layer="tecnica"
        ></LogoFragment>
      </div>
      <p class="brand-name">{{ brandName || 'nome attività' }}</p>
      <p class="brand-description">{{ brandDescription || 'descrizione attività' }}</p>
    </section>
  </div>
</template>

<script>
import LogoFragment from './components/LogoFragment.vue';

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
  name: 'App',
  components: {
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
    };
  },
  computed: {
    PALETTES() {
      return PALETTES;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

@font-face {
  font-family: 'Rectory';
  src: url('/assets/font/Rectory-Display.eot');
  src: local('Rectory'), local('Rectory-Display'),
    url('/assets/font/Rectory-Display.eot?#iefix') format('embedded-opentype'),
    url('/assets/font/Rectory-Display.woff2') format('woff2'),
    url('/assets/font/Rectory-Display.woff') format('woff'),
    url('/assets/font/Rectory-Display.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

/* --- Palettes --- */
.fresco {
  --primary: #6cb4a0;
  --secondary: #88d3db;
  --tertiary: #70acf1;
}

.solare {
  --primary: #feca3a;
  --secondary: #f49517;
  --tertiary: #d34016;
}

.pastello {
  --primary: #e1dc7e;
  --secondary: #f5bf7e;
  --tertiary: #f18881;
}

.dark {
  --primary: #0672a8;
  --secondary: #133658;
  --tertiary: #0e2132;
}

.bio {
  --primary: #b2aa4f;
  --secondary: #4c722c;
  --tertiary: #70a35d;
}

.gold {
  --primary: #ffd508;
  --secondary: #95907e;
  --tertiary: #f8ad15;
}

.tea {
  --primary: #7b7b7c;
  --secondary: #acd7bd;
  --tertiary: #e6bf79;
}

.pink {
  --primary: #ee7e98;
  --secondary: #efa8b6;
  --tertiary: #f0cfdd;
}

.estate {
  --primary: #8ccdc6;
  --secondary: #dc6758;
  --tertiary: #f6a55c;
}

.mare {
  --primary: #06466b;
  --secondary: #096c8a;
  --tertiary: #1595ac;
}

.coffee {
  --primary: #dfb78c;
  --secondary: #ac6834;
  --tertiary: #4c291a;
}

.lago {
  --primary: #1f858f;
  --secondary: #bbd0e3;
  --tertiary: #d3bb9c;
}

.salotto {
  --primary: #1b768f;
  --secondary: #eddf97;
  --tertiary: #9a2b17;
}

.muschio {
  --primary: #849971;
  --secondary: #426447;
  --tertiary: #25423d;
}

/* --- Fine palettes --- */


:root {
  --input-red: #cf3851;
  --gutter: 16px;
}

html {
  font-size: 16px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: var(--gutter);
  font-family: 'Poppins', sans-serif;
}

p {
  margin: 0;
}

.page {
  display: flex;
  gap: var(--gutter);
}

.page > * {
  width: 25%;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gutter);
}

fieldset {
  display: flex;
  flex-direction: column;
  border: none;
  margin: 0;
  padding: 0;
}

legend {
  margin: 0;
  padding: 0;
  border: none;
}

.title {
  font-size: 24px;
  font-weight: 500;
}

.brand label:not(:first-of-type) {
  margin-top: var(--gutter);
}

.brand input[type='text'] {
  height: 32px;
  margin-top: 4px;
  padding: 4px 8px;
  border: 2px solid var(--input-red);
  border-radius: 32px;
  outline: none;
  font-family: inherit;
  font-size: 1rem;
}

fieldset > * + .list {
  margin-top: var(--gutter);
}

.list {
  display: flex;
  flex-direction: column;
  gap: calc(var(--gutter) * 0.5);
  margin: 0;
  padding: 0;
  list-style: none;
}

.list li {
  display: flex;
  align-items: center;
}

.list input[type='radio'],
.list input[type='checkbox'] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.list label {
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  cursor: pointer;
}

.list input + label::before {
  content: '';
  width: 16px;
  height: 16px;
  margin-right: calc(var(--gutter) * 0.5);
  border: 3px solid var(--input-red);
  border-radius: 6px;
  background: transparent;
}

.list input[data-checked] + label::before {
  background: var(--input-red);
}

.palettes label {
  text-transform: capitalize;
}

.result-container {
  position: fixed;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.result {
  position: relative;
  width: 25vw;
  height: 25vw;
}

.result:empty {
  border: 6px solid black;
  border-radius: 100%;
}

.result svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  fill: #000;
  transition: fill .6s ease;
}

.result svg[data-layer='prodotto'] {
  fill: var(--primary);
}

.result svg[data-layer='materiale'] {
  fill: var(--secondary);
}

.result svg[data-layer='tecnica'] {
  fill: var(--tertiary);
}

.brand-name {
  font-family: 'Rectory', sans-serif;
  font-size: 3rem;
}

.brand-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
}
</style>
