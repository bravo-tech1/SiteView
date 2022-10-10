export default function Footer() {
  return (
    // <!-- Footer -->
    <footer
      className=" text-lg-start bg-light text-muted arabic"
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
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container flex-row-reverse">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span>تواصل معنا عبر الشبكات الاجتماعية</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="https://facebook.com/bravooiq" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="mailto:hello@bravoo.travel" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a
              href="https://instagram.com/bravoo.travel"
              className="me-4 text-reset"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="" dir="rtl">
          <div className="container text-md-end mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>الشركة
                </h6>
                <p style={{ color: "black" }}>
                  أكثر من 100 شركة من عملاء المحفظة. Bravoo متخصص في سفر
                  الشركات. المبيعات للشركات يولد العملاء حوالي 85٪ من الدخل
                  الإجمالي للوكالة
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">الصفحات</h6>
                <p>
                  <a href="/about" className="text-reset">
                    عن الشركة
                  </a>
                </p>
                <p>
                  <a href="/contact" className="text-reset">
                    تواصل معنا
                  </a>
                </p>
                <p>
                  <a href="/career" className="text-reset">
                    التوظيف
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">روابط مفيدة</h6>
                <p>
                  <a href="/login" className="text-reset">
                    تسجيل الدخول
                  </a>
                </p>
                <p>
                  <a href="/register" className="text-reset">
                    تسجيل
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">وسائل التواصل</h6>
                <p className="text-reset-2">
                  <a
                    href="https://facebook.com/bravooiq"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <i className="fab fa-facebook-f me-3"></i>{" "}
                    facebook.com/bravooiq
                  </a>
                </p>
                <p className="text-reset-2">
                  <a
                    href="https://facebook.com/bravooiq"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <i className="fab fa-google me-3"></i> hello@bravoo.travel
                  </a>
                </p>
                <p className="text-reset-2">
                  <a
                    href="https://instagram.com/bravoo.travel"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <i className="fab fa-instagram me-3"></i> bravoo.travel
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
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          BRAVOO © 2022 - All Rights Reserved. BRAVOO is registered trademark of
          Bravoo Holidays (IRAQ) . Powered by
          <a
            className=" fw-bold"
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
