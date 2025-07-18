import gsap from "gsap";
import { ScrollTrigger , SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecondPage from "./components/secondPage";
import About from "./components/About";
import LastPage from "./components/LastPage";

gsap.registerPlugin(ScrollTrigger , SplitText)
function App (){
  return (
    <>
    <main className="bg-black   w-full flex flex-col items-center justify-between  ">
      <Navbar></Navbar>
      <Hero></Hero>
        <SecondPage/> 
        <About></About> 
       <LastPage></LastPage>
        </main>

    </>
  )
}

export default App ; 