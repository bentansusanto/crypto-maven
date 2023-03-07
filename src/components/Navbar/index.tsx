import { Link } from "react-router-dom";
import Logo from '../../assets/Logo-cryptomaven.svg'

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center space-x-5 py-5 px-20">
        <img src={Logo} alt="logo-crypto-maven" className="w-12"/>
        <ul className="flex space-x-5">
          <li>
            <Link to={"/"}>Homepage</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
