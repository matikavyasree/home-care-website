export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-6 py-3 rounded-lg font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-[#E11D2E] hover:bg-red-700 text-white",
    secondary:
      "bg-[#1E3A8A] hover:bg-blue-900 text-white",
    outline:
      "border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white",
  };

  return (
    <button
      type={type}
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}