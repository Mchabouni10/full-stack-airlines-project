import React from 'react';

function Header(props) {
  return (
    <header>
      <div className='HeaderP'>{props.txt}</div>
    </header>
  );
}

export default Header;