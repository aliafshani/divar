import React from "react";
import "./Navbar.css";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { PiSignpost } from "react-icons/pi";
import { LuShieldQuestion } from "react-icons/lu";

function Navbar() {
  return (
    <div className="col-12 text-white">
      <div className=" nav">
        <div className="nav-right">
          <div className="d-flex">
            <div className="nav-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  fill="#A62626"
                  fillRule="evenodd"
                  d="M8.386 14.617H8.28a.71.71 0 0 1-.595-.806c.473-3.117.63-8.092.63-8.127.035-.386.333-.7.736-.683a.715.715 0 0 1 .683.718c0 .21-.175 5.097-.648 8.303a.7.7 0 0 1-.7.595m10.037 1.296a.69.69 0 0 1-.666-.49.69.69 0 0 1 .455-.876c3.31-1.05 3.363-1.857 3.381-2.295.035-.683-.49-1.558-.7-1.856a.701.701 0 1 1 1.138-.824c.105.14 1.05 1.454.963 2.768-.087 1.594-1.314 2.575-4.361 3.556a1 1 0 0 0-.105.009q-.053.008-.105.009Zm-9.512 2.47a.66.66 0 0 1-.543-.262.683.683 0 0 1 .123-.981c1.436-1.139 2.4-2.155 3.03-3.048-.35-.175-.718-.438-.91-.876-.176-.403-.281-1.069.332-1.962.876-1.296 1.752-1.594 2.084-1.664a.87.87 0 0 1 1.016.613c.088.315.298 1.314-.332 2.838.84-.018 1.506-.245 2.014-.666.98-.788 1.033-2.12 1.033-2.137a.715.715 0 0 1 .719-.683.715.715 0 0 1 .683.718c0 .07-.07 1.944-1.524 3.17-.911.771-2.155 1.104-3.661.982-.718 1.103-1.857 2.4-3.626 3.8a.7.7 0 0 1-.438.158m3.801-7.076a3.1 3.1 0 0 0-.63.735c-.228.35-.246.543-.228.596.035.088.21.175.385.245.333-.665.438-1.191.473-1.576m.175 4.922a.71.71 0 0 0 .7.683h.036c.053 0 1.226-.035 2.908-.42a.7.7 0 0 0 .543-.841.7.7 0 0 0-.841-.543c-1.56.332-2.663.385-2.68.385a.704.704 0 0 0-.666.736M1.134 18.103c.122.175.35.28.56.28.14 0 .28-.035.42-.122 4.45-3.24 4.625-7.48 4.625-7.655 0-.385-.298-.7-.683-.718s-.7.298-.718.683c0 .14-.176 3.731-4.047 6.551a.7.7 0 0 0-.157.981"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="nav-divider" />
            <button className="nav-button">
              <CiLocationOn className="nav-button-icon" />
              <p className="nav-button-text">تهران</p>
            </button>
          </div>
          <div className="d-flax">
            <form className="nav-search-form">
              <input className="nav-search-input" placeholder=" جستجو در همه محصولات" />
            </form>
          </div>
        </div>
        <div className="nav-left">
          <button className="nav-button fw-lighter">
            <IoPersonOutline className="nav-button-icon" />
            <p className="nav-button-text">اکانت من</p>
          </button>
          <button className="nav-button">
            <PiSignpost className="nav-button-icon" />
            <p className="nav-button-text"> پشتیبانی</p>
          </button>
          <button className="nav-button">
            <LuShieldQuestion className="nav-button-icon" />
            <p className="nav-button-text"> سوالات متدوال</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
