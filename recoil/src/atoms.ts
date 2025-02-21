import { atom } from "recoil";

export const networkNotification = atom({
    key: "networkNotification" , 
    default: 0
})

export const messageNotification = atom({
    key: "messageNotification" , 
    default: 12
})

export const notification = atom({
    key: "notification" , 
    default: 90
})

export const jobNotification = atom({
    key: "jobNotification" , 
    default: 14
})