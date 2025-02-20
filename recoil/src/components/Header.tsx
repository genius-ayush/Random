import { BellRingIcon, BriefcaseBusiness, CircleUser, Home, MessageSquareMore, Users } from "lucide-react"
import { useState } from "react"

function Header() {
    const [myNetworkNoti, setMyNetworkNoti] = useState(0);
    const [jobsNoti, setJobsNoti] = useState(0);
    const [messages, setMessages] = useState(4);
    const [notifications, setNotifications] = useState(3);

    return (
        <div className="flex justify-center">
            <div className="flex justify-center gap-14 mt-10 bg-slate-300 w-2/5 h-20 items-center rounded-lg">

                {/* Home */}
                <div className="relative flex flex-col items-center">
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
                            {myNetworkNoti}
                        </div>
                    )}
                    </div>
                    <p className="text-sm">My Networks</p>
                </div>

                {/* Jobs */}
                <div className="relative flex flex-col items-center">
                    <div className="relative">
                    <BriefcaseBusiness className="w-8 h-8 hover:scale-110 transition-transform" />
                    {jobsNoti > 0 && (
                        <div className="absolute -top-2 right-0 transform translate-x-1/2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {jobsNoti}
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
                            {messages}
                        </div>
                    )}
                    </div>
                    <p className="text-sm">Messages</p>
                </div>

                {/* Notifications */}
                <div className="relative flex flex-col items-center">
                    <div className="relative">
                    <BellRingIcon className="w-8 h-8 hover:scale-110 transition-transform" />
                    {notifications > 0 && (
                        <div className="absolute -top-2 right-0 transform translate-x-1/2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {notifications}
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
                </div>

            </div>
        </div>
    );
}

export default Header;
