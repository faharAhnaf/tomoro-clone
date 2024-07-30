const PLabel = (props) => {
  const { text, style } = props;
  return (
    <p className={`text-[20px] ${style} font-medium text-[#222] leading-[24px] h-6 m-0`}>
      {text}
    </p>
  );
};
export default PLabel;
