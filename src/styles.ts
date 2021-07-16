import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #121214;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: #fff;
        margin-bottom: 40px;
    }

    button {
        width: 20%;
        padding: 10px;
        font-size: 25px;
        color: #fff;
        background-color: #8257e6;
        border: none;
        border-radius: 15px;
        box-shadow: 2px 2px 21px -2px rgba(32,32,37,0.85);
        cursor: pointer;
    }
`;