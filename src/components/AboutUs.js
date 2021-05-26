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
  const Faq = () => {
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
              <h1 class="display-4">Our Mission</h1>
              <p class="lead text-muted mb-0">
                To  showcase various arts throughout the city and create a community where others who love art can comment and upload new discoveries.
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
          <div className="data"><h3>Data</h3><p> Contains information licensed under the Open Government Licence – Toronto.</p></div>
          <div className="faq ">
            <h3>FAQ</h3>
            <div className="questions ">
              <div className="question d-flex flex-column align-items-center">
                <h5> Do you plan to add more locations?</h5>
                <p> With the help of community and updates from Toronto Opendata we will update our database with new locations</p>
              </div>
              <div className="question d-flex flex-column align-items-center">
                <h5> How do I submit new locations?</h5>
                <p> Send email to torontopublicart@gmail.com, with the details including location and pictures.Once verfied we will add to our database.</p>
              </div>
              <div className="question d-flex flex-column align-items-center">
                <h5>Do you contain art from neighbouring cities?</h5>
                <p> At this moment no but it is part of our future plans.</p>
              </div>

            </div>

          </div>
          <div className="upcoming">
            <ul class="list-group list-group-flush w-50  ">
              <li class="list-group-item bg-light">Build a mobile friendly app better experience.</li>
              <li class="list-group-item bg-light"> Form for visitors to submit new locations instead of sending it through email.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
