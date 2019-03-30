/**
 * @file mofron-effect-synwhei/index.js
 * @author simpart
 */
const mf = require('mofron');
const Syncwin = require('mofron-effect-syncwin');

mf.effect.Synwhei = class extends Syncwin {
    
    constructor (po) {
        try {
            super();
            this.name('Synwhei');
            this.prmMap('offset');
            this.valid(false, true);
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    offset (prm) {
        try {
            return super.offset((undefined === prm) ? undefined : 0, prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.Synwhei;
