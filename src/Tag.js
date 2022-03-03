import { TagStatus } from './TagStatus';
class Tag {
    constructor(tagName = 'div', className = undefined, textContent = TagStatus.pending) {
        const element = document.createElement(tagName);
        this.element = element;
        if (className != null) {
            this.className = className;
        }
        this.textContent = textContent;
    }
    static fromElement(element) {
        const tag = new Tag('div');
        tag.element = element;
        return tag;
    }
    /**
     * Use the below functions to keep displays consistent
     */
    asterisk() { }
    lose() {
        this.textContent = TagStatus.failed;
    }
    win() {
        this.textContent = TagStatus.successful;
    }
    global() {
        this.textContent = TagStatus.global;
    }
    err() {
        this.textContent = TagStatus.caution;
    }
    empty() {
        this.textContent = TagStatus.empty;
    }
    get style() {
        return this.element.style;
    }
    append(child) {
        if (child instanceof Tag) {
            child = child.element;
        }
        return this.element.append(child);
    }
    get classList() {
        return this.element.classList;
    }
    // eslint-disable-next-line accessor-pairs
    set title(newTitle) {
        this.element.title = newTitle;
    }
    // eslint-disable-next-line accessor-pairs
    set className(className) {
        this.element.className = className;
    }
    // eslint-disable-next-line accessor-pairs
    set textContent(content) {
        this.element.textContent = content;
    }
}
export { Tag };
//# sourceMappingURL=Tag.js.map