import React from "react";
import './footer.css'

function Footer() {
  return (
    <section>
	<div class="container-fluid bg-dark">	
		<div class="row px-5 py-4">
			<div class="col-md-3 col-12 col-xxl-3">
				<div class="d-flex align-items-start f-gry flex-column">
					<img src="https://carservicewale.in/assets/images/footer-logo.png" alt="footer logo" class="mb-3 w-80pc" /> <span>CSW Solutions PVT. LTD. <br/>814, Niharika Mirage,  Kopra Road, Sector 10, Kharghar, Navi Mumbai, Maharashtra, India 410210</span>
				</div>
			</div>

			<div class="col-md-1 col-xxl-1"></div>
			
			<div class="col-md-3 col-12 col-xxl-3">
				<ul class="nav flex-column footer-nav justify-content-center">
					<li><a href="/AboutUs">About us</a></li>
					<li><a href="/ContactUs">Contact us</a></li>
					<li><a href="/TC">Terms & Conditions</a></li>
					<li><a href="/Privacy">Privacy Policy</a></li>
				</ul>
			</div>

			<div class="col-md-2 col-12 col-xxl-2">
				<ul class="nav flex-column footer-nav justify-content-center">
					<li class="d-flex">
						<ion-icon name="call-outline" class="mr-2 m-large"></ion-icon> <a href="#" class="h-0">+91 8045 969696</a ></li>
					
					<li class="d-flex">
						<ion-icon name="mail-outline" class="mr-2 m-large"></ion-icon>
						<a href="mailto:info@carservicewale.in">info@carservicewale.in</a>
					</li>
					<li class="d-flex">
						<ion-icon name="calendar-outline"  class="mr-2 m-large"></ion-icon> <a href="#"  class="h-0">Monday - Sunday</a >
					</li>
					<li class="d-flex">
					<ion-icon name="time-outline"  class="mr-2 m-large"></ion-icon>
						24 hours
					</li>
				</ul>
			</div>

			<div class="col-md-1 col-xxl-1"></div>

			<div class="col-md-2 col-12 col-xxl-2">
				<div class="d-flex flex-column align-items-center f-gry">
					<h5 class="text-left mb-3">Follow us</h5>
					<p>
						<a href="#" class="f-gry"><ion-icon name="logo-whatsapp" class="ml-0 m-large"></ion-icon></a>
						<a href="#" class="f-gry"><ion-icon name="logo-facebook" class="ml-2 m-large"></ion-icon></a>
						<a href="#" class="f-gry"><ion-icon name="logo-linkedin" class="ml-2 m-large"></ion-icon></a>
						<a href="https://www.instagram.com/carservicewale/" class="f-gry"><ion-icon name="logo-instagram" class="ml-2 m-large" target="blank_"></ion-icon></a>
					</p>
				</div>	
			</div>

		</div>
	</div>
	

	<div class="container-fluid bg-drak-gry">

		<div class="row px-5">
			<div class="col-md-12 col-ms-12 col-12 col-xxl-6">
				<p class="text-center f-gry py-2">&copy;{new Date().getFullYear()} CSW Solutions PVT. LTD.</p>
			</div>
			
		</div>

	</div>
</section>
            
  );
}

export default Footer;
