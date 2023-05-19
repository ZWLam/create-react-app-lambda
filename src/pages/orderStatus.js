import { Container, Row, Col, Card, Table, Button} from "react-bootstrap";
import SideNav from "../components/sideNav";

function orderStatus(){
    return(
        <Container className='px-0'>
             <Row className='flex-fill'>
                {/* side nav */}
                <Col className='col-3'>
                    <SideNav />
                </Col>
                <Col>
                    <Card  className="mt-5">
                        <Card.Body>
                            <Row>
                                <Col className="col-1 pe-0">
                                    <p className="my-0">Search</p>
                                </Col>
                                <Col className="ps-0">
                                    <input className="mb-3 rounded"></input>
                                </Col>
                            </Row> 
                            
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Order ID</th>
                                        <th>Date Created</th>
                                        <th>Last Updated</th>
                                        <th>Item Description</th>
                                        <th>Quantity</th>
                                        <th>Supplier</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox"></input></td>
                                        <td>0259</td>
                                        <td>2/5/2023</td>
                                        <td>2/5/2023</td>
                                        <td>Apple Bulk</td>
                                        <td>25</td>
                                        <td>Everyday Fresh</td>
                                        <td>In Progress</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></input></td>
                                        <td>0359</td>
                                        <td>1/5/2023</td>
                                        <td>1/5/2023</td>
                                        <td>Grape Bulk</td>
                                        <td>25</td>
                                        <td>Everyday Fresh</td>
                                        <td>In Progress</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></input></td>
                                        <td>0209</td>
                                        <td>1/5/2023</td>
                                        <td>1/5/2023</td>
                                        <td>Black Forest</td>
                                        <td>150</td>
                                        <td>Sweet Bakes</td>
                                        <td>In Progress</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></input></td>
                                        <td>0109</td>
                                        <td>1/5/2023</td>
                                        <td>1/5/2023</td>
                                        <td>Cheese Cake</td>
                                        <td>150</td>
                                        <td>Sweet Bakes</td>
                                        <td>In Progress</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></input></td>
                                        <td>0150</td>
                                        <td>1/5/2023</td>
                                        <td>1/5/2023</td>
                                        <td>Brownies</td>
                                        <td>150</td>
                                        <td>Sweet Bakes</td>
                                        <td>In Progress</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></input></td>
                                        <td>0130</td>
                                        <td>1/5/2023</td>
                                        <td>3/5/2023</td>
                                        <td>Tomatoes Bulk</td>
                                        <td>25</td>
                                        <td>Power Farmer</td>
                                        <td>Completed</td>
                                    </tr>
                                    <tr>
                                        <td><div className="pt-3"></div></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><div className="pt-3"></div></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><div className="pt-3"></div></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><div className="pt-3"></div></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><div className="pt-3"></div></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Row>
                                <Col>
                                    <Button variant="primary" className="me-3">Export</Button>
                                    <Button variant="primary">Import</Button>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <Button variant="primary" className="me-3">Save</Button>
                                </Col>
                            </Row>
                            
                        </Card.Body>
                    </Card>
                </Col>
             </Row>
            
        </Container>
    )
}

export default orderStatus;