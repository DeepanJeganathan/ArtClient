import { Nav } from "react-bootstrap";

function AboutUs() {
  return (
    <>
      <div class="bg-light">
        <div class="container py-5">
          <div class="row h-100 align-items-center py-5">
            <div class="col-lg-6">
              <h1 class="display-4">About us page</h1>
              <p class="lead text-muted mb-0">
                Create a minimal about us page using Bootstrap 4.
              </p>
              <p class="lead text-muted">
                Snippet by{" "}
                <a href="https://bootstrapious.com/snippets" class="text-muted">
                  <u>Bootstrapious</u>
                </a>
              </p>
            </div>
          </div>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
