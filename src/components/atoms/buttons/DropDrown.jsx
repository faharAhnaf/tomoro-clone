
import Button from './Button';
const DropDown = ({text}) => {
  return (
    <div className="h-[24px] font-normal text-[#222] leading-[24px] whitespace-nowrap align-middle  text-[20px] table-cell">
        <Button text={text}></Button>
      {/* <ul
        tabIndex={0}
        className={`dropdown-content menu bg-base-100 gap-2 z-[1] w-48 p-2 shadow ml-12`}
      >
        <li>
          <a>Terms of Services</a>
        </li>
        <li>
          <a>Privacy Policy</a>
        </li>
      </ul> */}
    </div>
  );
};

export default DropDown;