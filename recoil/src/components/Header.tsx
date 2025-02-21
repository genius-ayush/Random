import { BellRingIcon, BriefcaseBusiness, Home, MessageSquareMore, Users } from "lucide-react"
import {  useRecoilValue, useRecoilValueLoadable,  } from "recoil";
import { jobNotification, messageNotification, networkNotification, notification } from "../atoms";
import Me from "./Me";

function Header() {
    
    const myNetworkNoti = useRecoilValue(networkNotification) ; 
    const jobsNoti = useRecoilValue(jobNotification) ; 
    const messages = useRecoilValue(messageNotification) ; 
    // const notifications = useRecoilValue(notification) ; 
    const notifications = useRecoilValueLoadable(notification) ; 

    // const  setNotifications = useSetRecoilState(notification) ; 

    return (
        <div className="flex justify-center">
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
                    {myNetworkNoti > 0 && (
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {myNetworkNoti >=100 ? "99+" : myNetworkNoti}
                        </div>
                    )}
                    </div>
                    <p className="text-sm">MyNetworks</p>
                </div>

                {/* Jobs */}
                <div className="relative flex flex-col items-center">
                    <div className="relative">
                    <BriefcaseBusiness className="w-8 h-8 hover:scale-110 transition-transform" />
                    {jobsNoti > 0 && (
                        <div className="absolute -top-2 right-0 transform translate-x-1/2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {jobsNoti >= 100 ? "99+" : jobsNoti}
                        </div>
                    )}
                    </div>
                    <p className="text-sm">Jobs</p>
                </div>

                {/* Messages */}
                <div className="relative flex flex-col items-center">
                    <div className="relative">
                    <MessageSquareMore className="w-8 h-8 hover:scale-110 transition-transform" />
                    {messages > 0 && (
                        <div className="absolute -top-2 right-0 transform translate-x-1/2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {messages >=100 ? "99+" : messages}
                        </div>
                    )}
                    </div>
                    <p className="text-sm">Messages</p>
                </div>

                {/* Notifications */}
                <div className="relative flex flex-col items-center">
                    <div className="relative">
                    <BellRingIcon className="w-8 h-8 hover:scale-110 transition-transform" />
                    {notifications.contents > 0 && (
                        <div className="absolute -top-2 right-0 transform translate-x-1/2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {notifications.contents >= 100 ? "99+" : notifications.contents}
                        </div>
                    )}
                    </div>
                    <p className="text-sm">Notifications</p>
                </div>

                {/* Me */}
                <Me/>
                

            </div>
        </div>
    );
}

export default Header;
