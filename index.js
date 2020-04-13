/**
 * @file mofron-effect-synwhei/index.js
 * @brief syncronize component height to window height
 * @license MIT
 */
const Syncwin = require('mofron-effect-syncwin');

module.exports = class extends Syncwin {
    /**
     * initialize effect
     * 
     * @param (mixed) y_offset parameter
     *                dict: effect config
     * @param (prm) offset parameter
     * @short y_offset
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name('Synwhei');
            this.shortForm('y_offset');
            this.valid(false, true);
	    /* set config */
	    if (undefined === prm)
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
