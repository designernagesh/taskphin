export const InputTextTwoColumn = ({
  id,
  label,
  placeholderOne,
  placeholderTwo,
  required,
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block mb-1 text-sm font-medium text-dark">
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      <div className="flex">
        <input
          type="text"
          id={id}
          placeholder={placeholderOne}
          className="mr-3 border border-border text-sm text-dark placeholder-placeholder custom-placeholder rounded-5 block w-full py-2 px-3"
          required={required}
        />
        <input
          type="text"
          placeholder={placeholderTwo}
          className="ml-3 border border-border text-sm text-dark placeholder-placeholder custom-placeholder rounded-5 block w-full py-2 px-3"
          required={required}
        />
      </div>
    </div>
  );
};
