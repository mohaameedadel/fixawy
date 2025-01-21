import About from "../sections/About";
import HeaderShape from "../components/HeaderShape";
import Home from "../sections/Home";
import Navbar from "../components/Navbar";
import Services from "../sections/Services";
import HowItWork from "../sections/HowItWork";
import Marketing from "../sections/Marketing";

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
    </>
  );
}
