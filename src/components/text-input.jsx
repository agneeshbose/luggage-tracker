const TextInput = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        {...props}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1"
      />
    </div>
  );
};

export default TextInput;
