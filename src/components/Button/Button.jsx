const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`} value={children}>
      {children}
    </button>
  );
};

export default Button;
