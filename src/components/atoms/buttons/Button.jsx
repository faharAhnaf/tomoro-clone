import { Link } from "react-router-dom";
const Button = ({text, spanStyle, divStyle = "pl-[65px]", route}) => {
  return (
    <div
      className={`${divStyle} h-[24px] font-normal text-[#222] leading-[24px] whitespace-nowrap align-middle  text-[20px] table-cell`}
    >
      <Link to={route}>
        <span className={` hover:cursor-pointer ${spanStyle}`}>{text}</span>
      </Link>
    </div>
  );
};

export default Button;
