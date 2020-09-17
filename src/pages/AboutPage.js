import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hi there, my name is Charlotte.</p>

            <p>I'm constantly learning new things. Currently I am learning React</p>

            <p>When I'm not learning something </p>
            </Content>
        </div>
    );

}

export default AboutPage;