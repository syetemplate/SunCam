import React from 'react';
import cardImg from '@/assets/media/card_img.png';
import logoImg from '@/assets/media/w_logo.png';
import recentPost1Img from '@/assets/media/f_rc_img01.jpg';
import recentPost2Img from '@/assets/media/f_rc_img02.jpg';
import footerBg from '@/assets/bg/footer_bg.jpg';

const Footer = () => {
    return (
        <footer id="contact">
            <div className="footer-wrap pt-190 pb-40" style={{ backgroundImage: `url(${footerBg.src})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget mb-50">
                                <div className="footer-logo mb-35">
                                    <a href="index.html"><img src={logoImg.src} alt="Logo" /></a>
                                </div>
                                <div className="footer-text">
                                    <p>Orem Ipsum is simply dumm text the printing and types indstr sum has been the industry</p>
                                </div>
                                <div className="footer-social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget mb-50">
                                <div className="fw-title mb-30">
                                    <h5>recent posts</h5>
                                </div>
                                <div className="f-rc-post">
                                    <ul>
                                        <li>
                                            <div className="f-rc-thumb">
                                                <a href="#"><img src={recentPost1Img.src} alt="Recent Post 1" /></a>
                                            </div>
                                            <div className="f-rc-content">
                                                <span>19 Jun, 2019</span>
                                                <h5><a href="#">which the syste built and actually</a></h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="f-rc-thumb">
                                                <a href="#"><img src={recentPost2Img.src} alt="Recent Post 2" /></a>
                                            </div>
                                            <div className="f-rc-content">
                                                <span>19 Jun, 2019</span>
                                                <h5><a href="#">which the syste built and actually</a></h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget mb-50">
                                <div className="fw-title mb-30">
                                    <h5>useful links</h5>
                                </div>
                                <div className="fw-link">
                                    <ul>
                                        <li><a href="#"><i className="fas fa-caret-right"></i> About us</a></li>
                                        <li><a href="#"><i className="fas fa-caret-right"></i> Delivery Information</a></li>
                                        <li><a href="#"><i className="fas fa-caret-right"></i> Terms & Conditions</a></li>
                                        <li><a href="#"><i className="fas fa-caret-right"></i> Privacy Policy</a></li>
                                        <li><a href="#"><i className="fas fa-caret-right"></i> Refund Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget mb-50">
                                <div className="fw-title mb-30">
                                    <h5>Send Your Message</h5>
                                </div>
                                <div className="footer-form">
                                    <form action="#">
                                        <input type="email" placeholder="Your E-mail" />
                                        <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                        <button className="btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-7">
                            <div className="copyright-text">
                                <p>Copyright© <span>Suppke </span> | All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="f-payment-method text-center text-md-right">
                                <img src={cardImg.src} alt="Payment Methods" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
