interface ISectionHeading {
    heading: string;
}
const SectionHeading: React.FC<ISectionHeading> = (props: ISectionHeading) => {
    return (
        <div>
            <h3 style={{fontFamily: "RobotoMono"}}>{props.heading}</h3>
        </div>
    )
}

interface ISection {
    heading: string;
}
const Section: React.FC<ISection> = (props: ISection) => {
    return (
        <div>
            <SectionHeading heading={props.heading}/>
        </div>
    )
}

export default Section;