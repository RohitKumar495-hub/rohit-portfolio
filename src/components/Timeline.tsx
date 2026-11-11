"use client";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const timelineData = [
  {
  year: "(AUG) 2026 - PRESENT",
  title: "ANALYST TRAINEE",
  company: "Cognizant",
  description:
    "Gaining hands-on experience in software development, troubleshooting, and technical support while collaborating with teams to resolve technical issues and deliver reliable solutions.",
  icon: <FaBriefcase className="w-5 h-5 text-white" />,
},
  {
    year: "2023 - 2026",
    title: "BACHELOR OF COMPUTER APPLICATION (BCA)",
    company: "Sarala Birla University",
    description:
      "Completed my BCA with a 9.09 CGPA, building a strong foundation in programming, web development, and software engineering through hands-on projects.",
    icon: <FaGraduationCap className="w-5 h-5 text-white" />,
  },
      {
    year: "(July - September) 2025",
    title: "SOFTWARE DEVELOPER ENGINEER 1",
    company: "IdsPay",
    description:
      "Developed and optimized web applications, working on APIs, backend logic, and frontend integration while implementing client-requested features on a live platform.",
    icon: <FaBriefcase className="w-5 h-5 text-white" />,
  },
    {
    year: "(April - July) 2025",
    title: "REACT DEVELOPER INTERN",
    company: "CollegePur",
    description:
      "Developed and optimized React-based web applications, later taking on the role of Team Leader and being recognized as Intern of the Week three times.",
    icon: <FaBriefcase className="w-5 h-5 text-white" />,
  },
  {
    year: "2021 - 2023",
    title: "SCIENCE (MATHS)",
    company: "DR. RMLS COLLEGE",
    description:
      "Completed Senior Secondary education in Science (Mathematics) with 83.2%, developing strong analytical and problem-solving skills.",
    icon: <FaGraduationCap className="w-5 h-5 text-white" />,
  },
  {
    year: "2020 - 2021",
    title: "SECONDARY EDUCATION",
    company: "Lyceum International School",
    description:
      'Completed secondary education in 2021, building a strong academic foundation through self-learning and consistent academic development.',
    icon: <FaGraduationCap className="w-5 h-5 text-white" />,
  },
];

export default function Timeline() {
  return (
    <section className="p-4 lg:px-10">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-12">
          EXPERIENCE & EDUCATION
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col lg:flex-row"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg">
                {item.icon}
              </div>

              {/* Content */}
              <div className="md:ml-6 mt-4 md:mt-0">
                <span className="text-sm">{item.year}</span>
                <h3 className="text-lg font-semibold mt-1">
                  {item.title} –{" "}
                  <span className="text-yellow-400">{item.company}</span>
                </h3>
                <p className="mt-2 text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
