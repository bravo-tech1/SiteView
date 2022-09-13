



export default function Latest(){
    return(
    <div class="container pt-5 pb-5">
      <div class="row">
        <div class="Services text-center d-column align-items-center pb-5">
          <h3 class="fw-bold pt-5">Featured Listings</h3>
          <p class="pt-3 pb-5 m-auto w-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus
            deserunt neque animi odio doloremque tenetur eius pariatur.
          </p>
        </div>
        <div class="box col-lg-4 col-md-6 mb-5">
          <div class="card">
            <img
              src={require("./assets/images/london.jpg")}
              class="card-img-top img-card"
              alt="image london"
            />
            <div class="card-body">
              <h3 class="card-title">Koh Samul</h3>
              <p class="location location-color">
                <i class="fa-solid fa-location-dot"></i> Europe
              </p>
              <div class="pacis d-flex justify-content-between">
                <p className="money-color">Cultural Relax</p>
                <p class="fw-bold">
                  100 <i class="fa-solid fa-dollar-sign"></i>
                </p>
              </div>
              <p class="card-text pt-3">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-card">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}