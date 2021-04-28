const Button = ({ counter, setCounter, operator }) => {
  const handleClick = () => {
    {
      operator === "+" ? setCounter(counter + 1) : setCounter(counter - 1);
    }
  };

  return (
    <button
      style={{
        visibility:
          (operator === "-" && counter === 0) ||
          (operator === "+" && counter === 10)
            ? "hidden"
            : "visible",
      }}
      className="operator"
      onClick={handleClick}
    >
      {operator}
    </button>
  );
};

export default Button;
