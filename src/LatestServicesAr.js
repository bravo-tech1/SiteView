



export default function Latest(){
    return(
    <div class="container pt-5 pb-5" dir="rtl">
      <div class="row">
        <div class="Services text-center d-column align-items-center pb-5">
          <h3 class="fw-bold pt-5">إعلانات مميزة</h3>
          
        </div>
        <div class="box col-lg-4 col-md-6 mb-5" dir="rtl">
          <div class="card">
            <img
              src={require("./assets/images/london.jpg")}
              class="card-img-top img-card"
              alt="image london"
            />
            <div class="card-body">
              <h3 class="card-title" style={{color: 'gray'}}>Koh Samul</h3>
              <p class="location location-color">
                <i class="fa-solid fa-location-dot"></i> اوروبا
              </p>
              <div class="pacis d-flex justify-content-between">
                <p className="money-color" >الاسترخاء الثقافي</p>
                <p class="fw-bold">
                  100 <i class="fa-solid fa-dollar-sign"></i>
                </p>
              </div>
              <p class="card-text pt-3">
                مدينة تعج بالمثقفين الحاضرين على تطوير ثقافتهم
              </p>
              <a href="#" class="btn btn-card">التفاصيل</a>
            </div>
          </div>
        </div>

      </div>
    </div>
    )
}