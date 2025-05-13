import { BiLogoDigitalocean } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[80%] mx-auto py-12 grid grid-cols-1 sm:grid-cols-[30%_70%]">
        <div>
          <div className="flex gap-2 items-center text-3xl">
            <BiLogoDigitalocean />
            <h1>Unionly</h1>
          </div>
          <p className="font-thin mt-3 leading-7 text-balance">
            unionly is a financial and banking company. Banking services are
            provided by our amazing features and ground breaking fintech.
          </p>
        </div>
        <div className="capitalize font-thin grid grid-cols-2 md:grid-cols-3 items-start mt-12">
          <div>
            <ul className="leading-10">
              <li>About us</li>
              <li>Our Services</li>
              <li>Our Features</li>
            </ul>
          </div>
          <div>
            <ul className="leading-10">
              <li>About us</li>
              <li>Our Services</li>
              <li>Our Features</li>
            </ul>
          </div>
          <div>
            <ul className="leading-10">
              <li>Acceptable use policy</li>
              <li>Privacy</li>
              <li>Terms and conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
