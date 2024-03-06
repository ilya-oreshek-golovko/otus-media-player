import styled from "styled-components";

const ActiveButton = `
    background-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.05);
`;

const NonActiveButton = `
    background-color: transparent;
`;

const ButtonContainer = styled.div<{isActive : boolean}>`
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    row-gap: .3rem;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 300ms ease-in-out;

    ${props => props.isActive ? ActiveButton : NonActiveButton}

    &:hover{
        background-color: rgba(255, 255, 255, 0.2);
        transform: scale(1.05);
    }
    &>svg{
       color: white; 
       font-size: 30px;
    }
`;

const ButtonTitle = styled.p`
    color: white;
    font-size: 1rem;
    text-align: center;
    margin-top: 0.3px;
`;

export {
    ButtonContainer,
    ButtonTitle
}