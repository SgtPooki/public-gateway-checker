import type { GatewayNode } from './GatewayNode';
import { UiComponent } from './UiComponent';
declare class Status extends UiComponent {
    readonly parent: GatewayNode;
    up: boolean;
    constructor(parent: GatewayNode);
    check(): Promise<void>;
    checked(): void;
    onerror(): void;
}
export { Status };
//# sourceMappingURL=Status.d.ts.map