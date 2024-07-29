import Button from "../atoms/buttons/Button";
import Logo from '../atoms/logos/Logo';
import DropDown from '../atoms/buttons/DropDrown';
import { Link } from "react-router-dom";
import LinkButton from '../molecules/LinkButton';

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-20 ">
      <div className="border-b-2 flex items-center pl-32">
        <div>
          <Logo></Logo>
        </div>
        <div className="flex justify-center">
          <LinkButton divStyle="pl-32" text="Home" route="/"></LinkButton>
          <LinkButton text="About" route="/about"></LinkButton>
          <LinkButton text="Download App"></LinkButton>
          <DropDown text="Terms and Conditons"></DropDown>
        </div>
        <div>
          <Button divStyle="pr-28" spanStyle="pl-72" text="English"></Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
