import { CloseParagraph, FancyLink, TagContainer } from "../../generic/typography";

const ProjectSection: React.FC = () => {
    return (
        <div>
            <CloseParagraph fontSize={1}><FancyLink href="#">Portfolio Website</FancyLink></CloseParagraph>
            <TagContainer>
                <span>[React]</span>
                <span>[Redux]</span>
                <span>[TypeScript]</span>
                <span>[Bootstrap]</span>
                <span>[Styled Components]</span>
            </TagContainer>
            <CloseParagraph fontSize={0}>
                You're on this site right now! This is a static web application that uses React for layout and Bootstrap and Styled Components for design.
                I host it on a DigitalOcean droplet running NGINX on Ubuntu as its web proxy.
            </CloseParagraph>
            <br/>
            <CloseParagraph fontSize={1}><FancyLink href="https://blog.jaredfoster.dev">Full-stack Blog App</FancyLink></CloseParagraph>
            <TagContainer>
                <span>[React]</span>
                <span>[Bootstrap]</span>
                <span>[MongoDB]</span>
                <span>[NodeJS]</span>
                <span>[ExpressJS]</span>
            </TagContainer>
            <CloseParagraph fontSize={0}>
                This is a simple blog I built while learning the MERN stack. Users may create and log into their accounts, create, modify, and delete posts, and create, modify, and delete comments
                on their posts or others'. 
            </CloseParagraph>
            <CloseParagraph fontSize={0} spacing={1}>
                The frontend uses React and Bootstrap. The backend consists of an ExpressJS server with a connection to a MongoDB database using MongooseJS. I use PassportJS for my authentication.
                All user registration/login is secure, using bcrypt hashes and salting. This site is hosted on a DigitalOcean droplet running NGINX on Ubuntu as its web proxy.
            </CloseParagraph>
            <br/>
            <CloseParagraph fontSize={1}><FancyLink href="https://share.jaredfoster.dev">Link Sharing App</FancyLink></CloseParagraph>
            <TagContainer>
                <span>[React]</span>
                <span>[TypeScript]</span>
                <span>[MongoDB]</span>
                <span>[Flask]</span>
            </TagContainer>
            <CloseParagraph fontSize={0}>
                This web application allows any user to share a link and information about the link. When shared, a card is created and displayed for all users to see.
            </CloseParagraph>
            <CloseParagraph fontSize={0} spacing={1}>
                Much of my effort on this project went into the style and design. When viewed from a PC, cards have a neat rotation effect. For mobile users, I have implemented swiping
                to replace 'hovering' in a couple key areas. I also used this project as an opportunity to learn the basics of TypeScript.
            </CloseParagraph>
            <CloseParagraph fontSize={0} spacing={1}>
                The frontend of this project uses TypeScript, React and Styled Components. The backend consists of a Flask server with a connection to a MongoDB database using PyMongo. 
                The site is hosted on AWS LightSail running NGINX on Ubuntu as its web proxy.
            </CloseParagraph>
            <CloseParagraph fontSize={1}><FancyLink href="https://cloud.jaredfoster.dev">Word Cloud Generator</FancyLink></CloseParagraph>
            <TagContainer>
                <span>[React]</span>
                <span>[D3JS]</span>
                <span>[SVG]</span>
            </TagContainer>
            <CloseParagraph fontSize={0}>
                This project is a word cloud generator created using D3.js. It also uses React, though that is definitely overkill. The features are currently bare, but it allows a user
                to select several colors and provide input text and generate a word cloud based off that. This project does not require a backend and is hosted on my DigitalOcean droplet and 
                served via NGINX.
            </CloseParagraph>
            <CloseParagraph fontSize={0} spacing={1}>
                The next steps for this project are to improve customization options and to improve input parsing. Also, this app desperately needs to be made mobile friendly. 
            </CloseParagraph>
        </div>
    )
}
export default ProjectSection;