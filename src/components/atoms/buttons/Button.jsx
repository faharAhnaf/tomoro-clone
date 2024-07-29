const Button = (props) => {
  const { text, spanStyle, divStyle = "pl-12" } = props;
  return (
    <div className={`py-9 ${divStyle}`}>
      <span
        className={`text-xl hover:cursor-pointer hover:text-orange-500 font-sans font-light ${spanStyle}`}
      >
        {text}
      </span>
    </div>
  );
};

export default Button;
