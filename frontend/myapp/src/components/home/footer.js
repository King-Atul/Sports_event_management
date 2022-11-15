import React from "react";
import india_img from '../../images/india.png'
import afl from '../../images/afl.jpg'

export default function Footer()
{
    return(
        <div className="w-full h-max bg-[#171717] py-2 shadow-md shadow-blue-200 bottom-0">
            <div className="container mx-auto">
                <div className="flex flex-row justify-center items-center gap-24 p-8">
                    <div className="flex flex-col justify-center items-center hover:cursor-pointer">
                        <h1 className="text-white font-[Poppins] py-2  underline-offset-8 underline-white text-xl">Contact Us</h1>
                        <p className="text-white font-[Poppins] py-2  underline-offset-8 underline-white">
                        <ol type="1">
                            <li>Mo: 123567890</li>
                            <li>Email: sports_organization_name@gmail.com</li>
                            <li>Complete Address</li>
                            </ol>
                        </p>
                        {/* <h1 className="text-white font-[Poppins] py-2 hover:underline underline-offset-8 underline-white">Contact Us</h1> */}
                        {/* <h1 className="text-white font-[Poppins] py-2 hover:underline underline-offset-8 underline-white">About Us</h1> */}
                    </div>
                    <div className="flex flex-col justify-center items-center hover:cursor-pointer">
                        {/* <h1 className="text-white font-[Poppins] py-2 hover:underline underline-offset-8 underline-white">Complaints</h1> */}
                        <h1 className="text-white font-[Poppins] py-2  underline-offset-8 underline-white text-xl">About Us</h1>
                        {/* <h1 className="text-white font-[Poppins] py-2 hover:underline underline-offset-8 underline-white">Privacy Policy</h1> */}
                    </div>
                    <div className="flex flex-col justify-center items-center hover:cursor-pointer">
                        <h1 className="text-white font-[Poppins] py-2  underline-offset-8 underline-white text-xl">Affilated To</h1>
                            <div style={{display:"flex", padding:"10px"}}>
                                <img src={india_img} width="100" height="100" />
                                <h1>ons</h1>
                                <img src={afl} width="100" height="100"/>
                            </div>
                        
                        {/* <h1 className="text-white font-[Poppins] py-2 hover:underline underline-offset-8 underline-white">Contact Us</h1> */}
                        {/* <h1 className="text-white font-[Poppins] py-2 hover:underline underline-offset-8 underline-white">About Us</h1> */}
                    </div>
                </div>
            </div>
        </div>
    )
}