import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import axios from "axios";

export default function Careers() {
  const [name, setname] = useState("");
  const [academic_qualification, setacademic_qualification] = useState("");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const [birthday, setbirthday] = useState("");
  const [email, setemail] = useState("");
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState("");
  const [q3, setq3] = useState("");
  const [q4, setq4] = useState("");
  const [q5, setq5] = useState("");
  const [q6, setq6] = useState("");
  const [q7, setq7] = useState("");
  const [q8, setq8] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios(
        "https://test.emkanfinances.net/api/career/create",
        {
          method: "POST",
          data: {
            name,
            academic_qualification,
            mobile,
            address,
            birthday,
            email,
            q1,
            q2,
            q3,
            q4,
            q5,
            q6,
            q7,
            q8,
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
    <>
      <Header />
      <div class="container pt-4 mt-5">
        <p class="mb-4">
          We are constantly looking for ambitious candidates who can participate
          in our growth.
        </p>
        <form
          action=""
          class="d-flex flex-wrap justify-content-between"
          style={{ boxShadow: "0 2px 15px rgb(0 0 0 / 10%)", padding: "20px" }}
          onSubmit={handleSubmit}
        >
          <div class="row border-bottom mb-5 pb-4">
            <div class="col-lg-3 col-md-6">
              <label class="d-column w-100 mb-1" for="name">
                Name :
              </label>
              <input
                required
                class="mb-4 w-75"
                id="name"
                type="text"
                placeholder="Name..."
                onChange={(e) => setname(e.target.value)}
                value={name}
              />
            </div>
            <div class="col-lg-3 col-md-6">
              <label class="d-column w-100 mb-1" for="qualification">
                Academic qualification :
              </label>
              <input
                required
                class="mb-4 w-75"
                id="qualification"
                type="text"
                placeholder="Academic qualification..."
                onChange={(e) => setacademic_qualification(e.target.value)}
                value={academic_qualification}
              />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <label class="d-column w-100 mb-1" for="mobile">
                Mobile :
              </label>
              <input
                required
                class="mb-4 w-75"
                id="mobile"
                name="mobile"
                type="text"
                placeholder="Mobile..."
                onChange={(e) => setmobile(e.target.value)}
                value={mobile}
              />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <label class="d-column w-100 mb-1" for="email">
                Email :
              </label>
              <input
                required
                class="mb-4 w-75"
                id="email"
                type="text"
                placeholder="Email..."
                onChange={(e) => setemail(e.target.value)}
                value={email}
              />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <label class="d-column w-100 mb-1" for="date">
                Date of birth :
              </label>
              <input
                required
                class="mb-4 w-75"
                id="date"
                name="date"
                type="text"
                placeholder="Date of birth..."
                onChange={(e) => setbirthday(e.target.value)}
                value={birthday}
              />
            </div>
            <div class="col-lg-9 col-md-6 col-sm-12">
              <label class="d-column w-100 mb-1" for="address">
                Address :
              </label>
              <input
                required
                class="mb-4 w-75 w-lg-100 flex-grow-1"
                id="address"
                name="address"
                type="text"
                placeholder="Address..."
                onChange={(e) => setaddress(e.target.value)}
                value={address}
              />
            </div>
          </div>
          <div class="row w-100 mb-5">
            <div class="col-lg-6">
              <label class="d-column mb-1" for="vision">
                1. Do you have a vision? How?
              </label>
              <textarea
                class="w-100 h-textarea mb-3"
                required
                id="vision"
                cols="30"
                rows="10"
                onChange={(e) => setq1(e.target.value)}
                value={q1}
              ></textarea>
            </div>
            <div class="col-lg-6">
              <label class="d-column mb-1" for="q2">
                2. Are you looking for a new challenge? How?
              </label>
              <textarea
                class="w-100 h-textarea mb-3"
                required
                id="q2"
                cols="30"
                rows="10"
                onChange={(e) => setq2(e.target.value)}
                value={q2}
              ></textarea>
            </div>
            <div class="col-lg-6">
              <label class="d-column mb-1" for="q3">
                3. Are you seeking to learn in multi-uses environment? How?
              </label>
              <textarea
                class="w-100 h-textarea mb-3"
                required
                id="q3"
                cols="30"
                rows="10"
                onChange={(e) => setq3(e.target.value)}
                value={q3}
              ></textarea>
            </div>
            <div class="col-lg-6">
              <label class="d-column mb-1" for="q4">
                4. What skills do you have?
              </label>
              <textarea
                class="w-100 h-textarea mb-3"
                required
                id="q4"
                cols="30"
                rows="10"
                onChange={(e) => setq4(e.target.value)}
                value={q4}
              ></textarea>
            </div>
            <div class="col-lg-6">
              <label class="d-column mb-1" for="q5">
                5. Do you believe in making travel important? How?
              </label>
              <textarea
                class="w-100 h-textarea mb-3"
                required
                id="q5"
                cols="30"
                rows="10"
                onChange={(e) => setq5(e.target.value)}
                value={q5}
              ></textarea>
            </div>
            <div class="col-lg-6">
              <label class="d-column mb-1" for="q6">
                6. Do you believe in developing and growing our brand? How?
              </label>
              <textarea
                class="w-100 h-textarea mb-3"
                required
                id="q6"
                cols="30"
                rows="10"
                onChange={(e) => setq6(e.target.value)}
                value={q6}
              ></textarea>
            </div>
            <div class="col-lg-6">
              <label class="d-column mb-1" for="q7">
                7. What position that you believe it would suit your
                qualifications?
              </label>
              <textarea
                class="w-100 h-textarea mb-3"
                required
                id="q7"
                cols="30"
                rows="10"
                onChange={(e) => setq7(e.target.value)}
                value={q7}
              ></textarea>
            </div>
            <div class="col-lg-6">
              <label class="d-column mb-1" for="q8">
                8. What previous experience do you have?
              </label>
              <textarea
                class="w-100 h-textarea mb-3"
                required
                id="q8"
                cols="30"
                rows="10"
                onChange={(e) => setq8(e.target.value)}
                value={q8}
              ></textarea>
            </div>
          </div>
          <div class="row w-100 d-flex justify-content-center pb-4 mb-5">
            <button
              type="submit"
              class="btn roundrd-circle main-btn btn-business w-sub"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
