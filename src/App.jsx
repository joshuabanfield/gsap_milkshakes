import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"
import MessageSection from "./sections/MessageSection";
import FlavourSection from "./sections/FlavourSection";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <MessageSection />
      <FlavourSection />
      {/* <div className="h-dvh"></div> */}
    </main>
  )
}

export default App