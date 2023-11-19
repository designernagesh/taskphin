export const InputText = ({ id, label, placeholder, required }) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block mb-1 text-sm font-medium text-dark">
        {label}
        {required && <span className="text-error">*</span>}
      </label>

      <input
        type="text"
        id={id}
        className="border border-[#E6E6E6] text-sm text-dark placeholder-placeholder custom-placeholder rounded-5 block w-full py-2 px-3"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
