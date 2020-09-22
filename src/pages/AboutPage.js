import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Pdf from '../assets/documents/KZ_resume.pdf';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
 
            <Content>
            <p>Hi there, my name is Charlotte.</p>

            <p>I recently graduated from University of British Columbia where I studied Mathematical Sciences.</p>

            <p>I am also a software developer who is constantly learning new things. Currently I am learning React</p>

            <p>You can read more about my experience and skills in the PDF: <a href = {Pdf} target = "_blank">Resume</a></p>

            <p>Thanks for visiting! You can find me on : <Button variant="outline-primary" target="_blank" href="https://www.linkedin.com/in/kexin-zhu-910627186">Linkedin  <Badge variant="primary">in</Badge>
                <span className="sr-only">unread messages</span>
            </Button>
            </p>            

            </Content>
        </div>
    );

}

export default AboutPage;