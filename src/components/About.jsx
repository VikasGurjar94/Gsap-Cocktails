import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { Timeline } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";


function About() {

    useGSAP(()=>{

       
        
         const animateLines = new SplitText( '.animateLines' ,{ type : 'lines'} );
         gsap.from(animateLines.lines , {
            y : '100%' ,
            opacity : 0 ,
            duration : 1.7 ,
            stagger : 0.05 ,
            ease : 'expo.out'  

         })

         gsap.from('img' , {
            y : '100%' ,
            opacity : 0 ,
            duration : 0.5 ,
            ease : 'expo.out' ,
            stagger : 0.05 ,
         })

         
    })


    return (
        <>
            <div  id="about" className="  w-full bg-black">
                <div style={{ marginTop: '15vh' }} className="w-full h-[30vh] gap-[20vw]   bg-black flex justify-around items-center ">
                    <div className="  flex flex-col w-[20vw] justify-around gap-10 items-baseline ">
                        <button style={{ padding: '1vw 2vw' }} className="rounded-4xl text-xl custom bg-white text-black">Best Cocktails</button>
                        <h1 className="text-4xl animateLines">Where every detail matters—from muddle to garnish</h1>

                    </div>

                    <div className="  flex flex-col w-[30vw] justify-around gap-10 items-baseline-last ">
                        <h1 className="text-xl animateLines custom">Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable. </h1>
                        <div style={{marginTop : `15px`}} className="w-full flex justify-between">
                            <div className="w-[50%] text-3xl">⭐⭐⭐⭐⭐ <br /><span style={{marginLeft : '20px'}} className="custom text-5xl"> 4 /</span><span className="custom">5</span></div>
                            <div className="w-[50%]   flex">
                                <img className="h-[32px]  " src="/images/profile1.png" alt="" />
                                <img className="h-[32px] " src="/images/profile2.png" alt="" />
                                <img className="h-[32px]" src="/images/profile3.png" alt="" />
                                <img className="h-[32px]" src="/images/profile4.png" alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div  className="w-full grid grid-rows-2 grid-cols-4 gap-5   abtpage ">
                    <img className="rounded-2xl object-cover row-start-1 h-full w-full " src="/images/abt1.png" alt="" />
                    <img className="rounded-2xl object-cover col-start-3 h-full w-full col-end-5  " src="/images/abt2.png" alt="" />
                    <img className="rounded-2xl object-cover  row-start-2 h-full w-full row-end-3 col-start-1 col-end-4 " src="/images/abt3.png" alt="" />
                    <img className="rounded-2xl object-cover  row-start-2 h-full w-full row-end-3 col-start-4 col-end-5  " src="/images/abt4.png" alt="" />
                    <img className="rounded-2xl object-cover row-start-1 h-full w-full col-start-2" src="/images/abt5.png" alt="" />
                </div>

            </div>
        </>
    )
}

export default About;