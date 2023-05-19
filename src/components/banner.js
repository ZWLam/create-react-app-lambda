import {Container, Navbar, Nav} from "react-bootstrap";

function banner(){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="ms-2">
                        Veganex OMS
                    </Navbar.Brand>
                    <Nav >
                        <Nav.Link style={{color: "white"}} href="/">Admin</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default banner;