<template>
  <form class="work-area-form" @change="onEdit">
    <fieldset class="prodotti">
      <legend class="title">Quali prodotti realizzi?</legend>
      <span>Scegli tutto quello che vuoi.</span>
      <ul class="list">
        <li>
          <input
            id="abbigliamento"
            value="abbigliamento"
            type="checkbox"
            v-model="currentProdotti"
            :data-checked="currentProdotti.includes('abbigliamento') || null"
          />
          <label for="abbigliamento">Abbigliamento e accessori</label>
        </li>
        <li>
          <input
            id="gioielli"
            value="gioielli"
            type="checkbox"
            v-model="currentProdotti"
            :data-checked="currentProdotti.includes('gioielli') || null"
          />
          <label for="gioielli">Gioielli</label>
        </li>
        <li>
          <input
            id="design"
            value="design"
            type="checkbox"
            v-model="currentProdotti"
            :data-checked="currentProdotti.includes('design') || null"
          />
          <label for="design">Design, complementi d'arredo</label>
        </li>
        <li>
          <input
            id="cosmetica"
            value="cosmetica"
            type="checkbox"
            v-model="currentProdotti"
            :data-checked="currentProdotti.includes('cosmetica') || null"
          />
          <label for="cosmetica">Cosmetica</label>
        </li>
      </ul>
    </fieldset>

    <div class="lower-block">
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
              v-model="currentTecnica"
              :data-checked="currentTecnica === 'sartoria' || null"
            />
            <label for="sartoria">Sartoria</label>
          </li>
          <li>
            <input
              id="pittura"
              value="pittura"
              type="radio"
              v-model="currentTecnica"
              :data-checked="currentTecnica === 'pittura' || null"
            />
            <label for="pittura">Pittura</label>
          </li>
          <li>
            <input
              id="scultura"
              value="scultura"
              type="radio"
              v-model="currentTecnica"
              :data-checked="currentTecnica === 'scultura' || null"
            />
            <label for="scultura">Scultura</label>
          </li>
          <li>
            <input
              id="oreficeria"
              value="oreficeria"
              type="radio"
              v-model="currentTecnica"
              :data-checked="currentTecnica === 'oreficeria' || null"
            />
            <label for="oreficeria">Oreficeria</label>
          </li>
          <li>
            <input
              id="miscelatura"
              value="miscelatura"
              type="radio"
              v-model="currentTecnica"
              :data-checked="currentTecnica === 'miscelatura' || null"
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
              v-model="currentMateriali"
              :data-checked="currentMateriali.includes('ceramica') || null"
            />
            <label for="ceramica">Ceramica</label>
          </li>
          <li>
            <input
              id="legno"
              value="legno"
              type="checkbox"
              v-model="currentMateriali"
              :data-checked="currentMateriali.includes('legno') || null"
            />
            <label for="legno">Legno</label>
          </li>
          <li>
            <input
              id="tessuto_cuoio"
              value="tessuto_cuoio"
              type="checkbox"
              v-model="currentMateriali"
              :data-checked="currentMateriali.includes('tessuto_cuoio') || null"
            />
            <label for="tessuto_cuoio">Tessuto e cuoio</label>
          </li>
          <li>
            <input
              id="metalli"
              value="metalli"
              type="checkbox"
              v-model="currentMateriali"
              :data-checked="currentMateriali.includes('metalli') || null"
            />
            <label for="metalli">Metalli</label>
          </li>
          <li>
            <input
              id="carta"
              value="carta"
              type="checkbox"
              v-model="currentMateriali"
              :data-checked="currentMateriali.includes('carta') || null"
            />
            <label for="carta">Carta</label>
          </li>
          <li>
            <input
              id="pietra"
              value="pietra"
              type="checkbox"
              v-model="currentMateriali"
              :data-checked="currentMateriali.includes('pietra') || null"
            />
            <label for="pietra">Pietra</label>
          </li>
          <li>
            <input
              id="liquido"
              value="liquido"
              type="checkbox"
              v-model="currentMateriali"
              :data-checked="currentMateriali.includes('liquido') || null"
            />
            <label for="liquido">Liquido</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    materiali: Array,
    prodotti: Array,
    tecnica: String,
  },
  data() {
    return {
      currentMateriali: this.materiali,
      currentProdotti: this.prodotti,
      currentTecnica: this.tecnica,
    };
  },
  methods: {
    onEdit() {
      this.$emit('dataChange', {
        materiali: this.currentMateriali,
        prodotti: this.currentProdotti,
        tecnica: this.currentTecnica,
      });
    }
  }
}
</script>

<style scoped>
  .work-area-form {
    display: flex;
    flex-direction: column;
    gap: calc(var(--gutter) * 2);
  }

  .work-area-form > * {
    width: 100%;
  }

  .work-area-form .lower-block {
    display: flex;
    gap: inherit;
  }

  .work-area-form .lower-block > * {
    width: 50%;
  }

  .work-area-form fieldset .title::before {
    content: '';
    background-repeat: no-repeat;
  }

  .prodotti .title::before {
    background-image: url('../../public/assets/images/prodotti.png');
  }

  .materiali .title::before {
    background-image: url('../../public/assets/images/materiali.png');
  }

  .tecnica {
    width: 100%;
  }

  .tecnica .title::before {
    background-image: url('../../public/assets/images/tecnica.png');
  }

  @media (max-width: 767px) {
    .work-area-form {
      height: 100%;
      gap: var(--gutter);
      padding: 0 var(--gutter);
    }
  }
</style>