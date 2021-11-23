interface ISectionHeading {
    heading: string;
}
const SectionHeading: React.FC<ISectionHeading> = (props: ISectionHeading) => {
    return (
        <div>
            <h3>{props.heading}</h3>
        </div>
    )
}

interface ISection {
    heading: string;
    content: React.FC<any>;
}
const Section: React.FC<ISection> = (props: ISection) => {
    const Content = props.content;
    return (
        <div style={{fontFamily: "RobotoMono"}}>
            <SectionHeading heading={props.heading}/>
            <Content />
        </div>
    )
}

export default Section;