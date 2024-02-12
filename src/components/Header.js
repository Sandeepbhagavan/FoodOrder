import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
      <div id="head">
          <div id="logo">
              <img className="photo" alt="ok boss"src={LOGO_URL}/>
          </div>
          <div id="list">
              <ul>
                  <li>home</li>
                  <li>contact us</li>
                  <li>about us</li>
                  <li>cart</li>
              </ul>
          </div>
        
      </div>
    )
  }

  export default Header;