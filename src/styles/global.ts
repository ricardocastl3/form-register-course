import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 2px ${props => props.theme["green-300"]};
    }

    body{
        background-color: ${(props) => props.theme["gray-800"]};
    }
`;
