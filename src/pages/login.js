import {Container, Card, Form, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';

function Login(props){
    const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();
        props.setLoggedInUser(true);

        navigate("/");
    };

    return(
        <Container className='mt-5 d-flex align-items-center justify-content-center'>
                <Card style={{top: "100px"}}>
                    <Card.Body className='p-5'>
                        <h2>Admin Login</h2>
                        <Form noValidate onSubmit={handleLogin} className="d-flex flex-column">
                            <Form.Group className="mb-2 mt-3">
                                <Form.Label htmlFor="email">Admin ID</Form.Label>
                                <Form.Control 
                                    name="email"
                                    id="email"
                                    type="email" 
                                    placeholder="Enter email" 
                                />
                            </Form.Group>

                            <Form.Group className="mb-5">
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control 
                                    name="password"
                                    id="password"
                                    type="password" 
                                    placeholder="Password"
                                />
                            </Form.Group>

                            <Button variant="primary" type='submit'>Login</Button>
                    
                        </Form>
                    </Card.Body>
                </Card>
                

                {/* Make another card for Login that switches if it is toggled true? */}
        </Container>
    )
}

export default Login;