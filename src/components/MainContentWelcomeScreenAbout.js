import React from "react";
import styled from 'styled-components';

import WhiteContainerFullWidth from '../styles/WhiteContainerFullWidth';
import Wrapper from '../styles/Wrapper';
import Button from '../styles/ButtonStyles';

import 'font-awesome/css/font-awesome.min.css';

import hamza from '../static/hamza.jpg';
import quinton from '../static/quinton.jpg';
import priscilla from '../static/priscilla.jpg';
import simon from '../static/simon.jpg';

const WrapperAbout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: ${props => props.theme.grey};
    font-family: 'Open Sans Light';
    font-weight: 300;
    line-height: 2em;
    .about__text{
        padding-bottom: 40px;
        border-bottom: 1px solid ${props => props.theme.lightGrey};
        margin-bottom: 40px;
    }
    h2 {
        font-family: 'Open Sans Bold';
        line-height: 1.6em;
        font-size: 1.2em;
        margin-bottom: 1em;
    }
    h3 {
        font-family: 'Open Sans Bold';
        line-height: 1.4em;
        font-size: 1.2em;
        margin-bottom: 3em;
    }
    p {
        margin-bottom: 1.4em;
    }
`;

const ImageGalery = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 40px;
    .about__image{
        width: 48%;
        border-radius: 6px;
        margin-bottom: 20px;
    }
`;

const MainContentWelcomeScreenAbout = () => {
    return (
        <WhiteContainerFullWidth>
            <Wrapper>
                <WrapperAbout>
                    <div className="about__text">
                        <h2>So what's this all about?</h2>
                        <p>This is <span>Verti</span>, a free and fully responsive <a href="https://html5up.net/">HTML5</a> site template by HTML5 UP. Verti is released under the <a href="https://html5up.net/license">Creative Commons Attribution license</a>, so feel free to use it for any personal or commercial project you might have going on (just don't forget to credit us for the design!)</p>
                        <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus. Praesent semper bibendum ipsum, et tristique augue fringilla eu. Vivamus id risus vel dolor auctor euismod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat. Aliquam luctus mattis lectus sit amet phasellus quam turpis.</p>
                        <Button blue small>
                            <span>Continue reading</span>
                            <i className="fa fa-arrow-circle-right"></i>
                        </Button>
                    </div>
                    <div>
                        <h3>Interesting Stuff</h3>
                        <ImageGalery>
                            <img className="about__image" src={hamza} alt="" />
                            <img className="about__image" src={priscilla} alt="" />
                            <img className="about__image" src={quinton} alt="" />
                            <img className="about__image" src={simon} alt="" />
                        </ImageGalery>
                        <Button blue small>
                            <span>More</span>
                            <i className="fa fa-copy"></i>
                        </Button>
                    </div>
                </WrapperAbout>
            </Wrapper>

        </WhiteContainerFullWidth>
    )
}

export default MainContentWelcomeScreenAbout;