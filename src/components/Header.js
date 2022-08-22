import React from 'react'

export default function Header() {
  return (
    <header>
        <div id='mylogo'>
            <img id='logopic' src={process.env.PUBLIC_URL+'/images/memelogo.png'}/>
            <h3 id='logoname'>MemeGenerator</h3>
        </div>
        <div id='myname'>nalugala-vc</div>
    </header>
  )
}
