// =====================================================
// Bootstrap Dependencies (Core CSS)
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Dependencies (React Components)
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
// =====================================================
import categories from "./menu.jsx";
import "./App.css";
// =====================================================
import logo from "./assets/logo.png";
// =====================================================
function renderCategories() {
  let result = [];
  for (let i = 0; i < categories.length; ++i) {
    const category = categories[i];

    result.push(
      <Row key={`category-side-${i}`} className={`justify-content-center ${i === 0 ? "mt-5" : ""} ms-2`}>
        <Button variant="link" className="text-light fs-5 text-decoration-none mb-3 text-start">{category.categoryName}</Button>
      </Row>
    );
  }

  return result;
}
// =====================================================
function renderMenu() {
  let result = [];

  for (let i = 0; i < categories.length; ++i) {
    const category = categories[i];
    // Temporary Fill (Debug)
    //let copyArray = Array(25).fill(null).map((value, iter) => category.catalogues[iter % category.catalogues.length]);

    result.push(
      <Container fluid key={`category-main-${i}`}>
        {/* Category Header */}
        <Row key={`category-main-header-${i}`}>
          <Col className={`col-12 ${i === 0 ? "mt-3" : ""}`}>
            <p className="fs-1 fw-bold text-light">{category.categoryName}</p>
          </Col>
        </Row>
        { /* Category Body - Item List */}
        <Row key={`category-main-body-${i}`} className="mb-5">
          {renderCategoryCatalogueList(category.catalogues)}
        </Row>

        {/* Horizontal Line dividing between each Category */}
        {
          (i === categories.length - 1) ? `` :
            (<>
              <hr className="me-2 border-5 text-light" />
            </>)
        }
      </Container>
    );
  }

  return result;
}

function renderCategoryCatalogueList(catalogues) {
  let result = [];

  for (let i = 0; i < catalogues.length; ++i) {
    result.push(
      <Col key={`catalogue-list-${i}`} className="col-12 col-sm-6 col-lg-4 col-xxl-3 mt-5">
        {renderCatalogue(catalogues[i], i)}
      </Col>
    );
  }
  return result;
}

function renderCatalogue(catalogueItem, index) {
  const itemFullImageSrcPath = "./" + catalogueItem.src;

  // Debug
  //console.log("Image Src: " + itemFullImageSrcPath);

  return (
    <Card className="card-element">
      <Card.Img variant="top" src={new URL(itemFullImageSrcPath, import.meta.url).href} />
      <Card.Body className="card-body">
        <Card.Title className="card-title mb-2">{catalogueItem.name}</Card.Title>

        <Card.Text className="card-description-text">
          {catalogueItem.description}
        </Card.Text>

        <hr className="me-2 border-2 text-dark" />

        <Card.Text className="card-nutritional-text">
          <span className="small m-0">
            Calories:{' '}
            <span className="fw-bold">{catalogueItem.nutritionalInfo.calorie} kcal</span>
          </span>

          <br />

          <span className="small m-0">
            Carbohydrate:{' '}
            <span className="fw-bold">{catalogueItem.nutritionalInfo.carb}g</span>
          </span>

          <br />

          <span className="small m-0">
            Protein:{' '}
            <span className="fw-bold">{catalogueItem.nutritionalInfo.protein}g</span>
          </span>

          <br />

          <span className="small m-0">
            Fat:{' '}
            <span className="fw-bold">{catalogueItem.nutritionalInfo.fat}g</span>
          </span>
        </Card.Text>

        <hr className="me-2 border-2 text-dark" />

        <div className="d-flex flex-column align-items-center card-cart-group">
          <Button variant="primary" className="card-cart-button">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
// =====================================================
function renderTopNavigationPanel() {
  return (
    <>
      <Navbar id="top-nav-panel" expand="sm"
        className="bg-body-tertiary border-bottom border-5 border-secondary w-100 position-fixed"
        data-bs-theme="dark" style={{ zIndex: 2 }}>
        <Container fluid className="justify-content-between">
          <Navbar.Brand href="#">
            <img src={logo} width="150px" height="auto" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end w-100 px-5">
              <Nav.Link href="#cart">View Cart</Nav.Link>
              <Nav.Link href="#checkout">Check Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function renderMainPanel() {
  return (
    <Container fluid>
      { /* Buffer Height for the fixed navigation panel cause margin top does not work*/}
      <Row style={{ height: "75px" }}></Row>
      <Row>
        {/* Left Panel - Category Links */}
        <Col lg={2} className="d-none d-lg-block main-panel-left border-end border-5 border-secondary m-0 p-0">
          <div className="category-panel">
            {renderCategories()}
          </div>
        </Col>
        {/* Right Panel - Menu List */}
        <Col sm={12} md={10} className="main-panel-right m-0 p-0 text-light">
          {renderMenu()}
        </Col>
      </Row>
    </Container>
  )
}
// =====================================================
function App() {
  return (
    <div className="page-overlay">
      {/* Top Panel - Navigation */}
      {renderTopNavigationPanel()}
      { /* Main Content */}
      {renderMainPanel()}
    </div>
  );
}
// =====================================================
export default App;