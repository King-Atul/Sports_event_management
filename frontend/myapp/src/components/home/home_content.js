import React from "react";
import {AiOutlineLogin} from 'react-icons/ai'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {HiFlag} from 'react-icons/hi'
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';
// import { sports_info } from "../admin_dashboard/sports_info";
import javelin_pic from '../../images/javelin-throw.png'
import tennis from '../../images/tennis.png'
import running from '../../images/running.png'


export default function HomeBody()
{
    const navigate = useNavigate()

    return(
        <React.StrictMode>
        {/* <div className="w-full h-max bg-[#bcaaa4]  py-2 mt-14"> */}
        <div className="w-full h-max bg-gradient-to-r from-cyan-500 to-blue-500 py-2 mt-14">
            <div className="container mx-auto h-[720px]">
                {/* <div className="flex flex-row items-center justify-center mt-16">
                    <input type="text" placeholder="Search using complaint number" 
                        className="w-4/5 h-12 shadow-sm shadow-white rounded-md text-black placeholder:text-gray-400 font-[Poppins] px-4 outline-none font-medium">
                    </input>
                </div> */}
                <div className="flex flex-row items-center justify-center mt-24 h-max p-4 gap-12">
                    <div onClick={()=>{navigate('/sports_info')}} className="flex flex-col justify-center items-center w-1/4 p-4 h-max bg-[#bbdefb] rounded-xl shadow-md hover:scale-105 duration-200 gap-8 divide-y-[0.6px] cursor-pointer  min-h-[170px]">
                        <div className="flex flex-row justify-center items-center gap-4">
                            <h1 className="text-black font-[Poppins] font-semibold text-lg">Javelin Throw</h1>
                            {/* <BsFillPersonPlusFill className="text-white text-3xl"/> */}
                        </div>
                        <div><img src={javelin_pic} width="50px" /></div>
                        <h1 className="text-black font-[Poppins] font-semibold text-sm py-4">Hurl the javelin into the infinite space of the future</h1>
                    </div>
                    <div onClick={()=>{navigate('/sports_info')}} className="flex flex-col justify-center items-center w-1/4 p-4 h-max bg-[#bbdefb] rounded-xl shadow-md hover:scale-105 duration-200 gap-8 divide-y-[0.6px] cursor-pointer  min-h-[170px]">
                        <div className="flex flex-row justify-center items-center gap-4">
                            <h1 className="text-black font-[Poppins] font-semibold text-lg">Lawn Tennis</h1>
                            {/* <AiOutlineLogin className="text-white text-3xl"/> */}
                        </div>
                        <div><img src={tennis} width="50px" /></div>
                        <h1 className="text-black font-[Poppins] font-semibold text-sm py-4">Life is like a game of tennis; the player who serves well seldom loses.</h1>
                    </div>
                    <div onClick={()=>{navigate('/sports_info')}} className="flex flex-col justify-center items-center w-1/4 p-4 h-max bg-[#bbdefb] rounded-xl shadow-md hover:scale-105 duration-200 gap-8 divide-y-[0.6px] cursor-pointer  min-h-[170px]">
                        <div className="flex flex-row justify-center items-center gap-4">
                            <h1 className="text-black font-[Poppins] font-semibold text-lg">Track Race</h1>
                            {/* <HiFlag className="text-white text-3xl"/> */}
                        </div>
                        <div><img src={running} width="50px" /></div>
                        <h1 className="text-black font-[Poppins] font-semibold text-sm py-4">Why race? The need to be tested, perhaps; the need to take risks; and the chance to be number one.</h1>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center mt-24 h-max p-4 gap-8">
                    {/* <div className="flex flex-col justify-center items-center w-1/4 p-4 border-2 border-white h-max gap-8 bg-gray-300 text-center rounded-lg shadow-md hover:scale-105 duration-200">
                        <h1 className="text-black font-[Poppins] text-2xl font-semibold">Total Complaints</h1>
                        <div className="w-1/4">
                            <CountUp start={0} end={105} delay={1} duration={5}>
                            {({ countUpRef }) => (
                                <div className="text-black font-[Poppins] text-3xl font-semibold">
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                        </div>
                    </div> */}

                    {/* <div className="flex flex-col justify-center items-center w-1/4 p-4 border-2 border-white h-max gap-8 bg-green-100 text-center rounded-lg shadow-md hover:scale-105 duration-200">
                        <h1 className="text-green-900 font-[Poppins] text-2xl font-semibold">Resolved Complaints</h1>
                        <div className="w-1/4">
                            <CountUp start={0} end={87} delay={1} duration={5}>
                            {({ countUpRef }) => (
                                <div className="text-green-900 font-[Poppins] text-3xl font-semibold">
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                        </div>
                    </div> */}

                    {/* <div className="flex flex-col justify-center items-center w-1/4 p-4 border-2 border-white h-max gap-8 bg-red-100 text-center rounded-lg shadow-md hover:scale-105 duration-200">
                        <h1 className="text-black font-[Poppins] text-2xl font-semibold">Total Players</h1>
                        <div className="w-1/4">
                            <CountUp start={0} end={18} delay={1} duration={1}>
                            {({ countUpRef }) => (
                                <div className="text-black font-[Poppins] text-3xl font-semibold">
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
        </React.StrictMode>
    )
}