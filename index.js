import { LitElement, css, html } from 'lit-element';
import './src/components/accionistas-list.js';
import 'carbon-web-components/es/components/input/input.js';

export class MyApp extends LitElement {

  static get properties() {
    return {
      accionistas: { type: Array },
      input : { type: String}
    };
  }

  constructor() {
    super();
    this.accionistas = [];
    this.input = '';
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
    
    `
  }

  render() {
    return html`
      <h1>Ingrese el NIT</h1>
      <bx-input @input=${this._setInput} id="nit-query"></bx-input>
      <accionistas-list .accionistas=${this.accionistas}></accionistas-list>
    `;
  }


  _setInput(e){
    this.input = e.target.value;
  }

  update(properties){
    super.update();
    if(properties.has('input') && this.input.length > 0){
      this.fetchAccionistas();
    }
    console.log(properties);
  }

  async fetchAccionistas() {
    try {
      const response = await fetch('http://localhost:3000/accionistas?NIT='+this.input);
      const data = await response.json();
      console.log('data',data)
      this.accionistas = data;
      
    } catch (error) {
      console.error('Error fetching accionistas:', error);
    }
  }

  

}

customElements.define('my-app', MyApp);
