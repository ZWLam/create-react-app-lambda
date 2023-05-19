import {Container, Card, Row, Col, Button, Toast} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import SideNav from '../components/sideNav';

function Home(props){
    const [showA, setShowA] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);

    return(
        <Container className='px-0'>
            <Row className='flex-fill'>
                {/* side nav */}
                <Col className='col-3'>
                    <SideNav />
                </Col>

                {/* main content */}
                <Col className='mt-5'>
                    <Row>
                        <Col className='col-6 pb-3'>
                            <Card>
                                <Card.Body>
                                    <p>INVENTORY STATUS</p>
                                    <hr></hr>
                                    <Row>
                                        <Col>
                                            <p className='text-danger'>Low in stock</p>
                                        </Col>
                                        <Col className='text-danger'>
                                            <p style={{textAlign: "right"}}>3</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>Total Inventory group</p>
                                        </Col>
                                        <Col>
                                            <p style={{textAlign: "right"}}>10</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>Total Inventory </p>
                                        </Col>
                                        <Col>
                                        <p style={{textAlign: "right"}}>600</p>
                                        </Col>
                                    </Row>                       
                                    <Row>
                                        <Col style={{textAlign: "right"}}>
                                            <Button variant="secondary">View Inventory</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='col-6'>
                            <Card>
                                <Card.Body>
                                    <p>ORDER STATUS</p>
                                    <hr></hr>
                                    <Row>
                                        <Col>
                                            <p>Completed</p>
                                        </Col>
                                        <Col style={{textAlign: "right"}}>
                                            <p>0</p>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <p>Orders in progress</p>
                                        </Col>
                                        <Col style={{textAlign: "right"}}>
                                            <p>0</p>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <p>Total orders</p>
                                        </Col>
                                        <Col style={{textAlign: "right"}}>
                                            <p>0</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{textAlign: "right"}}>
                                            <Button variant="secondary"><Link style={{textDecoration: "None", color:"white"}} to="/orderStatus">View Orders</Link></Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col className='col-6'>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col className='d-flex align-items-center'>
                                            <p className='m-0'>ORDER PURCHASES</p>
                                        </Col>
                                        <Col>
                                            <p className='m-0' style={{textAlign:"right"}}>This Month {'\u25BC'}</p>
                                        </Col>
                                    </Row>
                                    <hr></hr>
                                    <div className='text-center'>
                                        <p>Total Orders Purchased</p>
                                        <h2>360.0</h2>
                                        <p>Total Cost</p>
                                        <h2>$1170.92</h2>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{float:"right", display: "block"}}>
                        <Toast show={showA} onClose={toggleShowA} className='mt-5'>
                            <Toast.Header>
                                <strong className="me-auto">Order Status</strong>
                            </Toast.Header>
                            <Toast.Body>Order #0130 is Completed.</Toast.Body>
                        </Toast>
                    </Row>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Home;