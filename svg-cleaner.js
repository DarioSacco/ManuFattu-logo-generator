/**
 * Toglie il tag `defs` dai file svg
 * (che altrimenti darebbero errore in fase di compilazione)
 * dopo essere stati convertiti in componenti (`vue-cli-plugin-svg`).
 * @param {string} svg Stringa del file svg
 * @returns {string} svg pulita
 */
module.exports = function SvgCleaner(svg) {
  this.cacheable();
  return svg.replace(/<defs>(.*?)<\/defs>/ig, '');
};