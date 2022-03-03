import type { GatewayNode } from './GatewayNode';
import { UiComponent } from './UiComponent';
declare class Flag extends UiComponent {
    protected parent: GatewayNode;
    private readonly hostname;
    private static requests;
    constructor(parent: GatewayNode, hostname: string);
    setup(): void;
    private dnsRequest;
    handleSuccessfulRequest(request: XMLHttpRequest): Promise<void>;
    private onError;
    onResponse(response: IpfsGeoip.LookupResponse): void;
}
export { Flag };
//# sourceMappingURL=Flag.d.ts.map