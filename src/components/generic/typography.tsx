import styled from "styled-components";

interface IFancyLink {
};
const FancyLink = styled.a<IFancyLink>`
    color: black;
    &:hover {
        color: black;
        font-weight: bold;
    }
`;

interface ITagContainer {
}
const TagContainer = styled.p<ITagContainer>`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 14px;
    span {
        margin-right: 1em;
    }
`;

interface ICloseParagraph {
    fontSize?: number;
    spacing?: number;
}
const CloseParagraph = styled.p<ICloseParagraph>`
    margin: ${props => {
        const base = 0.15;
        const increase = 0.30;
        if (props.spacing){
            const calculatedSpacing = base + (props.spacing * increase)
            return `${calculatedSpacing}em 0 ${calculatedSpacing}em 0;`;
        }
        else{
            return `${base}em 0 ${base}em 0;`
        }
    }}
    font-size: ${props => {
        const base = 16;
        if (props.fontSize){
            const calculatedFontSize = base + (props.fontSize * 2)
            return `${calculatedFontSize}px;`;
        }
        else{
            return `${base}px;`
        }
    }}
`;

export { CloseParagraph, TagContainer, FancyLink };