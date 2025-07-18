import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

function SecondPage() {

    const list1 = [
        {
            bigTitle: 'Chapel Hill Shiraz',
            price: '10',
            smallTitle1: 'AU',
            smallTitle2: 'Battle',
        },

        {
            bigTitle: 'Canten Malbee',
            price: '49',
            smallTitle1: 'AU',
            smallTitle2: 'Battle',
        },

        {
            bigTitle: 'Rhine Pale Ale',
            price: '20',
            smallTitle1: 'CA',
            smallTitle2: '750 ml',
        },
        {
            bigTitle: 'Irishh Guiness',
            price: '29',
            smallTitle1: 'IE',
            smallTitle2: '600 ml',
        }
    ]


    const list2 = [
        {
            bigTitle: 'Tropical Bloom',
            price: '10',
            smallTitle1: 'US',
            smallTitle2: 'Battle',
        },

        {
            bigTitle: 'Passion Fruit Mint',
            price: '49',
            smallTitle1: 'US',
            smallTitle2: 'Battle',
        },

        {
            bigTitle: 'Citrus Glow',
            price: '20',
            smallTitle1: 'CA',
            smallTitle2: '750 ml',
        },
        {
            bigTitle: 'Lavender Fizz',
            price: '29',
            smallTitle1: 'IE',
            smallTitle2: '600 ml',
        }
    ]


    useGSAP(() =>{
        
        const tl = gsap.timeline({
            scrollTrigger : {
                trigger : '#secondPage' ,
                scrub : true ,
                start : 'top 20%' ,
                end : 'bottom bottom',
            }
        })
       
        tl.fromTo('#second-left-leaf' , {
            x : '-100%',
            y : '100%',
        } ,{
            x : '0%',
            y : '0%',
            
        })
        .fromTo('#second-right-leaf' , {
            x : '100%',
            y : '100%',
        } ,{
            x : '0%' ,
            y : '0%' ,
        })

    } , [])



    return (
        <>  
            <div id="secondPage" className=" h-[100vh]  relative  w-full bg-black flex justify-around gap-100 items-center">
                <div className="   h-fit z-20 w-fit flex flex-col justify-center items-baseline">
                    <p className="custom text-2xl  ">Most Popular Cocktails</p>
                    <ul className=" ">

                        {list1.map((item, idx) => {
                            return (
                                <li key={idx} style={{marginBottom : `25px`}} className="w-full flex justify-between">
                                    <div><h1 className="text-3xl text-[#E7D393]">{item.bigTitle}
                                        <br />
                                        <span className="custom text-white text-[18px]">{item.smallTitle1} | </span>  <span className="custom text-white text-[18px]">{item.smallTitle2}</span>
                                        </h1></div>
                                    <div> <span style={{marginLeft : '50px'}} className="custom text-2xl">-${item.price}</span></div>

                                </li>

                            )
                        })}
                    </ul>
                    


                </div>

                <div className=" z-20  h-fit w-fit flex flex-col justify-center items-baseline">
                    <p className="custom text-2xl  ">Most Loved Mocktails</p>
                    <ul className=" ">

                        {list2.map((item, idx) => {
                            return (
                                <li key={idx} style={{marginBottom : `25px`}} className="w-full  flex justify-between  -amber-300">
                                    <div><h1  className="text-3xl text-[#E7D393]">{item.bigTitle}
                                        <br />
                                        <span className="custom text-white text-[18px]">{item.smallTitle1} | </span>  <span className="custom text-white text-[18px]">{item.smallTitle2}</span>
                                        </h1></div>
                                    <div> <span style={{marginLeft : '50px'}} className="custom text-2xl">-${item.price}</span></div>

                                </li>

                            )
                        })}
                    </ul>
                    


                </div>

                <img id="second-left-leaf" className="absolute z-18 left-0 bottom-0 " src="/images/cocktail-left-leaf.png" />
                <img id="second-right-leaf" className="absolute z-18  right-0 bottom-0 " src="/images/cocktail-right-leaf.png" />

            </div>
        </>
    )
}

export default SecondPage; 