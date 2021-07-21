import React from 'react';
import './footer.css';
import { Button } from '../../../Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    // <div className='footer-container'>
    //   <section className='footer-subscription'>
    //     <p className='footer-subscription-heading'>
    //     Join us to experience the best job hunting experience
    //     </p>
    //     <p className='footer-subscription-text'>
    //       You can unsubscribe at any time.
    //     </p>
    //     <div className='input-areas'>
    //       <form>
    //         <input
    //           className='footer-input'
    //           name='email'
    //           type='email'
    //           placeholder='Your Email'
    //         />
    //         <button></button>
    //         <Button buttonStyle='btn--outline'>Subscribe</Button>
    //       </form>
    //     </div>
    //   </section>
    //   <div class='footer-links'>
    //     <div className='footer-link-wrapper'>
    //       <div class='footer-link-items'>
    //         <h2>About Us</h2>
    //         <Link to='/sign-up'>How it works</Link>
    //         <Link to='/'>Testimonials</Link>
    //         <Link to='/'>Careers</Link>
    //         <Link to='/'>Investors</Link>
    //         <Link to='/'>Terms of Service</Link>
    //       </div>
    //       <div class='footer-link-items'>
    //         <h2>Contact Us</h2>
    //         <Link to='/'>Contact</Link>
    //         <Link to='/'>Support</Link>
    //         <Link to='/'>Destinations</Link>
    //         <Link to='/'>Sponsorships</Link>
    //       </div>
    //     </div>
    //     <div className='footer-link-wrapper'>
    //       <div class='footer-link-items'>
    //         <h2>Videos</h2>
    //         <Link to='/'>Submit Video</Link>
    //         <Link to='/'>Ambassadors</Link>
    //         <Link to='/'>Agency</Link>
    //         <Link to='/'>Influencer</Link>
    //       </div>
    //       <div class='footer-link-items'>
    //         <h2>Social Media</h2>
    //         <Link to='/'>Instagram</Link>
    //         <Link to='/'>Facebook</Link>
    //         <Link to='/'>Youtube</Link>
    //         <Link to='/'>Twitter</Link>
    //       </div>
    //     </div>
    //   </div>
    //   <section class='social-media'>
    //     <div class='social-media-wrap'>
    //       <div class='footer-logo'>
    //         <Link to='/' className='social-logo'>
    //           Freelancer
    //           {/* <i class='fab fa-typo3' /> */}
    //           <i class="fas fa-paper-plane"></i>
    //         </Link>
    //       </div>
    //       <medium class='website-rights'>Freelancer © 2021</medium>
    //       <div class='social-icons'>
    //         <Link
    //           class='social-icon-link facebook'
    //           to='/'
    //           target='_blank'
    //           aria-label='Facebook'
    //         >
    //           <i class='fab fa-facebook-f' />
    //         </Link>
    //         <Link
    //           class='social-icon-link instagram'
    //           to='/'
    //           target='_blank'
    //           aria-label='Instagram'
    //         >
    //           <i class='fab fa-instagram' />
    //         </Link>
    //         <Link
    //           class='social-icon-link youtube'
    //           to='/'
    //           target='_blank'
    //           aria-label='Youtube'
    //         >
    //           <i class='fab fa-youtube' />
    //         </Link>
    //         <Link
    //           class='social-icon-link twitter'
    //           to='/'
    //           target='_blank'
    //           aria-label='Twitter'
    //         >
    //           <i class='fab fa-twitter' />
    //         </Link>
    //         <Link
    //           class='social-icon-link twitter'
    //           to='/'
    //           target='_blank'
    //           aria-label='LinkedIn'
    //         >
    //           <i class='fab fa-linkedin' />
    //         </Link>
    //       </div>
    //     </div>
    //   </section>
    // </div>
		<div class="footer-area footer-bg footer-padding">
			<div class="container">
				<div class="row d-flex justify-content-between">
					<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
					   <div class="single-footer-caption mb-50">
						 <div class="single-footer-caption mb-30">
							 <div class="footer-tittle">
								 <h4>About Us</h4>
								 <div class="footer-pera">
									 <p>Heaven frucvitful doesn't cover lesser dvsays appear creeping seasons so behold.</p>
								</div>
							 </div>
						 </div>
  
					   </div>
					</div>
					<div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
						<div class="single-footer-caption mb-50">
							<div class="footer-tittle">
								<h4>Contact Info</h4>
								<ul>
									<li>
									<p>Address :Your address goes
										here, your demo address.</p>
									</li>
									<li><a href="#">Phone : +8880 44338899</a></li>
									<li><a href="#">Email : info@colorlib.com</a></li>
								</ul>
							</div>
  
						</div>
					</div>
					<div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
						<div class="single-footer-caption mb-50">
							<div class="footer-tittle">
								<h4>Important Link</h4>
								<ul>
									<li><a href="#"> View Project</a></li>
									<li><a href="#">Contact Us</a></li>
									<li><a href="#">Testimonial</a></li>
									<li><a href="#">Proparties</a></li>
									<li><a href="#">Support</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
						<div class="single-footer-caption mb-50">
							<div class="footer-tittle">
								<h4>Newsletter</h4>
								<div class="footer-pera footer-pera2">
								 <p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
							 </div>
							 <div class="footer-form" >
								 <div id="mc_embed_signup">
									 <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
									 method="get" class="subscribe_form relative mail_part">
										 <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
										 class="placeholder hide-on-focus" onfocus="this.placeholder = ''"
										 onblur="this.placeholder = ' Email Address '"/>
										 <div class="form-icon">
											 <button type="submit" name="submit" id="newsletter-submit"
											 class="email_icon newsletter-submit button-contactForm"><img src="assets/img/icon/form.png" alt=""/></button>
										 </div>
										 <div class="mt-10 info"></div>
									 </form>
								 </div>
							 </div>
							</div>
						</div>
					</div>
				</div>
			   {/* <!--  --> */}
			   <div class="row footer-wejed justify-content-between">
					   <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
						  {/* <!-- logo --> */}
						  <div class="footer-logo mb-20">
							<a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""/></a>
						  </div>
					   </div>
					   <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
						<div class="footer-tittle-bottom">
							<span>5000+</span>
							<p>Talented Hunter</p>
						</div>
					   </div>
					   <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
							<div class="footer-tittle-bottom">
								<span>451</span>
								<p>Talented Hunter</p>
							</div>
					   </div>
					   <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
							{/* <!-- Footer Bottom Tittle --> */}
							<div class="footer-tittle-bottom">
								<span>568</span>
								<p>Talented Hunter</p>
							</div>
					   </div>
			   </div>
			</div>
		</div>
    
	
  );
}

export default Footer;
