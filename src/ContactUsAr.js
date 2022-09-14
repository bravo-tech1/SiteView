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

  console.log(country);

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
        window.location.href = "/home";
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
        <div class="row d-flex justify-content-between" dir="rtl">
          <div
            class="contact-info col-lg-4 mt-sm-5 mt-md-5 mt-lg-0"
            style={{ textAlign: "right" }}
          >
            <h4 class="mb-4">اتصل بنا</h4>
            <p style={{ color: "gray" }}>
              العنوان: Arasaat Alhindia St. beside IDB Bank, Baghdad – Iraq
            </p>
            <p style={{ color: "gray" }}>
              رقم الهاتف: 07704425346, 07704425348
            </p>
            <div class="contact-soc">
              <i class="fa-solid fa-envelope"></i> البريد الالكتروني:
              hello@bravoo.travel
              <br />
              <i class="fa-brands fa-facebook"></i> فيسبوك:
              https://facebook.com/bravooiq
              <br />
              <i class="fa-brands fa-instagram"></i> انستغرام:
              https://instagram.com/bravoo.travel
            </div>
          </div>
          <div class="col-lg-6" style={{ marginBottom: "2rem" }}>
            <form
              action=""
              class="form-contact mt-sm-5 mt-lg-0"
              onSubmit={handleSubmit}
            >
              <div class="col-lg-6 d-column w-100">
                <label for="f-name" class="m-100 mb-1">
                  الاسم الاول :
                </label>
                <input
                  type="text"
                  id="f-name"
                  onChange={(e) => setfirstName(e.target.value)}
                  value={firstName}
                  required
                  class="col-lg-4 w-100 pt-2 pb-2 ps-2"
                  placeholder="ادخل الاسم الاول"
                />
              </div>
              <div class="mt-3">
                <label for="l-name" class="m-100 mb-1">
                  الاسم الاخير :
                </label>
                <input
                  type="text"
                  id="l-name"
                  onChange={(e) => setlastName(e.target.value)}
                  value={lastName}
                  required
                  class="col-lg-4 w-100 pt-2 pb-2 ps-2"
                  placeholder="ادخل الاسم الاخير"
                />
              </div>
              <div class="mt-3">
                <label for="email" class="m-100 mb-1">
                  البردي الالكتروني :
                </label>
                <input
                  placeholder="ادخل بريدك الالكتروني"
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  class="col-lg-4 w-100 pt-2 pb-2 ps-2"
                />
              </div>
              <div class="mt-3 mb-5">
                <label class="m-100 mb-1 " for="number">
                  رقم الهاتف
                </label>
                <input
                  placeholder="رقم الهاتف"
                  type="number"
                  id="number"
                  onChange={(e) => setmobileNumber(e.target.value)}
                  value={mobileNumber}
                  required
                  class="col-lg-4 w-100 pt-2 pb-2 ps-2"
                />
              </div>
              <div class="mt-3">
                <label for="company" class="m-100 mb-1">
                  اسم الشركة
                </label>
                <input
                  placeholder="اسم الشركة "
                  type="text"
                  id="company"
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                  required
                  class="col-lg-4 w-100 pt-2 pb-2 ps-2"
                />
              </div>
              <div class="mt-3">
                <label for="country" class="m-100 mb-1">
                  الدولة
                </label>
                <Countries
                  name="country"
                  empty=" -- Select country --"
                  onChange={(e) => setcountry(e.target.value)}
                  class="col-lg-4 w-100 pt-2 pb-2 ps-2"
                  required
                />
              </div>
              <div class="mt-3">
                <label for="role" class="m-100 mb-1">
                  دورك في الشركة
                </label>
                <select
                  class="col-lg-4 w-100 pt-2 pb-2 ps-2"
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
                  required
                >
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
              <button
                type="submit"
                className="mt-3 btn btn-primary col-lg-4 w-100 pt-2 pb-2 ps-2"
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
