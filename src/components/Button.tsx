import { EventHandler, ReactNode } from 'react';

const Button = (props: {
  styles: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}) => {
  return (
    <button
      className={props.styles}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
