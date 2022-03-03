import fetchPonyfill from 'fetch-ponyfill';
import { CheckBase } from './CheckBase';
import { Util } from './Util';
import { Log } from './Log';
const { fetch } = fetchPonyfill();
const log = new Log('Cors');
class Cors extends CheckBase {
    constructor(parent) {
        super(parent, 'div', 'Cors');
        this.parent = parent;
        this._className = 'Cors';
        this._tagName = 'div';
    }
    check() {
        const now = Date.now();
        const gatewayAndHash = this.parent.gateway.replace(':hash', Util.HASH_TO_TEST);
        const testUrl = `${gatewayAndHash}?now=${now}#x-ipfs-companion-no-redirect`;
        // response body can be accessed only if fetch was executed when
        // liberal CORS is present (eg. '*')
        fetch(testUrl).then(async (res) => await res.text()).then((text) => {
            const matched = (Util.HASH_STRING === text.trim());
            if (matched) {
                this.parent.checked();
                // this.tag.textContent = '*'
                this.tag.asterisk();
                this.parent.tag.classList.add('cors');
            }
            else {
                this.onerror();
            }
        }).catch((err) => {
            log.error(err);
            this.onerror();
        });
    }
    checked() {
        log.warn('Not implemented yet');
    }
    onerror() {
        this.tag.err();
    }
}
export { Cors };
//# sourceMappingURL=Cors.js.map