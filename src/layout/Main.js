import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            {/* <Container>
                <Row>
                    <Col lg='3'><Course></Course></Col>
                    <Col lg='9'>
                       
                    </Col>
                </Row>
            </Container> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;