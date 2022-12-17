import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React Course</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-center c-nav" >
            <Nav.Link>
              <Link to={'/'} className='mx-lg-4 fs-5 c-nav_link'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/projects'} className='mx-lg-4 fs-5 c-nav_link'>Projects</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/course'} className='mx-lg-4 fs-5 c-nav_link'>course</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;