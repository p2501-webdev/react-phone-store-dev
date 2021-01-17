import styled from 'styled-components';


export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.15rem solid var(--lightBlue);
    border-color: ${props => (props.cart? "var(--mainYellow)":"var(--lightBlue)")};
    border-radius: 0.5rem;
    color:${prop => (prop.cart? "var(--mainYellow)":"var(--lightBlue)")};
    padding: 0.5rem;
    padding-right: 0.5rem;
    cursor: pointer;
    margin: 0.2rem;
    transition: all 0.3s ease-in-out;
  &:hover{
    background: ${prop => prop.cart ? "var(--mainYellow)":"var(--lightBlue)"};
    color: var(--mainWhite);
  }
  &:focus{
    outline: none;
  }

`;