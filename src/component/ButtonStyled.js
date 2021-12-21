import styled from 'styled-components';

export const BtnDefaultIcons = styled.button `
    display: flex;
    align-items: center;
    margin-top:15px;
    padding: 10px;
    width:100%
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    transition: 0.4s;

    &:hover {
        background-color: #ccc;
    }

    .center {
        text-align: center;
        width: 100%;
    }
`

