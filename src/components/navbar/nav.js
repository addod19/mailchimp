import React from 'react';


const Nav = () => {
  return(
    <>
      <nav className="nav">
        <section className="leftLinks">
          <ul>
            <li>Products</li>
            <li>Resources</li>
            <li>Inspiration</li>
            <li>Pricing</li>
          </ul>
        </section>
        <section className="imageLink">
          {/* <img src={} alt="" /> */}
        </section>
        <section className="leftLinks">
          <ul>
            <li>Search Icon</li>
            <li>Login Button</li>
            <li>Sign up Button</li>
          </ul>
        </section>
      </nav>
    </>
  )
}

export default Nav;