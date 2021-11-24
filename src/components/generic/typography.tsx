import styled from "styled-components";

interface ICloseParagraph {
    fontSize?: number;
}
const CloseParagraph = styled.p<ICloseParagraph>`
    margin: 0.15em 0 0.15em 0;
    font-size: ${props => {
        const base = 14;
        if (props.fontSize){
            const calculatedFontSize = base + (props.fontSize * 2)
            return `${calculatedFontSize}px`;
        }
        else{
            return `${base}px`
        }
    }}
`;

export { CloseParagraph };