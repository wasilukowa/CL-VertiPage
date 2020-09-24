import React from 'react';
import WhiteContainerFullWidth from '../styles/WhiteContainerFullWidth';
import Wrapper from '../styles/Wrapper';
import Button from '../styles/ButtonStyles';
import FooterSection from '../components/FooterSection';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const links = [
    'Amet turpis, feugiat et sit amet',
    'Ornare in hendrerit in lectus',
    'Semper mod quis eget mi dolore',
    'Quam turpis feugiat sit dolor',
    'Amet ornare in hendrerit in lectus',
    'Semper mod quisturpis nisi'
]

const RightSidebarContainer = styled.div`
    padding: 30px;
    color: ${props => props.theme.black};

    .line {
        border: '1px solid #E6E6E6';
    }

    @media (min-width: 980px) {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        flex-shrink: 0;
        .line{
            border: none;
        }
    }
`;


const Subcontainer = styled.div`
    padding-right: 10px;
    h2 {
        font-family: 'Open Sans Bold';
        font-size: 1.2em;
        margin-bottom: 1em;
    }
    h3 {
        font-family: 'Open Sans Bold';
        font-size: 1.1em;
        margin-top: 1em;
        margin-bottom: 1em;
    }
    p {
        font-family: 'Open Sans Light';
        font-weight: 300;
        font-family: 1em;
        line-height: 2em;
        padding-bottom: 1.4em
    };
    .space {
        height: 40px;
    }
    @media (min-width: 980px){
        width: 100%;
        &:last-child{
            flex-basis: 45%;
            padding-left: 30px;
        }
        h2 {
            font-size: 1.8em;
        }
        
    }
    
`;

const MainContentRightSidebar = () => {
    return (
        <WhiteContainerFullWidth>
            <Wrapper>
                <RightSidebarContainer>
                    <Subcontainer>
                        <h2>Right Sidebar</h2>
                        <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus. Praesent semper mod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat. Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis nisi consequat etiam lorem ipsum dolor sit amet nullam.</p>
                        <h3>More intriguing information</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem. Pellentesque lorem felis, ultricies a bibendum id, bibendum sit amet nisl. Mauris et lorem quam. Maecenas rutrum imperdiet vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor. Etiam a lacus a lacus pharetra porttitor quis accumsan odio. Sed vel euismod nisi. Etiam convallis rhoncus dui quis euismod. Maecenas lorem tellus, congue et condimentum ac, ullamcorper non sapien. Donec sagittis massa et leo semper a scelerisque metus faucibus. Morbi congue mattis mi. Phasellus sed nisl vitae risus tristique volutpat. Cras rutrum commodo luctus.</p>
                        <p> Phasellus odio risus, faucibus et viverra vitae, eleifend ac purus. Praesent mattis, enim quis hendrerit porttitor, sapien tortor viverra magna, sit amet rhoncus nisl lacus nec arcu. Suspendisse laoreet metus ut metus imperdiet interdum aliquam justo tincidunt. Mauris dolor urna, fringilla vel malesuada ac, dignissim eu mi. Praesent mollis massa ac nulla pretium pretium. Maecenas tortor mauris, consectetur pellentesque dapibus eget, tincidunt vitae arcu. Vestibulum purus augue, tincidunt sit amet iaculis id, porta eu purus.</p>
                    </Subcontainer>
                    <div className="line" />
                    <Subcontainer>
                        <h3>Subheading</h3>
                        <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus. Praesent semper mod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat. Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis nisi consequat etiam.</p>
                        <Button blue small>
                            <span>Find out more</span>
                            <i className="fa fa-info-circle"></i>
                        </Button>
                        <div className="space" />
                        <FooterSection title="Subheading" linksArray={links} />
                    </Subcontainer>
                </RightSidebarContainer>
            </Wrapper>
        </WhiteContainerFullWidth>

    )
}

export default MainContentRightSidebar;