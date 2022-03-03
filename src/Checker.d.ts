import { GatewayNode } from './GatewayNode';
declare class Checker {
    readonly element: HTMLElement;
    readonly nodes: GatewayNode[];
    private readonly stats;
    private readonly results;
    constructor();
    updateStats(): void;
    checkGateways(gateways: string[]): void;
}
export { Checker };
//# sourceMappingURL=Checker.d.ts.map