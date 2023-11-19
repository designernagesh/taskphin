export const RadioButtons = ({ labelName, name, options }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium text-dark"
      >
        {labelName}
      </label>
      <div className="flex">
        {options.map((option) => (
          <label key={option.value} className="flex items-center mr-4">
            <input
              type="radio"
              name={name}
              value={option.value}
              className="mr-1"
            />
            <span className="text-sm font-normal text-placeholder">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </>
  );
};
