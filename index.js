/**
 * @file mofron-effect-synwhei/index.js
 * @brief syncronize component height to window height
 * @author simpart
 */
const mf = require('mofron');
const Syncwin = require('mofron-effect-syncwin');

mf.effect.Synwhei = class extends Syncwin {
    /**
     * initialize effect
     * 
     * @param (mixed) offset parameter
     *                object: effect option
     * @param (prm) offset parameter
     * @pmap offset
     * @type private
     */
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
    
    /**
     * offset size from window size
     * 
     * @param (string (size)) offset size
     * @return (string (size)) offset size
     * @type parameter
     */
    offset (prm) {
        try {
            return super.offset((undefined === prm) ? undefined : '0px', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.Synwhei;
/* end of file */
