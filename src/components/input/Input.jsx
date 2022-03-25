export const Checkbox = ({ id, name, value }) => {
  return (
    <input
      name={name}
      id={id}
      type="checkbox"
      value={value}
      className="checkbox"
    />
  );
};

export const RadioButton = ({ name, value }) => {
  return (
    <input
      name={name}
      type="radio"
      value={value}
      className="radio margin-r-5"
    />
  );
};
