const Button = (props = {}) => {
  const { text = '', disabled = false } = props;
  return <button disabled={disabled}>{text}</button>
};
