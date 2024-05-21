import React from "react";
import "./RightSection.css";
import { MdOutlineDirectionsRun } from "react-icons/md";
import { GiWoodenPegleg } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { FaHeadset } from "react-icons/fa6";
import { LuShieldQuestion } from "react-icons/lu";
import { MdHome } from "react-icons/md";

import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function RightSection() {
  return (
    <div className="rightSection">
      <ul className="right-section-ul text-white">
        <Link 
        to={"user-profile"}
        className={"right-section-li"}>
          <MdAccountCircle className="right-section-li-icon" />
          <span className="right-section-li-text">پروفایل من</span>
        </Link>
        <Link 
        to={"/"}
        className={"right-section-li"}>
          <MdHome className="right-section-li-icon" />
          <span className="right-section-li-text">صفحه اصلی</span>
        </Link>
        <Link 
        to={"poweral-assets"}
        className={"right-section-li"}>
          <MdOutlineDirectionsRun className="right-section-li-icon" />
          <span className="right-section-li-text">کالا ورزشی قدرتی</span>
        </Link>
        <Link 
        to={"injury-assets"}
        className={"right-section-li"}>
          <GiWoodenPegleg className="right-section-li-icon" />
          <span className="right-section-li-text">کالا ورزشی بهبودی</span>
        </Link>
        <Link 
        to={"diet"}
        className={"right-section-li"}>
          <MdHealthAndSafety className="right-section-li-icon" />
          <span className="right-section-li-text">تغذیه و رژیم</span>
        </Link>
        <Link 
        to={"coach-panel"}
        className={"right-section-li"}>
          <BsFillPeopleFill className="right-section-li-icon" />
          <span className="right-section-li-text">کانون مربیان</span>
        </Link>
        <Link 
        to={"/about"}
        className={"right-section-li"}>
          <FaInfoCircle className="right-section-li-icon" />
          <span className="right-section-li-text">درباره ما</span>
        </Link>
        <Link 
        to={""}
        className={"right-section-li"}>
          <FaHeadset className="right-section-li-icon" />
          <span className="right-section-li-text">پشتیبانی</span>
        </Link>
        <Link 
        to={""}
        className={"right-section-li"}>
          <LuShieldQuestion className="right-section-li-icon" />
          <span className="right-section-li-text">سوالات متدوال</span>
        </Link>
      </ul>
    </div>
  );
}

export default RightSection;
