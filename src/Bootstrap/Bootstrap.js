import React from "react";

const Bootstrap = () => {
  return (
    <div>
        {/* navbar */}

        <nav class="fixed-top navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>

        {/* Accordian */}
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#heapify"
              aria-expanded="true"
              aria-controls="heapify"
            >
              Quiestion 1
            </button>
          </h2>
          <div
            id="heapify"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">Answer of question 1</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div class="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
      </div>

      <div className="row m-0 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-3 bg-primary text-light">Column 1</div>
        <div className="col-12 col-md-4 bg-danger text-light">Column 2</div>
        <div className="col-6 col-md-2 bg-success text-warning p-2">Column 3</div>
        <div className="col-6 col-md-3 bg-warning text-light p-2">Column 4</div>
        <div className="col-3 bg-info text-light shadow-lg p-5">Lorem exercitation et duis ex ad incididunt. Laboris minim aliquip nisi Lorem enim Lorem veniam veniam. Reprehenderit non ex adipisicing consectetur ad consectetur sit id. Quis Lorem eiusmod est eiusmod proident ad amet fugiat officia mollit labore qui ad. Tempor sunt adipisicing aliquip adipisicing ullamco velit dolor elit sunt elit magna. Do ea ipsum commodo ea pariatur laboris do.Fugiat qui ea ut aute esse. Cillum eiusmod deserunt cupidatat velit irure magna ea duis sint magna exercitation incididunt. Lorem non cupidatat occaecat irure voluptate ullamco nulla aliqua tempor consequat. Pariatur do ullamco ea culpa dolore Lorem ut qui esse quis. Nisi cupidatat pariatur officia excepteur aliqua consectetur mollit.</div>
      </div>

      <div className="shadow-lg">Shadow Div</div>

      <div class="d-grid gap-2 pb-5">
        <button class="btn btn-primary" type="button">
          Button
        </button>
      </div>

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default Bootstrap;
