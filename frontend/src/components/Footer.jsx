import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <p>Copyright ⓒ {year} by Emre BALCI</p>
    </footer>
  );
}

export default Footer