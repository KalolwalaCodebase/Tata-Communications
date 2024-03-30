import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer-parent'>
    <div className="footer-children">
        <li className="footer-list-items">Policies |</li>
        <li className="footer-list-items">Legal |</li>
        <li className="footer-list-items">Sitemap |</li>
        <li className="footer-list-items">Preferences |</li>
    </div>
    <div className="footer-children">
        <p className='fotter-paragraph'>©2024 Tata Communications. All rights reserved. TATA COMMUNICATIONS and TATA are trademarks of Tata Sons Private Limited.</p>
        </div>  
    </div>
  )
}

export default Footer
