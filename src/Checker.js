import { GatewayNode } from './GatewayNode';
import { Results } from './Results';
import { Stats } from './Stats';
class Checker {
    constructor() {
        this.nodes = [];
        const element = document.getElementById('checker');
        if (element == null) {
            throw new Error('Element with Id "checker" not found.');
        }
        this.element = element;
        this.stats = new Stats(this);
        this.results = new Results(this);
    }
    updateStats() {
        this.stats.update();
    }
    checkGateways(gateways) {
        for (const gateway of gateways) {
            const node = new GatewayNode(this.results, gateway, this.nodes.length);
            this.nodes.push(node);
            this.results.append(node.tag);
            setTimeout(() => node.check(), 100 * this.nodes.length);
        }
    }
}
export { Checker };
//# sourceMappingURL=Checker.js.map