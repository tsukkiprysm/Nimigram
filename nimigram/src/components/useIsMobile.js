import { useState, useEffect} from "react";

export default function useIsMobile(breakpoint = 640) {
    /*isMobile é do tipo boolean, podendo retornar true ou false pare depois definir onde a componente do
    <ProfileButton/> vai aparecer (dentro da nav para desktop ou no topo do layout para mobile)*/
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

    //useEffect para executar sempre que o breakpoint mudar
    useEffect(() => {
        const handleWindowResize = () => setIsMobile(window.innerWidth <= breakpoint);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, [breakpoint]);

    return isMobile;
}