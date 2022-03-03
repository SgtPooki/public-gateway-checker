import { URL } from 'url-ponyfill';
import { UiComponent } from './UiComponent';
import { Util } from './Util';
class Status extends UiComponent {
    constructor(parent) {
        super(parent, 'div', 'Status');
        this.parent = parent;
        this.up = false;
    }
    check() {
        // test by loading subresource via img.src (path will work on both old and subdomain gws)
        const gwUrl = new URL(this.parent.gateway);
        const imgPathUrl = new URL(`${gwUrl.protocol}//${gwUrl.hostname}/ipfs/${Util.IMG_HASH}?now=${Date.now()}&filename=1x1.png#x-ipfs-companion-no-redirect`);
        Util.checkViaImgSrc(imgPathUrl).then(() => {
            // this.tag.textContent = '❌'
            this.tag.lose();
            this.parent.checked();
        }).catch(() => {
            // we check this because the gateway could be already checked by CORS before onerror executes
            // and, even though it is failing here, we know it is UP
            if (!this.up) {
                this.up = false;
                // this.tag.textContent = '❌'
                this.tag.lose();
                this.parent.failed();
            }
        });
    }
    checked() {
        this.up = true;
        this.tag.global();
        this.parent.tag.classList.add('online');
    }
    onerror() {
        throw new Error('Not implemented');
    }
}
export { Status };
//# sourceMappingURL=Status.js.map