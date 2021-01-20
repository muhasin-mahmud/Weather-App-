import React,{useRef, useEffect} from 'react'

const Footer = () => {
    const footerData = useRef();

    useEffect(()=> {
        footerData.current = new Date().getFullYear()
    },[])

    return (
        <div className="footer">
            <footer>
               <p>  <span> &copy;</span> Muhasin {footerData.current} </p>
            
            </footer>
        </div>
    )
}

export default Footer
