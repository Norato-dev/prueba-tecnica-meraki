import { css } from 'lit-element';

export default css`

    .card {
        width: 300px;
        margin: 0 auto;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 20px;
        box-sizing: border-box;
    }

    .close-btn {
        position: relative;
        top: 5px;
        justify-content: end;
        cursor: pointer;
        font-size: larger;
        display: flex;
        color: #aaa;
      }

    h2 {
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 10px;
    }

    h3 {
        font-size: 16px;
        font-weight: normal;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    label {
        font-weight: bold;
    }

    input[type="text"], select {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
`
   