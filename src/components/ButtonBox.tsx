import "./ButtonBox.css";

type ButtonBoxProps = {
  children: React.ReactNode;
}

const ButtonBox = ({ children }: ButtonBoxProps) => {
  return <div className="buttonBox">{children}</div>;
};

export default ButtonBox;
