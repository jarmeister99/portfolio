import styled from "styled-components";

interface ISectionHeading {
    heading: string;
}
const SectionHeading: React.FC<ISectionHeading> = (props: ISectionHeading) => {
    return (
        <div>
            <h2>{props.heading}</h2>
        </div>
    )
}

const SectionContainer = styled.div`
    margin-top: 3em;
    padding-left: 25%;
    padding-right: 25%;
    font-family: RobotoMono;
`;
interface ISection {
    heading: string;
    content: React.FC<any>;
}
const Section: React.FC<ISection> = (props: ISection) => {
    const Content = props.content;
    return (
        <SectionContainer>
            <SectionHeading heading={props.heading}/>
            <Content />
        </SectionContainer>
    )
}

export default Section;