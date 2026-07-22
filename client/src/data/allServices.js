import nursingCare from "../assets/icons/nursing-care.png";
import travelAttenders from "../assets/icons/travel-attenders.png";
import elderCare from "../assets/icons/elder-care.png";
import icuCare from "../assets/icons/icu-care.png";
import careTakers from "../assets/icons/care-takers.png";
import doctorConsultation from "../assets/icons/doctor-consultation.png";
import firstAid from "../assets/icons/first-aid.png";
import physiotherapy from "../assets/icons/physiotherapy.png";
import bloodTest from "../assets/icons/blood-test.png";

const allServices = [
  {
    id: 1,
    title: "Nursing Care",
    icon: nursingCare,
    color: "red",
    description:
      "Professional nursing care at home with qualified and compassionate nurses.",
    benefits: [
      "Qualified Nurses",
      "Medicine Administration",
      "Wound Dressing",
      "24/7 Nursing Support",
    ],
  },
  {
    id: 2,
    title: "Travel Attenders",
    icon: travelAttenders,
    color: "orange",
    description:
      "Experienced attenders for safe patient transportation and hospital visits.",
    benefits: [
      "Medical Escort",
      "Hospital Assistance",
      "Wheelchair Support",
      "Comfortable Travel",
    ],
  },
  {
    id: 3,
    title: "Elder Care",
    icon: elderCare,
    color: "purple",
    description:
      "Compassionate care for senior citizens with dignity and respect.",
    benefits: [
      "Daily Assistance",
      "Personal Care",
      "Health Monitoring",
      "Companionship",
    ],
  },
  {
    id: 4,
    title: "ICU Care",
    icon: icuCare,
    color: "rose",
    description:
      "Advanced ICU-level care delivered safely at your home.",
    benefits: [
      "Ventilator Care",
      "Emergency Monitoring",
      "Critical Care",
      "Experienced Staff",
    ],
  },
  {
    id: 5,
    title: "Care Takers",
    icon: careTakers,
    color: "green",
    description:
      "Dedicated caregivers to assist patients with daily activities.",
    benefits: [
      "Meal Support",
      "Mobility Assistance",
      "Medication Reminder",
      "Personal Hygiene",
    ],
  },
  {
    id: 6,
    title: "Doctor Consultation",
    icon: doctorConsultation,
    color: "cyan",
    description:
      "Consult experienced doctors from the comfort of your home.",
    benefits: [
      "Home Visit",
      "Health Checkup",
      "Prescription",
      "Follow-up Care",
    ],
  },
  {
    id: 7,
    title: "First Aid & Treatments",
    icon: firstAid,
    color: "amber",
    description:
      "Emergency first aid, injections and dressing services.",
    benefits: [
      "Emergency Care",
      "Injection",
      "Wound Dressing",
      "Basic Treatments",
    ],
  },
  {
    id: 8,
    title: "Physiotherapy",
    icon: physiotherapy,
    color: "indigo",
    description:
      "Professional physiotherapy sessions at your home.",
    benefits: [
      "Pain Relief",
      "Exercise Therapy",
      "Rehabilitation",
      "Home Visits",
    ],
  },
  {
    id: 9,
    title: "Blood Test",
    icon: bloodTest,
    color: "pink",
    description:
      "Home blood sample collection with quick and accurate reports.",
    benefits: [
      "Home Collection",
      "Certified Labs",
      "Quick Reports",
      "Safe Testing",
    ],
  },
];

export default allServices;