import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { Timeline } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(SplitText, ScrollTrigger);

function LastPage() {

	useGSAP(() => {
		const lastTimeline = gsap.timeline({
			scrollTrigger : {
				trigger : '#last-page',
				scrub : true,
				start : 'top 12%',
			}
		})

		lastTimeline.from('#left', {
			y : '100' ,
			x : '-100',
		},0)
		.from('#right', {
			y : '-50' ,
			x : '70',
		},0)
	})

	return (
		<div id="last-page" style={{paddingTop : '40vh'}} className="lastPage relative  h-[80vh] w-full flex-col items-center justify-baseline">
			<h1 className="text-8xl text-center ">Where To Find Us</h1>
			<br />
			<h1  className="text-center custom text-2xl  ">Visit Our Store</h1>
			<br />
			<h1  className="text-center text-xl  ">IIIT Vadodara ICD </h1>
			<br />
			<h1 style={{marginTop : '4vh'}} className="text-center text-2xl custom  ">Contact Us</h1>
			<br />
			<h1 className="text-center text-xl custom  ">91+ 9638953766</h1>
			<br />
			
			<br />
			<h1 className="text-center text-3xl   ">SOCIALS</h1>
			<div className="flex justify-center items-center gap-10 mt-10">
				<a href="#home"><img src="/images/x.png" alt="" /></a>
				<a href="#home"><img src="/images/insta.png" alt="" /></a>
				<a href="#home"><img src="/images/fb.png" alt="" /></a>
			</div>
			<img id="left" className="absolute bottom-0 left-0  z-50 overflow-hidden  " src="/images/footer-left-leaf.png" alt="" />
			<img id="right" className="absolute top-0 right-0 z-10 overflow-hidden" src="/images/footer-right-leaf.png" alt="" />
		</div>
	)
}

export default LastPage;
