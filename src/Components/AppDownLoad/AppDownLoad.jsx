import React from 'react'
import appdown from '../AppDownLoad/AppDownLoad.module.css'
const AppDownLoad = () => {
  return (
 <>
 
 <div className={appdown.appDownLoad} id='appDownLoad'>
<p>For Better Experience Download <br/>Tomato App</p>
<div className={appdown.appDownLoadPlatforms}>
<img src="/images/play.png" alt="" />
<img src="/images/appp.png" alt="" />
</div>
 </div>
 
 </>
  )
}

export default AppDownLoad
