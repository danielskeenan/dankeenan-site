import './style/App.scss';
import {Button, Container, Nav, Navbar, Ratio} from "react-bootstrap";
import resume_pdf from "./static/Dan Keenan Resume.pdf";
import resume_image from "./static/Dan Keenan Resume.png";

const links = {
    about_me: 'About me',
    resume: 'Resumé',
    contact: 'Contact',
}

function Header(props) {
    const nav_links = Object.entries(links).map(([anchor, text]) =>
        <Nav.Link key={anchor} href={`#${anchor}`}>{text}</Nav.Link>);

    return (
        <Navbar variant="dark" bg="dark" expand="md" fixed="top">
            <Container>
                <Navbar.Brand href="#top">Dan Keenan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {nav_links}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function App() {
    return (
        <div>
            <Header/>
            <Container>
                <main>
                    <article id="about_me">
                        <header><h2>{links.about_me}</h2></header>
                        <p>
                            Hi! I'm Dan Keenan, a stage electrician and occasional <a
                            href="https://github.com/danielskeenan">software developer</a> based in New York City.
                        </p>

                        <p>
                            I enjoy exploring the intersection between entertainment and emerging technologies.
                        </p>

                        <p>
                            If this sounds interesting, <a href="#contact">get in touch!</a>
                        </p>
                    </article>

                    <article id="resume">
                        <h2>{links.resume}</h2>
                        <p>
                            <Button variant="secondary" href={resume_pdf}>
                                <i className="bi bi-download"/>&nbsp;Download
                            </Button>
                        </p>
                        <Ratio className="pdf d-none d-lg-block">
                            <iframe src={resume_pdf} title={links.resume}>
                                <a href={resume_pdf}><img src={resume_image} className="w-100" alt=""/></a>
                            </iframe>
                        </Ratio>
                        <a href={resume_pdf}><img src={resume_image} className="d-block d-lg-none w-100" alt=""/></a>
                    </article>

                    <article id="contact">
                        <h2>Contact</h2>
                        <p>
                            I'm trying to avoid bad robots scraping the internet for email addresses, so find my email
                            here:&nbsp;
                            <Button variant="secondary" href="https://mailhide.io/e/Iflybwh4" target="_blank"
                                    rel="noreferrer" role="link">
                                <i className="bi bi-envelope"/>&nbsp;E-Mail
                            </Button>
                        </p>
                    </article>
                </main>
            </Container>
        </div>
    );
}

export default App;
