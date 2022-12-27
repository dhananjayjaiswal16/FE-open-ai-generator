import React from 'react'

const Navbar = () => {
  return (
    <>
      <header>
        <div class="navbar">
          <div class="logo">
            <h2>OpenAI Image Genrator</h2>
          </div>
          <div class="nav-links">
            <ul>
              <li>
                <a href="https://beta.openai.com/docs" target="_blank">
                  OpenAI API Docs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar;
