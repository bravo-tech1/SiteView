export default function Footer() {
  return (
    // <!-- Footer -->
    <footer
      class=" text-lg-start bg-light text-muted"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: "white",
          boxShadow: " 2px 6px 8px 0 rgb(22 22 26 / 18%)",
          border: "none",
        }}
      >
        {/* <!-- Section: Social media --> */}
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
          {/* <!-- Left --> */}
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="https://facebook.com/bravooiq" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="mailto:hello@bravoo.travel" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a
              href="https://instagram.com/bravoo.travel"
              class="me-4 text-reset"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div class="row mt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Company name
                </h6>
                <p style={{ color: "black" }}>
                  More than 100 corporate clients in portfolio. Bravoo
                  specializes in corporate travel. Sales to corporate clients
                  generate circa 85% of the agency's overall income
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Pages</h6>
                <p>
                  <a href="/about" class="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="/contact" class="text-reset">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="/career" class="text-reset">
                    Careers
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/login" class="text-reset">
                    Login
                  </a>
                </p>
                <p>
                  <a href="/register" class="text-reset">
                    Register
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p className="text-reset-2">
                  <a
                    href="https://facebook.com/bravooiq"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <i class="fab fa-facebook-f me-3"></i> facebook.com/bravooiq
                  </a>
                </p>
                <p className="text-reset-2">
                  <a
                    href="mailto:hello@bravoo.travel"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <i class="fab fa-google me-3"></i> hello@bravoo.travel
                  </a>
                </p>
                <p className="text-reset-2">
                  <a
                    href="https://instagram.com/bravoo.travel"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <i class="fab fa-instagram me-3"></i> bravoo.travel
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          class="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          BRAVOO © 2022 - All Rights Reserved. BRAVOO is registered trademark of
          Bravoo Holidays (IRAQ) . Powered by
          <a
            class=" fw-bold"
            href="https://icom-digital.com/"
            target="__blank"
            style={{
              color: "#ff5959",
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            icom-digital.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </div>
    </footer>
    // <!-- Footer -->
  );
}
