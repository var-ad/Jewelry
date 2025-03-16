import * as assets from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300">
  <div className="container mx-auto px-6 py-10 grid grid-cols-5 gap-8">
    {/* Company */}
    <div>
      <h3 className="text-lg text-gray-900 font-semibold mb-4 h-14">Company</h3>
      <ul className="space-y-4 text-sm text-gray-900">
        <li>Blog</li>
        <li>About Us</li>
        <li>Our Story</li>
        <li>Our Stores</li>
        <li>Franchise Enquiry</li>
      </ul>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg text-gray-900 font-semibold mb-4 h-14">Quick Links</h3>
      <ul className="space-y-4 text-sm text-gray-900">
        <li>Category</li>
        <li>Collection</li>
        <li>Offers</li>
        <li>Corporate Gifting</li>
        <li>Jewelry Guide</li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h3 className="text-lg text-gray-900 font-semibold mb-4 h-14">Legal</h3>
      <ul className="space-y-4 text-sm text-gray-900 ">
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>FAQs</li>
        <li>Customer Support</li>
        <li>Franchise Enquiry</li>
        <li>Our Certifications</li>
      </ul>
    </div>

    {/* Order */}
    <div>
      <h3 className="text-lg text-gray-900 font-semibold mb-4 h-14">Order</h3>
      <ul className="space-y-4 text-sm text-gray-900">
        <li>Shipping Policy</li>
        <li>Return Policy</li>
        <li>Cancellation Policy</li>
        <li>Track Order</li>
        <li>Check Order Status</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-lg text-gray-900 font-semibold mb-4 h-14">Contact</h3>
      <p className="text-sm text-gray-900">
        <strong>Lilian Jewelers Pvt. Ltd.</strong><br />
        56 W, Broadway Street, Park Avenue,<br />
        San Jose, California – 056
      </p>
      <p className="text-sm text-gray-900 mt-2">+1 (226) 152-4722</p>
      <p className="text-sm text-gray-900">+315 652 415 452</p>
      <p className="text-sm text-gray-900">info@lilianjewelers.com</p>
    </div>
  </div>

  {/* Newsletter */}
  <div className="container mx-auto grid grid-cols-2 gap-8 items-center justify-center">
  {/* Left Section: Subscribe */}
  <div className="flex flex-col justify-center items-center gap-4">
    <p className="text-gray-900 text-md underline">
      Subscribe for our daily Offers & News later
    </p>
    <div>
      <label htmlFor="hs-trailing-button-add-on" className="sr-only">
        Label
      </label>
      <div className="relative w-full">
      <input
        type="text"
        id="hs-trailing-button-add-on"
        name="hs-trailing-button-add-on"
        className="py-2.5 sm:py-3 px-4 pr-24 block w-full border border-gray-300 rounded-lg sm:text-sm text-gray-900 placeholder-gray-400 bg-white focus:z-10 focus:border-blue-500 focus:ring-blue-500"
        placeholder="Enter your email..."
      />
      <button
        id="button"
        type="button"
        className="absolute top-1/2 right-2 -translate-y-1/2 py-0 px-4 text-sm rounded-md bg-black text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none">
        Subscribe
      </button>
    </div>
    </div>
  </div>

  {/* Right Section: Payment Options */}
  <div className="flex flex-col items-center gap-y-4">
  <p className="text-gray-900 text-md underline">
    We accept the following payment options
  </p>
  <div className="flex gap-x-6 justify-center">
    <img src={assets.visa} alt="Visa" className="h-8" />
    <img src={assets.mastercard} alt="Mastercard" className="h-8" />
    <img src={assets.amex} alt="American Express" className="h-8" />
    <img src={assets.discover} alt="Discover" className="h-8" />
    <img src={assets.paypal} alt="Paypal" className="h-8" />
    <img src={assets.applepay} alt="Apple Pay" className="h-8" />
    <img src={assets.gpay} alt="Google Pay" className="h-8" />
    <img src={assets.apay} alt="Amazon Pay" className="h-8" />
  </div>
  </div>
  </div>

  {/* Socials */}
  <div className="mt-4 flex items-center justify-between w-full pt-2">
  <p className="absolute left-1/2 transform -translate-x-1/2 text-xs text-gray-900">
    &copy; Lilian Jewelers. 2024
  </p>
  <div className="flex gap-x-6 ml-auto pr-40">
    <a href="#" className="hover:text-blue-500">
      <FontAwesomeIcon icon={faFacebook} size="md" style={{ color: '#000' }} />
    </a>
    <a href="#" className="hover:text-pink-500">
      <FontAwesomeIcon icon={faInstagram} size="md" style={{ color: '#000' }} />
    </a>
    <a href="#" className="hover:text-black">
      <FontAwesomeIcon icon={faXTwitter} size="md" style={{ color: '#000' }} />
    </a>
    <a href="#" className="hover:text-red-500">
      <FontAwesomeIcon icon={faPinterest} size="md" style={{ color: '#000' }} />
    </a>
    <a href="#" className="hover:text-red-600">
      <FontAwesomeIcon icon={faYoutube} size="md" style={{ color: '#000' }} />
    </a>
  </div>
  </div>


</footer>
  );
}

export default Footer;
