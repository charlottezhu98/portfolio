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

            <p>I have been </p>
            
            <p>I'm constantly learning new things. Currently I am learning React</p>

            <p>You can read more about my experience and skills in the PDF: <a href = {Pdf} target = "_blank">Resume</a></p>

            <p>Also, you can find me on linkedin: <Button variant="outline-primary">Linkedin  <Badge variant="primary">in</Badge>
                <span className="sr-only">unread messages</span>
            </Button>
            </p>
            

            </Content>
        </div>
    );

}

export default AboutPage;