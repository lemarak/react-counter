const Reset = ({ counter, setCounter }) => {
  return (
    <button
      className="reset"
      onClick={() => {
        setCounter(0);
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
