import axios from "axios";
import { atom, selector } from "recoil";

export const response = atom({
    key: "response",
    default: selector({
        key: "responseSelector",
        get: async () => {
            const response = await axios.get("http://localhost:3000/notifications");
            return (response.data);
        }
    })
})

export const totalNotifications = selector({
    key: "totalNotifictions",
    get: ({ get }) => {
        const ans = get(response).network + get(response).notifications + get(response).messaging;
        return ans;
    }
})