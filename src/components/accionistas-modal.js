import { LitElement, html, css } from 'lit';
import styles from './accionistas-modal-styles.js';

class ModalComponent extends LitElement {
    
    static get styles() {
        return [styles];
    }

  static properties = {
    isOpen: { type: Boolean },
  };

  constructor() {
    super();
    this.isOpen = false;
  }

  toggleModal() {
    this.isOpen = !this.isOpen;
  }

  handleClose() {
    this.isOpen = false;
    this.setAttribute('style', 'display:none');
  }

  render() {
    return html`
      <div class="modal" style="${this.isOpen ? 'display: flex;' : 'display: none;'}">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title">Es necesario que vayas a una oficina</div>
          </div>
          <div class="modal-body">
            <p>Acércate a una ofician para validar tu información y continuar con la solicitud.</p>
          </div>
          <div class="modal-footer">
            <button @click=${this.handleClose}>Salir</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('modal-component', ModalComponent);
