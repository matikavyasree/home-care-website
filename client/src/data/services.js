import {
  FaUserNurse,
  FaHeartbeat,
  FaWheelchair,
  FaProcedures,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Home Nursing",
    description:
      "Professional nursing care at your home by experienced and qualified nurses.",
    icon: FaUserNurse,
  },
  {
    id: 2,
    title: "Elder Care",
    description:
      "Compassionate care and support for elderly patients with daily assistance.",
    icon: FaHeartbeat,
  },
  {
    id: 3,
    title: "Patient Care",
    description:
      "Dedicated patient attendants for post-operative and long-term recovery.",
    icon: FaWheelchair,
  },
  {
    id: 4,
    title: "ICU Care",
    description:
      "Advanced ICU-level nursing services in the comfort of your home.",
    icon: FaProcedures,
  },
];

export default services;