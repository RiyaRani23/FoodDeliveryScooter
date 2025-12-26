const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                  <img className="logo" 
                  src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg" alt = "Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>   
                </ul>
            </div>
        </div>
  );
};

export default Header;