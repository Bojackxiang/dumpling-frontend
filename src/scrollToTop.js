import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {animateScroll as scroll} from 'react-scroll'

export default function ScrollToTop() {
    const { pathname } = useLocation();
    
    useEffect(() => {
        console.log('----- scroll to top -----', pathname)
        scroll.scrollToTop()
    }, [pathname]);

    return null;
}
