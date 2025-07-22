import gsap from "gsap";
import { ScrollTrigger , SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecondPage from "./components/secondPage";
import About from "./components/About";
import LastPage from "./components/LastPage";
import Loader from "./components/Loader";
import { useState , useEffect } from "react";

gsap.registerPlugin(ScrollTrigger , SplitText)
function App (){

  const [isLoading , setIsLoading] = useState(true); 

  useEffect(()=>{
    const handleLoad = () =>{
       setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }

  } , [])


  return (
    <>

    {
      (isLoading) ? ( <Loader/> ) : (
        <main className="bg-black    w-full flex flex-col items-center justify-between  ">
      
      <Navbar></Navbar>
      <Hero></Hero>
        <SecondPage/> 
        <About></About> 
       <LastPage></LastPage>
        </main>
      )
    }
    

    </>
  )
}

export default App ; 