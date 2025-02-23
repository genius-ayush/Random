import { useEffect, useState } from "react";

export function useFetch(url : string) {

    const [post, setPost] = useState({});
    const [loading , setLoading] = useState(true) ; 

    const getPosts = async () => {
        setLoading(true) ; 
        const response = await fetch(url)
        const json = await response.json();

        setPost(json);
        setLoading(false); 
    }

    useEffect(() => {

        getPosts();
    }, [url])

    return {post , loading}
}