import { css } from 'lit-element';

export default css`
   

    .list p{
        margin: 0;
    }

    .icon-container {
        width: 70px;
        height: 70px;
        background-color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
    
    .initials {
        font-size: 36px;
        color: white;
        text-transform: uppercase;
    }

    .item {
        display: flex;
        cursor: pointer;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        border-radius: 8px;
        padding: 10px;
        gap: 8px;
        box-shadow:  0 2px 4px rgba(0, 0, 0, 0.1);
        width: 300px;
    }

    .item:hover{
        transform: scale(1.1);
    }

    accionista-details{
        position: absolute;
        top: 0;
        background-color: #242424;
        left: 0;
        height: 100vh;
        width: 100vw;
    }


`