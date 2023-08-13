import { styled } from "styled-components";

export const AlertContainer = styled.span`
  color: ${(props) => props.theme["red-300"]};
  padding: 0.4rem 0.5rem;
  font-size: 0.7rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${props => props.theme["red-300"]};
  border-radius: 6px;

  animation: enterAlert 300ms ease-in-out;

  @keyframes enterAlert {
    from{
      opacity: 0;
      transition: 0.2s;
    }

    to{
      opacity: 1;
      transition: 0.2s;
    }
  }
`;
