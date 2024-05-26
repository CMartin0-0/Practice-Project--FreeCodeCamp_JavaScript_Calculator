import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value, id }) => {
  return (
    <Textfit id={id} className="screen" mode="single" max={50}>
      {value}
    </Textfit>
  );
};

export default Screen;


