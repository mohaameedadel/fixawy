import About from "../sections/About";
import HeaderShape from "../components/HeaderShape";
import Home from "../sections/Home";
import Navbar from "../components/Navbar";
import Services from "../sections/Services";
import HowItWork from "../sections/HowItWork";
import Marketing from "../sections/Marketing";
import FinancialInstallment from "../sections/FinancialInstallment";
import Portfolio from "../sections/Portfolio";
import Partners from "../sections/Partners";
import Testimonials from "../sections/Testimonials";
import Blog from "../sections/Blog";
import Pricing from "../sections/Pricing";
import ContactUs from "../sections/ContactUs";
import Footer from "../sections/Footer";

export default function LandingPage() {
  return (
    <>
      <HeaderShape />
      <Navbar />
      <Home />
      <About />
      <Services />
      <HowItWork />
      <Marketing />
      <FinancialInstallment />
      <Portfolio />
      <Partners />
      <Testimonials />
      <Blog />
      <Pricing />
      <ContactUs />
      <Footer />
    </>
  );
}
