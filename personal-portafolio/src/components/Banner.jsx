import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from "../assets/img/header-img.svg"
import '../App.css';

export default function Banner () {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState (false);
    const toRotate = ["Web Developer", "Web Designer" ]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);   
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText ) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
 
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='aling-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portafolio</span>
                        <h1>{'Hi! Im Webdecoded'} <span className='wrap'>{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar semper ante, at viverra ante tincidunt a. Praesent vitae massa a leo tristique vehicula tempor non quam. Morbi at condimentum risus. Duis ac tempor felis. Donec vitae malesuada purus. Fusce et hendrerit nunc. Integer ut egestas dui. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris condimentum arcu eu lacus efficitur, at tempus libero imperdiet. Vivamus auctor, turpis iaculis vestibulum semper, velit leo imperdiet orci, at mollis mi velit id orci.</p>
                        <button onClick={() => console.log('connect')}>Lets Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col  xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Header Img'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}