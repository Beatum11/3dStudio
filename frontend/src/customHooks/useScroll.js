import { scroller } from "react-scroll";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const useScroll = () => {

    // The useLocation() hook is a custom hook provided by the react-router-dom library. 
    // It allows you to access the current location object, 
    // which contains information about the current URL,
    // such as the pathname, search query, and hash fragment.
    const location = useLocation();

    useEffect(() => {

        const queryParams = new URLSearchParams(location.search);
        const section = queryParams.get('section');

        if (section) {
            scroller.scrollTo(section, {
                duration: 500,
                smooth: false,
          });
        }
        
    }, [location.search])

}

export default useScroll;