import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function sideNav(prop){
    return(
        <>
           <Container style={{height:"55em"}} className="pt-5 bg-dark text-light text-center py-3">
                <Row>
                    <Col className="col-12 py-3 bg-secondary">
                        <Link style={{textDecoration: "none", color: "white"}} to="/">Dashboard</Link>
                    </Col>
                    <Col className="col-12 py-3">
                        <Link style={{textDecoration: "none", color: "white"}} to="/">Order</Link>
                    </Col>
                    <Col className="col-12 py-3">
                        <Link style={{textDecoration: "none", color: "white"}} to="/orderStatus">Order Status</Link>
                    </Col>
                    <Col className="col-12 py-3">
                        <Link style={{textDecoration: "none", color: "white"}} to="/">Inventory</Link>
                    </Col>
                    <Col className="col-12 py-3">
                        <Link style={{textDecoration: "none", color: "white"}} to="/">Setting</Link>
                    </Col>
                    <Col className="col-12 py-3">
                        <Link style={{textDecoration: "none", color: "white"}} to="/login">Logout</Link>
                    </Col>
                </Row>
           </Container>
        </>
    )
}

export default sideNav;