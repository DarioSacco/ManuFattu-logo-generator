<template>
  <form @change="onEdit">
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
</template>

<script>
export default {
  data() {
    return {
      materiali: [],
      prodotti: [],
      tecnica: '',
    };
  },
  methods: {
    onEdit() {
      this.$emit('dataChange', {
        materiali: this.materiali,
        prodotti: this.prodotti,
        tecnica: this.tecnica,
      });
    }
  }
}
</script>