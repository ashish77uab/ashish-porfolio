import React from "react";
import {
  BiHomeAlt2,
} from "react-icons/bi";
import { FaMoon, FaRegUser } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import {
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsFacebook,
  BsFillCheckCircleFill,
  BsInstagram,
  BsLinkedin,
  BsTwitter,

} from "react-icons/bs";
import { FaImages } from "react-icons/fa";

import { FaRegEnvelope } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
export const reactIcons = {

  home: <BiHomeAlt2 />,
  arrowleft: <BsChevronLeft />,
  arrowright: <IoIosArrowForward />,
  arrowdown: <BsChevronDown />,
  success: <BsFillCheckCircleFill />,
  facebook: <BsFacebook />,
  instagram: <BsInstagram />,
  twitter: <BsTwitter />,
  linkedin: <BsLinkedin />,
  about: <FaRegUser />,
  resume: <FaRegFileLines/>,
  projects: <FaImages/>,
  contact: <FaRegEnvelope/>,
  sun: <MdOutlineWbSunny />,
  moon: <FaMoon />,

};
