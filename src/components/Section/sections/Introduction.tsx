import { CloseParagraph } from "../../generic/typography";

const IntroductionSection: React.FC = () => {
    return (
        <div>
            <CloseParagraph fontSize={0} spacing={3}>
                My name is Jared Foster, and I currently work as an Embedded Software Engineer in Morro Bay, California. I graduated California Polytechnic State
                University, San Luis Obispo in June of 2017.
            </CloseParagraph>
            <CloseParagraph fontSize={0} spacing={3}>
                I greatly enjoy learning new languages. Professionally, I use C, Python, and AVR Assembly. Outside of work, I build projects with Python and JavaScript (and recently TypeScript).
            </CloseParagraph>
            <CloseParagraph fontSize={0} spacing={3}>
                I have experience in low-level firmware development, test/task automation, and full-stack web development.
            </CloseParagraph>
            <CloseParagraph fontSize={0} spacing={3}>
                I have built several web applications using the MERN stack. All of my projects are hosted using a VPS (either AWS LightSail or DigitalOcean). I have also built a couple
                web applications using Flask.
            </CloseParagraph>
            <CloseParagraph fontSize={0} spacing={3}>
                I have built several web applications using the MERN stack. All of my projects are hosted using a VPS (either AWS LightSail or DigitalOcean). I have also built a couple
                web applications using Flask.
            </CloseParagraph>
            <CloseParagraph fontSize={0} spacing={3}>
                This portfolio site is built using React/TypeScript/Redux/BootStrap. No backend is necessary to support this website. My VPS at DigitalOcean serves this site using NGINX as its
                reverse proxy.
            </CloseParagraph>
        </div>
    )
}
export default IntroductionSection;