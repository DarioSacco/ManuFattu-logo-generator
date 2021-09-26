<template>
  <component class="logo-fragment" v-if="componentName" :is="componentName"></component>
</template>

<script>
import Abbigliamento from '../../public/assets/images/layers/abbigliamento.svg?inline';
import Carta from '../../public/assets/images/layers/carta.svg?inline';
import Ceramica from '../../public/assets/images/layers/ceramica.svg?inline';
import Cosmetica from '../../public/assets/images/layers/cosmetica.svg?inline';
import Design from '../../public/assets/images/layers/design.svg?inline';
import Gioielli from '../../public/assets/images/layers/gioielli.svg?inline';
import Legno from '../../public/assets/images/layers/legno.svg?inline';
import Liquido from '../../public/assets/images/layers/liquido.svg?inline';
import Metalli from '../../public/assets/images/layers/metalli.svg?inline';
import Miscelatura from '../../public/assets/images/layers/miscelatura.svg?inline';
import Oreficeria from '../../public/assets/images/layers/oreficeria.svg?inline';
import Pietra from '../../public/assets/images/layers/pietra.svg?inline';
import Pittura from '../../public/assets/images/layers/pittura.svg?inline';
import Sartoria from '../../public/assets/images/layers/sartoria.svg?inline';
import Scultura from '../../public/assets/images/layers/scultura.svg?inline';
import TessutoCuoio from '../../public/assets/images/layers/tessuto_cuoio.svg?inline';

export default {
  components: {
    Abbigliamento,
    Carta,
    Ceramica,
    Cosmetica,
    Design,
    Gioielli,
    Legno,
    Liquido,
    Metalli,
    Miscelatura,
    Oreficeria,
    Pietra,
    Pittura,
    Sartoria,
    Scultura,
    TessutoCuoio,
  },
  props: ['name'],
  computed: {
    componentName() {
      return this.name
        .split('_')
        .map(part => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
        .join('');
    },
  }
}
</script>

<style>
.logo-fragment circle.cls-1 {
  fill: none;
}
</style>
