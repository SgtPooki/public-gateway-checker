import type { Checker } from './Checker';
import type { Tag } from './Tag';
declare class Results {
    readonly parent: Checker;
    append(tag: Tag): void;
    readonly element: HTMLElement;
    constructor(parent: Checker);
    checked(): void;
    failed(): void;
}
export { Results };
//# sourceMappingURL=Results.d.ts.map