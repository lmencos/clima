import React from 'react';

const Header = ({ titulo }) => {
  return ( 
    <nav>
      <div className="nav-wrapper light-blue darken-2" >
        <a href="#!">{titulo}</a>
      </div>
    </nav>
   );
}
 
export default Header;