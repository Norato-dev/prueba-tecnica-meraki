import { LitElement, html, css } from 'lit-element';
import { nothing } from 'lit-html';
import './accionistas-detail.js';
import styles from './accionistas-list-styles.js'

class AccionistasList extends LitElement {

  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      accionistas: { type: Array },
      accionista: {type: Object}
    };
  }

 

  constructor() {
    super();
    this.accionistas = [];
    this.accionista = {};
    this.addEventListener('loaded', this.listData);
  }

  listData(){
    this.accionistas = data;
  }


  _getInitals(nombre){
    return nombre.split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase();
  }

  _getItem(item){

    const initial = this._getInitals(item.Nombre);

    return html`
      <div @click=${()=>{this._showDetail(item)}} class="item">
        <div class="icon-container" id="icon-container">
          ${item.TipoDocumento != 'NIT' 
            ? html`<div class="initials" id="initials" .textContent="${initial}"></div>` 
            : html`<svg xmlns="http://www.w3.org/2000/svg" height="50" width="35" viewBox="0 0 384 512"><path fill="#ffffff" d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/></svg>` }  
        </div>
        <div class="list" >
          <p>${item.Nombre}  </p>
          <p>${item.TipoDocumento}: ${item.Documento} </p>
          <p>${item.TipoDocumento == 'NIT' ? html`${item.CantidadAccionitas} accionistas` : nothing } </p>
          <p>Participación: ${item.Porcentaje} </p>
        </div>
      </div>
    `
  }


  _showDetail(item){
    this.accionista = item;
    this.shadowRoot.querySelector('accionista-details').removeAttribute('hidden');
  }
 

  render() {
    return html`
      <div >
        ${this.accionistas.map(accionista => this._getItem(accionista))}
        <accionista-details hidden .accionista=${this.accionista}></accionista-details>
      </div>
      
    `;
  }
}

customElements.define('accionistas-list', AccionistasList);
