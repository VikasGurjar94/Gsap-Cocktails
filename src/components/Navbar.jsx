 import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";



function Navbar(){

    useGSAP(()=>{
        const navTimeline  = gsap.timeline({
            scrollTrigger : {
                trigger : 'nav' ,
                scrub : true , 
                start : 'top top' ,
                
            }
        });

        navTimeline.fromTo('nav' , {
            backgroundColor : 'transparent' ,
           
        } , {
            
            backgroundColor : '#00000050'  ,
            duration : 1,
            backdropFilter: 'blur(10px)' ,
            ease : 'none'
        
           
        })

    },[])

    return (
        <>
        <nav className="h-[12vh] sticky gap-50 top-0 w-full z-100 bg-black flex justify-around items-center  ">
            <div className="text-[30px]  font-normal flex">
                <img className="h-[32px] w-[32px]  " src="/images/logo.png" alt="Logo" />
                <a href="#Home"> Velvet Pour</a>
                </div>
            <div className="   flex justify-end text-[16px] font-medium w-[50%] ">
                <ul  className="flex custom  justify-end gap-[48px] ">
                    <li className="custom">Cocktails</li>
                    <li className="custom">Contact</li>
                    <li className="custom">About Us</li>
                    <li className="custom">The Art</li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Navbar ; 