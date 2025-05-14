import Link from "next/link";
// pages imports
import Footer from "@/components/Footer";
import Image from "next/image";
import Header from "@/components/header";

// react-icons imports
import { BiLogoDigitalocean } from "react-icons/bi";
import { RiGlobalFill, RiSecurePaymentLine } from "react-icons/ri";
import { FaBoltLightning } from "react-icons/fa6";
import { FcServices } from "react-icons/fc";
import { MdVerified } from "react-icons/md";

// images
import FintechImage from "@/assets/img/homebanner.png";
import FintechImage2 from "@/assets/img/homebanner2.png";
import ManImage from "@/assets/img/manservices.png";

// shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <AboutUsComponents />
      <ServicesComponents />
      <FrequentlyComponents />
      <Footer />
    </div>
  );
};

// Homepge Banner
const HomeBanner = () => {
  return (
    <div className="bg-blue-800 text-white">
      <div className="max-w-[80%] mx-auto pt-12 flex flex-col md:flex-row items-center">
        <div className="hidden sm:flex flex-1">
          <Image src={FintechImage} alt="" className="w-[4000px]" />
        </div>
        <div className="flex-1">
          <h1 className="font-medium capitalize my-3 text-5xl text-center">
            Get started Banking with us
          </h1>
          <p className="text-center leading-6">
            Unionly bank, different, we believe that people come first and that
            every customer deserves a great and amazing experience.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Link href={"/login"}>
              <button className="text-blue-800 bg-white mt-4 px-8 py-2 rounded-md font-semibold cursor-pointer">
                Login
              </button>
            </Link>
            <Link href={"/register"}>
              <button className="text-blue-800 bg-white mt-4 px-8 py-2 rounded-md font-semibold cursor-pointer">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 pt-8 sm:pt-0">
          <Image src={FintechImage} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

// information - about us section
const AboutUsComponents = () => {
  return (
    <section className="bg-blue-50 py-12">
      <div className="text-center font-semibold capitalize text-xl">
        <h1>About us</h1>
      </div>
      <div className="about_information max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-12 py-6 mt-2">
        <div className="bg-blue-200 p-6 rounded-md info text-3xl text-center flex flex-col items-center">
          <RiSecurePaymentLine />
          <div>
            <h1 className="text-xl my-2">Secure Payments</h1>
            <p className="text-base leading-8">
              unionly is all about secure payment and transfer system. we ensure
              the very best and best alone is experienced during our banking
              system
            </p>
          </div>
        </div>
        <div className="info bg-yellow-100 p-6 rounded-md text-3xl text-center flex flex-col items-center">
          <FaBoltLightning />
          <div>
            <h1 className="text-xl my-2">Fast Transfer & Payments</h1>
            <p className="text-base leading-8">
              Our transactions are quick and easy to initiate. transfers and
              payments done on unionly is quick, fast and easy when you use our
              system.
            </p>
          </div>
        </div>
        <div className="info bg-red-100 p-8 rounded-md text-3xl text-center flex flex-col items-center">
          <RiGlobalFill />
          <div>
            <h1 className="text-xl my-2">Global Service</h1>
            <p className="text-base leading-8">
              We are Global. we offer global transfers and payment from any part
              in the world. Just login and use our services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// const services information
const ServicesComponents = () => {
  return (
    <section className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-2 mt-12">
      <div className="services_info">
        <h1 className="text-center text-4xl leading-[50px] capitalize font-medium">
          Make Use of Our amazing Services Today on unionly Platform
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-2 mt-8">
          <div className="text-left">
            <div className="text-green-700 text-4xl">
              <MdVerified />
            </div>
            <h1 className="font-semibold capitalize my-2">
              Verified banking Service
            </h1>
            <p className="text-base leading-8 text-balance">
              We are Global. we offer global transfers and payment from any part
              in the world. Just login and use our services.
            </p>
          </div>
          <div className="text-left">
            <div className="text-4xl">
              <FcServices />
            </div>
            <h1 className="font-semibold capitalize my-2">
              Incredible banking features
            </h1>
            <p className="text-base leading-8">
              We are Global. we offer global transfers and payment from any part
              in the world. Just login and use our services.
            </p>
          </div>
        </div>
        <div className="btn mt-8">
          <button className="bg-blue-900 capitalize text-white py-3 px-8 rounded-md hover:opacity-85 duration-200 cursor-pointer">
            Get started
          </button>
        </div>
      </div>
      <div className="services_Image mx-8 bg-gradient-to-br from-blue-50 via-blue-300 to-blue-800 rounded-l-full rounded-r-full rounded-b-full">
        <Image src={ManImage} alt="" />
      </div>
    </section>
  );
};

// faq components
const FrequentlyComponents = () => {
  // faq data and contents
  const FaqData = [
    {
      question: "What is Unionly and how does it work?",
      answer:
        "Unionly is a secure digital platform that enables unions and associations to easily collect payments, dues, and donations online. Through customizable forms and payment pages, organizations can streamline their finances and give members a simple way to pay anytime, from anywhere.",
    },
    {
      question: "Is Unionly secure for online payments?",
      answer:
        "Yes, Unionly is built with industry-standard security protocols, including SSL encryption and PCI compliance, to ensure all transactions and personal data are protected. Your financial information is processed securely through trusted payment processors.",
    },
    {
      question: "Can Unionly integrate with our existing website?",
      answer:
        "Absolutely! Unionly offers easy-to-embed payment forms and customizable pages that can be linked or integrated directly into your existing website, without the need for advanced technical skills.",
    },
    {
      question: "What types of payments can Unionly collect?",
      answer:
        "Unionly supports a variety of payments, including union dues, event registration fees, merchandise sales, fundraising donations, and more. Organizations can create custom categories and pages for different types of collections.",
    },
    {
      question: "How do we get started with Unionly?",
      answer:
        "Getting started is simple. Just visit our login page, sign up for an account, and follow the setup wizard to create your first payment page. Our support team is also available to assist with onboarding and customization.",
    },
  ];

  return (
    <section className="mx-auto px-4 md:px-0 py-16 bg-blue-50">
      <div className="max-w-[85%] md:max-w-[50%] mx-auto">
        <h1 className="text-3xl capitalize mb-2 text-blue-900">
          Frequently Asked Questions
        </h1>
        <p className="text-[#5A5B5F]">
          You’ve got questions. We’ve got answers.
        </p>
        <div>
          {FaqData.map((item, index) => (
            <Accordion
              type="single"
              collapsible
              key={index}
              className="border-b"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold text-blue-900 py-6 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="leading-7 tracking-wider">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

// everything inbetween

// footer components

export default Home;
