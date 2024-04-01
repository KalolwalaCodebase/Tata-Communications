import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./Cardimg.css"
const Cardimg = ({activeTab,heading,cardWidth,hoverCardColor}) => {
       const [isHovered, setIsHovered] = useState(false);
    
       const handleMouseOver = () => {
         setIsHovered(true);
       };
     
       const handleMouseOut = () => {
         setIsHovered(false);
       };
       const formatHeadingForLink = (heading) => {
        return heading.replace(/\s+/g, '-').toLowerCase();
      };
       //const cardsColorIs = isHovered ? hoverCardColor : cardsColor;
       return (
         <div onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut} className='card-container-second' style={{width:`${100/cardWidth}%`}}>
              <div className="card-second-q" style={{background:`url(${heading[1]})`}}>
             </div>
             <div className="rectangle-overlay">
              <div className="heading-rectangle-container-specail">
              <h2 className='CardHeading-second-specail poppins-light'>{heading[0]}</h2>
                 <Link className='read-more-btn-second poppins-regular'to={`/${activeTab}/${formatHeadingForLink(heading[0])}`}>READ MORE {">"}</Link> 
              </div>
             </div>
         </div>
       )
}

export default Cardimg
