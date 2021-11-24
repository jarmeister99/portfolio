import { CloseParagraph } from "../../generic/typography";

const EducationSection: React.FC = () => {
    return (
        <div>
            <CloseParagraph fontSize={1}>California Polytechnic State University, San Luis Obispo</CloseParagraph>
            <CloseParagraph>B.S. Computer Engineering - <b>3.4 GPA</b></CloseParagraph>
            <CloseParagraph><i>September 2017 - June 2021</i></CloseParagraph>
            <CloseParagraph fontSize={-1}>2x President's List, 5x Dean's List</CloseParagraph>
        </div>
    )
}
export default EducationSection;