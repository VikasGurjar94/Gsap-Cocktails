import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { Timeline } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(SplitText, ScrollTrigger);


function Hero(){

    const videoRef = useRef() ;


    useGSAP(()=>{
        const titleAnimate = new SplitText('.title',{type : 'chars , words'});
        const paraAnimate = new SplitText('.para',{type : 'lines'});

        gsap.from(paraAnimate.lines , {
            y:'100%' ,
            opacity : 0 ,
            stagger : 0.08,
            duration : 1 ,
            ease : 'expo.inOut'
        })

        gsap.from(titleAnimate.chars , {
            y : '100%' ,
            duration :1.7,
            stagger : 0.05 ,
            ease : 'expo.out'
        })

        const tl = gsap.timeline({
            scrollTrigger :{
                trigger : '#hero'   ,
                scrub : true ,
                start : 'top 12%' ,
                end : 'bottom top' ,
            }

        });

        tl.to('#left-leaf' ,{
            y : '-100%' ,
            
        },0)
        .to('#right-leaf' ,{
            y : 200 ,
        
        },0)

        const videoTimeline = gsap.timeline({
            scrollTrigger : {
                trigger : videoRef.current ,
                scrub : true , 
                   
                start : '30% 50%' ,
                end : 'bottom top',
                pin : true 
            }
        })
        
        videoRef.current.onloadedmetadata = () => {
	 videoTimeline.to(videoRef.current, {
		currentTime: videoRef.current.duration,
        y : -70,
        // scale : 0.85
       
	 },0);
      
	};

    },[]) ;


    return (
        <>
        <div id="hero" className="w-[100%] relative flex  justify-center items-center h-[88vh]   bg-black">
            <div className="  z-7  flex justify-between">
                {/* <img className=" absolute z-15 top-0 w-full" src="/images/noise.png" alt="noisepng" /> */}
            <img style={{marginTop : '18vh'}} id="left-leaf" className="  h-[500px] z-7 " src="\images\hero-left-leaf.png" alt="" />
            <div className="w-full  relative flex flex-col justify-between items-center ">

            <h1  className="text-white z-7    text-[330px] overflow-hidden leading-normal tracking-tight title ">MOJITO</h1>
            </div>
            <img id="right-leaf"  className="  z-7 h-[500px] " src="\images\hero-right-leaf.png" alt="rightLeafpng" />
            </div>
            <div className="w-full z-20 absolute top-[62vh] flex justify-around  gap-150  ">
                <div>
                    <p className="custom text-xl para ">
                    <span className="custom">Cool. Crisp. Classic. </span>
                    </p><br />
                    <h1 className="text-5xl text-[#E7D393] para">Sip The Spirit<br />Of Summer</h1>
                </div>
                <div className="w-[15%]   ">
                    <p className="para custom text-xl   ">
                        <span className="custom "> Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes. </span>
                       
                    </p>
                    <a className="custom underline   text-2xl " href="#cocktails">View Cocktails</a>
                </div>
            </div>
                <video muted playsInline ref={videoRef} className=" absolute top-[20vh]  bg-transparent z-5 w-[70vw]     " src="/videos/output.mp4"></video>
            
        </div>
        

        </>
    )
}

export default Hero ; 