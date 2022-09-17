import { useState } from "react";
import axios from "axios";
import HeaderAr from "./components/HeaderAr";
import FooterAr from "./components/FooterAr";
import Countries from "react-select-country";

export default function About() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setcountry] = useState("");
  const [role, setRole] = useState("");
  const [travel, settravel] = useState("");
  const [tour, settour] = useState("");
  const [online, setonline] = useState("");
  const [b2c, setb2c] = useState("");
  const [corporate, setcorporate] = useState("");
  const [agree_recive, setagree_recive] = useState("");
  const [agree_store, setagree_store] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios(
        "https://test.emkanfinances.net/api/contact/create",
        {
          method: "POST",
          data: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            mobile: mobileNumber,
            company: companyName,
            country: country,
            role: role,
          },
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        window.location.href = "/";
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <div>
      <HeaderAr />
      <div class="Services text-center d-column align-items-center pb-lg-5">
        <h3 class="fw-bold pt-5 mt-lg-5">ارسل استفسارك</h3>
      </div>
      <div class="container">
        <div class="row d-flex flex-row-reverse justify-content-between">
          <div class="contact-info col-lg-4 mt-sm-5 mt-md-5 mt-lg-0">
            <h4 class="mb-4">معلومات الاتصال</h4>

            <div class="contact-soc">
              <i class="fa-solid fa-envelope"></i> E-mail: hello@bravoo.travel
              <br />
              <i class="fa-brands fa-facebook"></i> Facebook:
              https://facebook.com/bravooiq
              <br />
              <i class="fa-brands fa-instagram"></i> Instagram:
              https://instagram.com/bravoo.travel
            </div>
          </div>
          <div class="col-lg-6 " style={{ marginBottom: "2rem" }}>
            <form
              action=""
              class="form-contact mt-sm-5 mt-lg-0 row"
              onSubmit={handleSubmit}
              style={{ color: "var(--yellow-color)" }}
              dir="rtl"
            >
              <div class="mb-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
                <label for="f-name" class="m-100 mb-1">
                  الاسم الاول:
                </label>
                <input
                  type="text"
                  id="f-name"
                  onChange={(e) => setfirstName(e.target.value)}
                  value={firstName}
                  required
                  class=" custom-input col-lg-4 w-100 pt-2 pb-2 ps-2"
                  placeholder="الاسم الاول...."
                />
              </div>
              <div class="mb-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <label for="l-name" class="m-100 mb-1">
                  الاسم الاخير :
                </label>
                <input
                  type="text"
                  id="l-name"
                  onChange={(e) => setlastName(e.target.value)}
                  value={lastName}
                  required
                  class=" custom-input col-lg-4 w-100 pt-2 pb-2 ps-2"
                  placeholder="الاسم الاخير...."
                />
              </div>
              <div class="mb-3 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <label for="email" class="m-100 mb-1">
                  ادخل بريدك الالكتروني :
                </label>
                <input
                  placeholder="البريد...."
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  class=" custom-input col-lg-4 w-100 pt-2 pb-2 ps-2"
                />
              </div>
              <div class="mb-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <label class="m-100 mb-1 " for="number">
                  رقم الهاتف
                </label>
                <input
                  placeholder="رقم الهاتف...."
                  type="number"
                  id="number"
                  onChange={(e) => setmobileNumber(e.target.value)}
                  value={mobileNumber}
                  required
                  class=" custom-input col-lg-4 w-100 pt-2 pb-2 ps-2"
                />
              </div>
              <div class="mb-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <label for="company" class="m-100 mb-1">
                  اسم الشركة
                </label>
                <input
                  placeholder="اسم الشركة.... "
                  type="text"
                  id="company"
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                  required
                  class=" custom-input col-lg-4 w-100 pt-2 pb-2 ps-2"
                />
              </div>
              <div class="mb-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <label for="country" class="m-100 mb-1">
                  الدولة
                </label>
                <Countries
                  name="الدولة"
                  empty=" اختر دولة"
                  onChange={(e) => setcountry(e.target.value)}
                  class=" custom-input col-lg-4 w-100 pt-2 pb-2 ps-2"
                  style={{ color: "gray", fontSize: "13px" }}
                  required
                />
              </div>
              <div class="mb-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <label for="role" class="m-100 mb-1">
                  الدور
                </label>
                <select
                  class=" custom-input col-lg-4 w-100 pt-2 pb-2 ps-2"
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
                  placeholder="Selcet"
                  style={{ color: "gray", fontSize: "13px" }}
                  required
                >
                  <option value="" disabled selected style={{ color: "gray" }}>
                    الدور في الشركة...
                  </option>
                  <option value={"CEO/Owner"}>CEO/Owner</option>
                  <option value={"VP/Director"}>VP/Director</option>
                  <option value={"CTO/IT Manager"}>CTO/IT Manager</option>
                  <option value={"Business Development Manager"}>
                    Business Development Manager
                  </option>
                  <option value={"Sales Manager"}>Sales Manager</option>
                  <option value={"Marketing Manager"}>Marketing Manager</option>
                  <option value={"Assistant Manager"}>Assistant Manager</option>
                  <option value={"Travel Agent"}>Travel Agent</option>
                  <option value={"External Advisor"}>External Advisor</option>
                </select>
              </div>
              <div
                class="col-12"
                style={{ color: "#2c2c2c", fontSize: "13px" }}
              >
                <span class="form-title">Software Type</span>
                <br />

                <input
                  class="checkBox"
                  type="checkbox"
                  id="software1"
                  name="software1"
                  value="Travel ERP software"
                  style={{ marginTop: "15px" }}
                />
                <label class=" checkAr" for="software1">
                  برنامج تخطيط موارد المؤسسات للسفر
                </label>
                <br />

                <input
                  class="checkBox"
                  type="checkbox"
                  id="software2"
                  name="software2"
                  value="Tour operator solution"
                />
                <label class=" checkAr" for="software2">
                  حل منظم الرحلات
                </label>
                <br />

                <input
                  class="checkBox"
                  type="checkbox"
                  id="software3"
                  name="software3"
                  value="Online booking system"
                />
                <label class=" checkAr" for="software3">
                  حل منظم الرحلات
                </label>
                <br />

                <input
                  class="checkBox"
                  type="checkbox"
                  id="software4"
                  name="software4"
                  value="B2C online selling platform"
                />
                <label class=" checkAr" for="software4">
                  منصة البيع عبر الإنترنت B2C
                </label>
                <br />

                <input
                  class="checkBox"
                  type="checkbox"
                  id="software5"
                  name="software5"
                  value="Corporate Self Booking Tool"
                />
                <label class=" checkAr" for="software5">
                  أداة الحجز الذاتي للشركات
                </label>
                <br />

                <p class="parag">
                  من وقت لآخر ، نود الاتصال بك بشأن منتجاتنا وخدماتنا ، بالإضافة
                  إلى المحتويات الأخرى التي قد تهمك. إذا كنت توافق على الاتصال
                  بك لهذا الغرض ، فيرجى وضع علامة أدناه لتوضيح كيف تريد منا
                  الاتصال بك:
                </p>

                <input
                  class="checkBox"
                  type="checkbox"
                  id="agreerecieve"
                  name="agreerecieve"
                  value="I agree to receive other communications from Bravoo"
                />
                <label class=" checkAr" for="agreerecieve">
                  أوافق على تلقي اتصالات أخرى من Bravoo.
                </label>
                <br />

                <p class="parag">
                  بالنقر فوق إرسال أدناه ، فإنك توافق على السماح لـ Bravoo
                  بالتخزين ومعالجة المعلومات الشخصية المقدمة أعلاه إلى تزويدك
                  بالمحتوى المطلوب.
                </p>

                <input
                  class="checkBox"
                  type="checkbox"
                  id="agreeallow"
                  name="agreeallow"
                  value="I agree to allow Bravoo to store and process my personal data"
                />
                <label class=" checkAr" for="agreeallow">
                  أوافق على السماح لـ Bravoo بتخزين بياناتي الشخصية ومعالجتها.
                </label>
                <br />

                <p class="parag">
                  يمكنك إلغاء الاشتراك من هذه الاتصالات في أي وقت. إلى عن على
                  مزيد من المعلومات حول كيفية إلغاء الاشتراك ، وممارسات الخصوصية
                  لدينا ، وكيف نلتزم بحمايتك واحترامك الخصوصية ، يرجى مراجعة{" "}
                  <a
                    href="https://bravoo.travel/content/46660411/Bravoo/Privacy-Policy"
                    style={{
                      color: "var(--yellow-color)",
                      textDecoration: "none",
                    }}
                  >
                    سياسة الخصوصية
                  </a>
                  .
                </p>
              </div>
              <button
                type="submit"
                className="mt-3 btn btn-primary col-lg-4 w-50 pt-2 pb-2 ps-2"
                style={{ backgroundColor: "#f0ad00", border: "none" }}
              >
                ارسال
              </button>
            </form>
          </div>
        </div>
      </div>
      <FooterAr />
    </div>
  );
}
