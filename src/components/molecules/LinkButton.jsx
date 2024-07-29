import { Link } from "react-router-dom";
import Button from "../atoms/buttons/Button";
const LinkButton = (props) => {
  const {route, text, divStyle, spanStyle} = props
  return (
    <div>
      <Link to={route}>
        <Button text={text} divStyle={divStyle} spanStyle={spanStyle}></Button>
      </Link>
    </div>
  );
};

export default LinkButton;
