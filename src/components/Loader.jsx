

function Loader (){
    return (
        <>
        <div className="w-full flex justify-center items-center h-[100vh] bg-black text-2xl text-white">
                <h1 className="custom animate-spin  text-2xl">
                    <div className="w-[70px] h-[70px] overflow-hidden z-11 bg-white rounded-[99px] relative flex justify-center fle-col items-center ">
                        <div className="absolute top-0 -z-10 bg-slate-600 h-[20px] w-[30px]">

                        </div>
                        <div className="w-[50px] h-[50px] bg-black rounded-[99px] ">

                        </div>

                    </div>
                </h1>
        </div>
        
        </>
    )
}

export default Loader ;