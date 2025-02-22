import { BellRingIcon, BriefcaseBusiness, CircleUser, Home, MessageSquareMore, Users } from "lucide-react"
// import {  useRecoilValue, useRecoilValueLoadable, useSetRecoilState,  } from "recoil";
// import { jobNotification, messageNotification, networkNotification, notification, totalNotifications } from "../atoms";
// import Me from "./Me";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { useRecoilState  } from "recoil";
import { response } from "../atoms";



function Header() {
    
    
    
    const [resp] = useRecoilState(response) ; 

    return (
        <div className="flex justify-center w-full h-screen bg-gray-400">
            <div className="flex justify-center gap-14 mt-10  w-2/5 h-20 items-center rounded-lg">

                {/* Home */}
                <div className="relative flex flex-col items-center" >
                    <div className="relative">
                    <Home className="w-8 h-8 hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-sm">Home</p>
                </div>

                {/* My Networks */}
                <div className="relative flex flex-col items-center">
                    <div className="relative">
                    <Users className="w-8 h-8 hover:scale-110 transition-transform" />
                    {resp.network > 0 && (
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {resp.network >=100 ? "99+" : resp.network}
                        </div>
                    )}
                    </div>
                    <p className="text-sm">MyNetworks</p>
                </div>

                {/* Jobs */}
                <div className="relative flex flex-col items-center">
                    <div className="relative">
                    <BriefcaseBusiness className="w-8 h-8 hover:scale-110 transition-transform" />
                    {resp.notifications > 0 && (
                        <div className="absolute -top-2 right-0 transform translate-x-1/2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {resp.notifications >= 100 ? "99+" : resp.notifications}
                        </div>
                    )}
                    </div>
                    <p className="text-sm">Jobs</p>
                </div>

                {/* Messages */}
                <div className="relative flex flex-col items-center">
                    <div className="relative">
                    <MessageSquareMore className="w-8 h-8 hover:scale-110 transition-transform" />
                    {resp.messaging > 0 && (
                        <div className="absolute -top-2 right-0 transform translate-x-1/2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {resp.messaging >=100 ? "99+" : resp.messaging}
                        </div>
                    )}
                    </div>
                    <p className="text-sm">Messages</p>
                </div>

                {/* Notifications */}
                <div className="relative flex flex-col items-center">
                    <div className="relative">
                    <BellRingIcon className="w-8 h-8 hover:scale-110 transition-transform" />
                    {resp.network > 0 && (
                        <div className="absolute -top-2 right-0 transform translate-x-1/2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {resp.network >= 100 ? "99+" : resp.network}
                        </div>
                    )}
                    </div>
                    <p className="text-sm">Notifications</p>
                </div>

                {/* Me */}
                <div className="relative flex flex-col items-center">
                    <div className="relative">
                    <CircleUser className="w-8 h-8 hover:scale-110 transition-transform" />
                    
                    </div>
                    <p className="text-sm">Me</p>       
                    {/* <p>{totalNotification}</p>  */}
                </div>
                

            </div>
        </div>
    );
}

export default Header;
