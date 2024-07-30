import Button from "../atoms/buttons/Button";
import Logo from "../atoms/logos/Logo";
import DropDown from "../atoms/buttons/DropDrown";

const Header = () => {
  return (
    <>
      <div className="fixed w-[100%] top-0 left-[50%] translate-x-[-50%] z-[15] ">
        <div className="w-[1440px] h-[100px] bg-white table whitespace-nowrap pl-[110px] border-b-[1px] border-solid border-[#f3f3f3] mx-auto rounded-none">
          <div className="table-row">
            <Logo></Logo>
            <Button divStyle="pl-[138px]" text="Home" route="/"></Button>
            <Button text="About" route="/about"></Button>
            <Button text="Download App"></Button>
            <DropDown text="Terms and Conditons"></DropDown>
            <Button divStyle="pr-28" spanStyle="pl-72" text="English"></Button>
          </div>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </>
  );
};

export default Header;
