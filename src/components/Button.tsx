import "./Button.css";
type ButtonProps = {
  className: string;
  value: string | number;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  id: string;
}


export default function Button({ className, value, onClick, id }: ButtonProps){
  return (
    <button type='button' className={className} onClick={onClick} id={id}>
      {value}
    </button>
  );
};


