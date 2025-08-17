import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import purpleLogo from "../assets/purple-logo.svg";
import heroImage from "../assets/hero-image.png";
import frame1 from "../assets/frame1.png";
import invoice from "../assets/invoice.svg";
import rectangle from "../assets/rectangle.svg";
import frame from "../assets/frame.png";
import dollar from "../assets/dollar.svg";
import frame2 from "../assets/frame2.png";
import globe from "../assets/globe.svg";
import key from "../assets/key.svg";
import running from "../assets/running.svg";
import iphone from "../assets/iPhone.png";
import frame3 from "../assets/frame3.png";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className=" w-full max-w-screen mx-auto ">
      <nav className="flex items-center justify-between  w-full px-4 sm:px-6 gap-4 my-4 ">
        {/* Logo - visible only on small screens */}
        <a href="#" className="flex md:hidde w-[160px] sm:w-[200px]">
          <img
            src={purpleLogo}
            alt="Urgent2kay Logo"
            className="w-full h-auto"
          />
        </a>

        {/* Buttons - hidden on small, shown on md+ */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <button className="border border-[#E8BF31] bg-transparent w-[96px] py-1.5 px-3 text-sm font-bold rounded-full cursor-pointer hover:bg-[#f5eac41a] transition">
              Sign In
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="bg-[#401A6D] text-white w-[175px] py-1.5 px-3 text-sm font-bold rounded-full cursor-pointer hover:bg-[#5e2891] transition">
              Join Urgent2kay
            </button>
          </Link>
        </div>
      </nav>

      <section className=" w-full max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative py-8 ">
        {/* Content Block */}
        <div className="w-full max-w-[1025px] mx-auto md:mt-8 flex flex-col items-center justify-center gap-6 text-center ">
          <h2 className="font-bold text-[23px] md:text-[48px] text-[#3F3F3F] w-full sm:w-[90%] md:w-[80%] mx-auto leading-snug">
            Bundle Bills, Send Requests, Track Payments —
            <span className="text-[#E8BF31]"> All in One Place</span>.
          </h2>
          <p className="text-[#525253] text-[16px] md:text-[23px] font-normal w-full sm:w-[90%] md:w-[80%] mx-auto">
            Simplify your finances with URGENT 2KAY. Combine expenses, request
            funds from sponsors, and ensure payments go exactly where they’re
            needed.
          </p>

          {/* Buttons */}
          <div className="flex sm:flex-row items-center justify-center gap-4 w-full sm:w-[90%] md:w-[70%] px-[10%] ">
            <Link to="/signup">
              {" "}
              <button className=" sm:w-auto sm:min-w-[175px] py-4 md:py-3 px-6 bg-[#401A6D] text-white text-sm md:text-base font-bold rounded-full transition hover:bg-[#5e2891] cursor-pointer">
                Get Started
              </button>
            </Link>
            <Link to="/learn-more">
              {" "}
              <button className=" sm:w-auto sm:min-w-[175px] py-4 md:py-3 px-6 border border-[#E8BF31] text-sm md:text-base font-bold rounded-full transition hover:bg-[#f6e58d1a] cursor-pointer">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Images */}
        <div className="relative w-full  p-4  mx-auto mt-10 ">
          <img
            src={heroImage}
            alt="hero"
            className="object-cover w-full md:w-[80%] h-auto lg:h-[75%] mx-auto border border-transparent rouunded-lg rounded-b-full md:rounded-b mt-6 lg:mt-0 lg:border-2"
          />
          <img
            src={frame}
            alt="overlay frame"
            className="hidden md:block absolute top-[78%] left-[7.5%] w-[85%] mx-auto"
          />
        </div>
      </section>

      <section className=" w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 rounded-md bg-gradient-to-b from-transparent via-[#F7F6F6] to-[#F7F6F6] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-4 py-10">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-8 text-center lg:text-left lg:items-start w-full lg:w-1/2">
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000]">
              How urgent 2Kay Works
            </h2>
            <hr className="border-[#66488A] w-[98%] sm:w-[350px]  border-[1px] self-start sm:self-center " />
          </div>

          {/* Steps */}
          <div className="flex flex-col items-start gap-8 w-[100%] lg:w-full  ">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="p-4 rounded-full bg-[#C4B8D2] shrink-0">
                <img src={rectangle} alt="request icon" className="w-6 h-6" />
              </div>
              <p className="text-sm sm:text-base text-[#000] text-start">
                <strong>Make a Request:</strong> Tell us what bill you need help
                with (school fees, rent, hospital bills, etc).
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-full bg-[#C4B8D2] shrink-0">
                <img src={invoice} alt="invoice icon" className="w-6 h-6" />
              </div>
              <p className="text-sm sm:text-base text-[#000] text-start ">
                <strong>Direct Payment:</strong> Sponsors pay directly to the
                service provider. No middleman wahala.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-full bg-[#C4B8D2] shrink-0">
                <img src={dollar} alt="settled icon" className="w-6 h-6" />
              </div>
              <p className="text-sm sm:text-base text-[#000] text-start ">
                <strong>Bill Settled:</strong> You’re stress-free. No begging.
                No embarrassment.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 max-w-[600px]">
          <img
            src={frame1}
            alt="How it works illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      <section className="w-full max-w-screen-xl mx-auto my-16 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-col-reverse lg:flex-row-reverse items-center justify-center gap-10 rounded-md bg-gradient-to-b from-transparent via-[#F7F6F6] to-[#F7F6F6] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-10">
        {/* Left Content */}
        <div className="flex flex-col items-start lg:items-start text-center lg:text-left gap-8 w-full lg:w-1/2">
          <div className="flex flex-col gap-2 items-start ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000]">
              Why Choose Urgent 2Kay?
            </h2>
            <hr className="border-[#66488A] w-[98%] sm:w-[350px]  border-[1px] md:mx-auto lg:mx-0 self-start md:self-center " />
          </div>

          <div className="flex flex-col gap-8">
            {/* Reason 1 */}
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-full bg-[#C4B8D2] shrink-0">
                <FaHeart size={24} />
              </div>
              <p className="text-sm sm:text-base text-[#000]">
                <strong>No More Awkwardness:</strong>
                <br />
                Ask for help the smart way.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-full bg-[#C4B8D2] shrink-0">
                <img src={key} alt="secure" className="w-6 h-6" />
              </div>
              <p className="text-sm sm:text-base text-[#000] text-start">
                <strong>Secure Transactions:</strong>
                <br />
                Money goes straight to the bills — not through the requester.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-full bg-[#C4B8D2] shrink-0">
                <img src={running} alt="fast" className="w-6 h-6" />
              </div>
              <p className="text-sm sm:text-base text-[#000000] text-start">
                <strong>Fast & Easy:</strong>
                <br />
                Request, sponsor, and settle bills in minutes.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-full bg-[#C4B8D2] shrink-0">
                <img src={globe} alt="global" className="w-6 h-6" />
              </div>
              <p className="text-sm sm:text-base text-[#000] text-start">
                <strong>Made for Every Nigerian:</strong>
                <br />
                Whether it’s school fees, hospital bills, or rent — we’ve got
                you.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={frame2}
            alt="illustration"
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>
      </section>

      <section className="w-full max-w-screen-xl mx-auto my-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-md bg-gradient-to-b from-transparent via-[#F7F6F6] to-[#ECE8F0] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] py-12">
        {/* Left Content */}
        <div className=" flex flex-col gap-6 sm:items-center lg:items-start text-start md:text-center lg:text-left w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3F3F3F] ">
            Get started Today
          </h2>
          <p className="text-base sm:text-lg text-[#3F3F3F] leading-relaxed">
            Join Thousands of Users and start <br className="hidden sm:block" />
            Your Financial Transformation
          </p>
          <Link to="signup">
            <button className="bg-[#401A6D] px-6 py-4 text-white font-semibold rounded-full hover:bg-[#5b2891] transition cursor-pointer ">
              Join Urgent 2Kay
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={iphone}
            alt="iPhone preview"
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>
      </section>

      <section className="w-full max-w-screen-xl mx-auto my-16 px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-md bg-gradient-to-b from-transparent via-[#F7F6F6] to-[#ECE8F0] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 mx-auto flex flex-col gap-6 items-start lg:items-start text-center lg:text-left ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3F3F3F]">
            Partner with Urgent 2Kay
          </h2>

          <ul className="list-disc text-[#000000] text-base sm:text-[16px] flex flex-col gap-4 pl-6 sm:pl-8 text-start">
            <li>
              <strong>Payment Gateways:</strong> Integration for seamless and
              secure transactions.
            </li>
            <li>
              <strong>Financial Institutions:</strong> Collaboration on offering
              innovative financial services.
            </li>
            <li>
              <strong>Service Providers:</strong> We enable direct and bundled
              payments for our services.
            </li>
          </ul>

          <Link to="/partner">
            <button className="bg-[#401A6D] px-6 py-4 text-white font-semibold rounded-full hover:bg-[#5b2891] transition cursor-pointer">
              Partner With Us
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={frame3}
            alt="partner illustration"
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
