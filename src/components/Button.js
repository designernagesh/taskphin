export const Button = ({ text, className }) => {
  return (
    <button
      className={`inline-flex justify-center rounded-md text-base py-2 px-4 ${className}`}
    >
      {text}
    </button>
  );
};
