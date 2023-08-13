import { styled } from "styled-components";

export const FormContainer = styled.div``;

export const FormAndFields = styled.form`
  margin: 5rem auto;
  width: 40%;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 6px;
  padding: 3rem;

  & > h2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    margin-bottom: 2rem;

    color: ${(props) => props.theme["gray-100"]};
  }

  @media (max-width: 720px) {
    width: 90%;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;

  label {
    font-weight: bold;
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-300"]};
    line-height: 1.6;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    padding: 1rem;
    color: ${(props) => props.theme["gray-300"]};
    background-color: ${(props) => props.theme["gray-800"]};
    border: none;
    border-radius: 6px;
  }

  button {
    cursor: pointer;
    background-color: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.white};
    border-radius: 6px;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    padding: 1rem;

    &:hover {
      opacity: 0.7;
      transition: 0.2s;
    }
  }
`;

export const FieldArrayGroup = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  div {
    font-size: 0.875em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1.6;

    label {
      color: ${(props) => props.theme["gray-300"]};
    }
    button {
      cursor: pointer;

      background-color: transparent;
      border: none;
      color: ${(props) => props.theme["green-300"]};
      &:hover {
        opacity: 0.6;
        transition: 0.2s;
      }
    }
  }

  section {
    display: grid;
    grid-template-columns: 1fr 9rem 3rem;
    align-items: center;
    gap: 0.5rem;

    article {
      display: flex;
      flex-direction: column;

      input {
        flex: 1;
        padding: 1rem;
        color: ${(props) => props.theme["gray-300"]};
        background-color: ${(props) => props.theme["gray-800"]};
        border: none;
        border-radius: 6px;
      }

      input[type="text"] {
        flex: 1;
      }

      input[type="number"] {
        width: 9rem;
      }

      button{
        font-size: 0.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 0.5rem;

        cursor: pointer;
        border: none;
        background-color: transparent;
        color: ${props => props.theme["red-300"]};

        &:hover{
          opacity: 0.7;
        }
      }
    }

    @media(max-width: 720px){
      grid-template-columns: 1fr;

      article{
        input[type="number"]{
          width: 100%;
        }
      }
    }
  }
`;
