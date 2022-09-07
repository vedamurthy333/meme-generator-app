import React from 'react'

function Header() {
    function handleOnMouseOver()
    {
        console.log("onMouse")
    }
  return (
    <div>
        <header className="header">
        <ul className="head">
          <li><img src="meme.jpg" width="50px" onMouseOver={handleOnMouseOver}/></li>
          <li><p>Meme Generator</p></li>
        </ul>
      </header>
    </div>
  )
}

export default Header