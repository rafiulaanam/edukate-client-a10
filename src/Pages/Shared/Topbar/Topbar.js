import React from 'react';
import { Link } from 'react-router-dom';
import { HiPhone, HiMail } from "react-icons/hi";
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaLinkedinIn } from "react-icons/fa";

const Topbar = () => {
    return (
        <div>
            <div class="container-fluid bg-dark">
        <div class="row py-2 px-lg-5">
            <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center text-white">
                    <small><HiPhone className='fs-6 me-2'/>+012 345 6789</small>
                    <small class="px-3">|</small>
                    <small><HiMail className='fs-6 me-2'></HiMail>info@example.com</small>
                </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                     <Link class="text-white px-2"  >
                       <FaFacebookF></FaFacebookF>
                    </Link>
                     <Link class="text-white px-2"  >
                        <FaTwitter></FaTwitter>
                    </Link>
                     <Link class="text-white px-2"  >
                        <FaLinkedinIn></FaLinkedinIn>
                    </Link>
                     <Link class="text-white px-2"  >
                       <FaInstagram></FaInstagram>
                    </Link>
                     <Link class="text-white pl-2"  >
                       <FaYoutube></FaYoutube>
                    </Link>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Topbar;