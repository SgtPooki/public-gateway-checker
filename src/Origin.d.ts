import type { GatewayNode } from './GatewayNode';
import { Tag } from './Tag';
declare class Origin {
    parent: GatewayNode;
    tag: Tag;
    constructor(parent: GatewayNode);
    check(): void;
    onerror(): void;
}
export { Origin };
//# sourceMappingURL=Origin.d.ts.map