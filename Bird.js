var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, } from 'lit';
import { customElement } from 'lit/decorators.js';
let Bird = class Bird extends LitElement {
    render() {
        return html `<div class="bird"></div>`;
    }
};
Bird.styles = css `
    .bird {
      width: 40px;
      height: 40px;
      background-color: yellow;
      position: absolute;
      top: var(--bird-top, 50%);
      left: 20px;
    }
  `;
Bird = __decorate([
    customElement('flappy-bird')
], Bird);
export { Bird };
//# sourceMappingURL=Bird.js.map