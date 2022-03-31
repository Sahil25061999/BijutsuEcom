export const Checkbox = ({ id, name, value, onChange }) => {
  return (
    <input
      name={name}
      id={id}
      type="checkbox"
      value={value}
      onChange={onChange}
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
