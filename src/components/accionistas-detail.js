import { LitElement, html, css } from 'lit-element';
import { nothing } from 'lit-html';
import styles from './accionistas-detail-styles.js';
import './accionistas-modal.js'

class AccionistaDetails extends LitElement {
  static get properties() {
    return {
      accionista: { type: Object }
    };
  }

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.accionista = {};
  }

  render() {
    return Object.entries(this.accionista).length > 0 ? html`
      <div class="card">
        <span @click=${()=>{this._hideDetail()}} class="close-btn">X</span>
        <h2>Composición del accionista</h2>
        <p><strong>${this.accionista.Nombre}</strong></p>

        <h3>Información sobre el accionista</h3>
        <label for="tipo-doc">Tipo de documento:</label>
        <input type="text" id="tipo-doc" value="${this.accionista.TipoDocumento}" disabled>
        <label for="num-doc">Numero de documento:</label>
        <input type="text" id="num-doc" value="${this.accionista.Documento}" disabled>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" value="${this.accionista.Nombre}" disabled>
        <label for="porcentaje">Porcentaje de participación:</label>
        <input type="text" id="porcentaje" value="${this.accionista.Porcentaje}" disabled>
        <div>${this.accionista.TipoDocumento !='NIT' ? html`
          <h3>Persona expuesta políticamente</h3>
          <p>¿Es una persona expuesta políticamente, está relacionada, asociada o es familiar de una?</p>
          <select @change=${this.marcarPEP} id="pep">
            <option value="no" selected>No</option>
            <option value="si">Sí</option>
          </select>` : nothing }
          
        </div>
      </div>

      <modal-component style="display:none;"></modal-component>
      
    `: nothing;
  }


  _hideDetail(){
    this.setAttribute('hidden', true);
  }

  marcarPEP(e) {
    if(e.target.value == 'si'){
      const modal = this.shadowRoot.querySelector('modal-component');
      modal.removeAttribute('style');
      modal.toggleModal();
      console.log('abierto');
      e.target.value = "no";
      return;
    }
    console.log('e',e.target.value);
  }

}

customElements.define('accionista-details', AccionistaDetails);
