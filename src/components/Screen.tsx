import { Textfit } from "react-textfit";
import "./Screen.css";
type ScreenProps = {
  value: string | number;
  id: string;
}

const Screen = ({ value, id }: ScreenProps) => {
  return (
    <Textfit id={id} className="screen" mode="single" max={50}>
      {value}
    </Textfit>
  );
};

export default Screen;


