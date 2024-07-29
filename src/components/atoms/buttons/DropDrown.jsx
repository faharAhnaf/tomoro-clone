
import Button from './Button';
const DropDown = ({text}) => {
  return (
    <div className="dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="">
        <Button text={text}></Button>
      </div>
      <ul
        tabIndex={0}
        className={`dropdown-content menu bg-base-100 gap-2 z-[1] w-48 p-2 shadow ml-12`}
      >
        <li>
          <a>Terms of Services</a>
        </li>
        <li>
          <a>Privacy Policy</a>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;