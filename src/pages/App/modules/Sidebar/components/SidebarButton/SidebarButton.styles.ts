import styled from "styled-components";

const ButtonContainer = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover{
        background-color: rgba(1,1,1,0.5);
    }
`;

const ButtonTitle = styled.p`
    color: white;
    font-size: 0.8rem;
    text-align: center;
    margin-top: 0.3px;
`;

export {
    ButtonContainer,
    ButtonTitle
}