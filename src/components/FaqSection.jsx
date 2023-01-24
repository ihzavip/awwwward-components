import React from "react";

const faq = [
  {
    key: 1,
    question: "What specific skills are you proficient in?",
    answer:
      "I'm proficient in Front-End Development : HTML, CSS, Javascript and Front-End library especially React.",
  },
  {
    key: 2,
    question:
      "What technology and tools you use for Front-End web development?",
    answer:
      "Mostly I use React and Tailwind CSS for scalable projects, for small website I use HTML, TailwindCSS and Javascript.",
  },
  {
    key: 3,
    question: "What Content Management System (CMS) that you use?",
    answer: "I use React Wordpress CMS and Sanity.",
  },
  {
    key: 3,
    question: "What Content Management System (CMS) that you use?",
    answer: "I use React Wordpress CMS and Sanity.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-12 px-6 sm:py-24 sm:px-24 ">
      <div className="md:flex md:justify-between md:items-start mx-auto min-h-sceen">
        {/* its the header */}
        <div className="flex flex-col py-5 max-w-sm">
          <h2 className="font-bold text-5xl">FAQ</h2>
          <p className="text-xl mt-10">
            Here are the most common questions I hear from my clients.
          </p>
        </div>

        <div className="grid divide-y divide-neutral-200 md:max-w-md mt-8 md:mt-0">
          {/* its the faq */}
          {faq.map((item, index) => (
            <div className="py-5" key={index}>
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>{item.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className=" mt-3 group-open:animate-fadeIn">{item.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
