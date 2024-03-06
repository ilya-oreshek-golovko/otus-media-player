import styled, { css } from 'styled-components';

const MainSection = styled.section`
    background-color: #c47541;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

// const ZTest = styled(MainSection)`
//     border: 10px solid green;
// `;

// const SubmitBtnTest = styled.button.attrs({
//     type: "submit"
// })`
//     background-color: red;
//     color: white;
//     &:hover{
//         background-color: black;
//     }
// `;

export {
    MainSection
}