import {LitElement, html, css} from 'lit';
import Splide from '@splidejs/splide';
import splideProps from './splide-props';

/**
 * A Wrapper custom element for Splide.js.
 */
export class SplideSlider extends LitElement {
    static get styles() {
        return css`
            :host { display: block;}
        `;
    }

    static properties = {
        options: {type: Object},
        splide: {type: Object},
        slides: {type: Array},
        ...splideProps
    }

    constructor() {
        super();
        this.options = {};
        this.slides = [ ...this.children].map(slide => {
            slide.classList.add('splide__slide');
            slide.setAttribute('part', '' );
            return slide;
        });
    }

    updateOptions( options ) {
        [ ...options.keys() ].forEach( option => {
            if ( [ 'options', 'splide', 'slides' ].includes( option ) ) return
            if ( this[option] === undefined ) return

            this.options[option] = this[option];
        });
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
        this.updateOptions(_changedProperties);

        this.splide.options = this.options;
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.updateOptions(_changedProperties);

        const el = this.shadowRoot.querySelector('.splide');
        this.splide = new Splide( el, this.options ).mount();
    }

  render() {
    const cssUrl = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css';
    const css = html`<link rel="stylesheet" href="${cssUrl}" />`;

    return html`
      ${css}
      <div class="splide">
        <div class="splide__track">
          <div class="splide__list">
            ${this.slides}
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('splide-slider', SplideSlider);
