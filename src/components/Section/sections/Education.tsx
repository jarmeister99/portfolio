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
const EducationSection: React.FC = () => {
    return (
        <div>
            <CloseParagraph fontSize={1}>California Polytechnic State University, San Luis Obispo</CloseParagraph>
            <CloseParagraph>Computer Engineering - 3.4 GPA</CloseParagraph>
            <CloseParagraph><i>September 2017 - June 2021</i></CloseParagraph>
            <CloseParagraph fontSize={-1}>2x President's List, 5x Dean's List</CloseParagraph>
        </div>
    )
}
export default EducationSection;