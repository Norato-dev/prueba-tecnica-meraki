import { css } from 'lit-element';

export default css`
    :host {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .modal-content {
        background-color: #242424;
        padding: 20px;
        border: 1px solid #888;
        border-radius: 8px;
        width: 80%;
        max-width: 400px;
        text-align: center;
    }

    .modal-header {
        margin-bottom: 20px;
    }

    .modal-title {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .modal-body {
        margin-bottom: 20px;
    }

    .modal-footer button {
        padding: 10px 20px;
        font-size: 1rem;
        background-color: #3949ab ;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .modal-footer button:hover {
        background-color: #5c6bc0;
    }
`