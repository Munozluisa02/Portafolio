import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

export default function Banner () {
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='aling-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portafolio</span>
                        <h1>{'Hi! Im Webdecoded'} <span className='wrap'>Web developer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar semper ante, at viverra ante tincidunt a. Praesent vitae massa a leo tristique vehicula tempor non quam. Morbi at condimentum risus. Duis ac tempor felis. Donec vitae malesuada purus. Fusce et hendrerit nunc. Integer ut egestas dui. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris condimentum arcu eu lacus efficitur, at tempus libero imperdiet. Vivamus auctor, turpis iaculis vestibulum semper, velit leo imperdiet orci, at mollis mi velit id orci.</p>
                        <button onClick={() => console.log('connect')}>Lets Connect</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}