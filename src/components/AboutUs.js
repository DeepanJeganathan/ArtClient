import { data } from "jquery";
import { Nav } from "react-bootstrap";

function AboutUs() {

 

  const Data = () => {
    const data = document.querySelector('.data');
    const faq = document.querySelector('.faq');
    const upcoming = document.querySelector('.upcoming');

    data.style.display = 'block';
    faq.style.display = 'none';
    upcoming.style.display = 'none';
  }
  const Faq= () => {
    const data = document.querySelector('.data');
    const faq = document.querySelector('.faq');
    const upcoming = document.querySelector('.upcoming');
    data.style.display = 'none';
    faq.style.display = 'block';
    upcoming.style.display = 'none';
  }
  const Upcoming = () => {
    const data = document.querySelector('.data');
    const faq = document.querySelector('.faq');
    const upcoming = document.querySelector('.upcoming');
    data.style.display = 'none';
    faq.style.display = 'none';
    upcoming.style.display = 'block';
  }


  return (
    <>
      <div class="bg-light">
        <div class="container py-5">
          <div class="row h-100 align-items-center py-5">
            <div class="col-lg-6">
              <h1 class="display-4">About Us</h1>
              <p class="lead text-muted mb-0">
                We like for torontonians and vistors to discover art scattered across the city.
              </p>

            </div>
          </div>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item onClick={Data}>
              <Nav.Link>Data</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={Faq}>
              <Nav.Link>Faq</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={Upcoming}>
              <Nav.Link>Upcoming plans</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="data"><h3>Data</h3><p> artwork info is gathered from toronto open data.</p></div>
          <div className="faq"><h1>FAQ</h1></div>
          <div className="upcoming"><h1>Upcoming changes</h1></div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
