import React from 'react';

import { HiPhone,HiMail,HiLocationMarker } from "react-icons/hi";
import './Contact.css'
const Contact = () => {
    return (
        <div >
 <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <div class="bg-light d-flex flex-column justify-content-center px-5" style={{height: '450px'}}>
                        <div class="d-flex align-items-center mb-5">
                            <div class="btn-icon bg-primary mr-4 px-4 py-4">
                                <HiLocationMarker className='text-white fs-1'></HiLocationMarker>
                            </div>
                            <div class="mt-n1 ms-4">
                                <h4>Our Location</h4>
                                <p class="m-0">123 Street, New York, USA</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-5">
                            <div class="btn-icon bg-secondary mr-4 px-4 py-4">
                                <HiPhone className='text-white fs-1'></HiPhone>
                            </div>
                            <div class="mt-n1 ms-4">
                                <h4>Call Us</h4>
                                <p class="m-0">+012 345 6789</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="btn-icon bg-warning mr-4 px-4 py-4">
                                <HiMail className='text-white fs-1'></HiMail>
                            </div>
                            <div class="mt-n1 ms-4">
                                <h4>Email Us</h4>
                                <p class="m-0">info@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="section-title position-relative mb-4">
                        <h6  class="d-inline-block position-relative text-danger  text-uppercase pb-2">Need Help?</h6>
                        <h1 class="display-4 fw-bold ">Send Us A Message</h1>
                    </div>
                    <div class="contact-form">
                        <form>
                            <div class="row">
                                <div class="col-6 form-group">
                                    <input type="text" class=" form-control border border-top-0 border-start-0 border-end-0 py-2" placeholder="Your Name" required="required"/>
                                </div>
                                <div class="col-6 form-group ">
                                    <input type="email" class="form-control border border-top-0 border-start-0 border-end-0 py-2 " placeholder="Your Email" required="required"/>
                                </div>
                            </div>
                            <div class="form-group mt-4">
                                <input type="text" class="form-control border border-top-0 border-start-0 border-end-0 py-2" placeholder="Subject" required="required"/>
                            </div>
                            <div class="form-group mt-4">
                                <textarea class="form-control border border-top-0 border-start-0 border-end-0 p-0" rows="5" placeholder="Message" required="required"></textarea>
                            </div>
                            <div>
                                <button class="btn btn-primary py-3 px-5 mt-4" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Contact;