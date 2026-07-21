export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styles = {
    primary:
      "bg-[#E11D2E] text-white hover:bg-red-700 focus:ring-red-400",

    secondary:
      "bg-[#1E3A8A] text-white hover:bg-blue-900 focus:ring-blue-400",

    outline:
      "border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white focus:ring-blue-400",
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