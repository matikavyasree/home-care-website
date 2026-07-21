import logo from "../../assets/images/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt="MR Home Care Nursing Services"
        className="h-32 w-auto"
      />
    </div>
  );
}