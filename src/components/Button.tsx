const Button = (props: any) => {
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
