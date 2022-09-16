import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category, amount) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category, amount);
        //cambiamos el estado de images pasando lo que me devuelve getGIFs
        setTimeout(() => {

            setIsLoading(false);
            setImages(newImages);
        }, 1000);

    };

    useEffect(() => {
        getImages();
    }, []);
    return {
        images,
        isLoading
    }
}

export default useFetchGifs