import React from 'react'
import foot from '../Footer/Footer.module.css'
const Footer = () => {
  return (
  <>
    <div className={foot.footer} id='footer'>
      <div className={foot.footerContent}> 
<div className={foot.footerContentLeft}>
<img src="/images/lazeez3.png" alt="" className={foot.imgLogo}/>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, expedita. Alias harum sequi animi cupiditate quam excepturi odio amet sint! Qui esse incidunt commodi! Officia aliquam enim nisi molestiae minus?</p>
<div className={foot.footerSocialIcons}>
<img src="/images/facebook.webp" alt="" />
<img src="/images/twitter.webp" alt="" />
<img src="/images/linked.png" alt="" />
</div>
</div>

<div className={foot.footerContentCenter}>
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
</ul>
</div>

<div className={foot.footerContentRight}>
<h2>GET IN TOUCH</h2>
<ul>
    <li>+1-212-456-6789</li>
    <li>contact@tomato.com</li>
</ul>
</div>

      </div>
      <hr />
      <p className={foot.footerCapyRight}>
Copyright 2024 © Tomato.com - all Right Reserved.
      </p>
    </div>
  </>
  )
}

export default Footer
