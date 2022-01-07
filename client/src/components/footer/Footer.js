import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
function Footer() {
  return (
  <div className="footerContainer">
    <div className='firstCol' >
        <span>Get connected with us on social networks:</span>
      <div className='iconDiv'>
        
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-google"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
      </div>
    </div>
    <div className="copyright">
      <Link className="text-reset fw-bold" to="/"> PUMP App</Link>
    </div>
  </div>
    )}

export default Footer
