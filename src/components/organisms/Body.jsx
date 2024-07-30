import TomoroBg from "../atoms/logos/TomoroBg";
import PLabel from "../atoms/labels/PLabel"
import H3Label from '../atoms/labels/H3Label';
import Tick from '../atoms/logos/Tick';

const Body = () => {
  return (
    <div className="box-border">
      <div className="h-[854px] w-[1440px] mx-auto relative ">
        <div className="top-60 left-40 absolute">
          <Tick></Tick>
          <H3Label text="HEY"></H3Label>
          <H3Label text="ENJOY YOUR COFFEE TIME"></H3Label>
          <PLabel text="100% ARABICA COFFEE" style="mt-[40px]"></PLabel>
          <PLabel text="FRESHLY ROASTED & BREWED" style="mb-[40px]"></PLabel>
          <H3Label text="@TOMORO"></H3Label>
        </div>
        <TomoroBg></TomoroBg>
      </div>
    </div>
  );
};

export default Body;
