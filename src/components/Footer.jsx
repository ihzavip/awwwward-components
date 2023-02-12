import React from "react";

const Footer = () => {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  console.log(time);
  return (
    <section className="mx-6 mt-2 sm:mt-16 max-h-screen sm:max-w-3xl sm:mx-auto">
      <div className="mx-auto flex flex-col gap-4">
        <h3 className="text-4xl mb-5">Let's work together</h3>

        <div className="relative flex items-center my-16">
          <div className="w-full h-[1px] opacity-50 bg-[#adadad]"></div>
          <button
            type="button"
            className="border w-32 h-32 sm:w-52 sm:h-52 bg-blue-800 bg-opacity-70 rounded-full absolute right-0 top-0 -translate-x-[20%] -translate-y-[50%] sm:-translate-x-[30%]"
          >
            <a href="#" className="text-white text-xl">
              Get in touch
            </a>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button
            type="button"
            className="w-full h-20 rounded-full border border-[#adadad] border-opacity-50"
          >
            <a href="#" className="">
              hasibuanihza@gmail.com
            </a>
          </button>
          <button
            type="button"
            className="w-full h-20 rounded-full border border-[#adadad] border-opacity-50"
          >
            +6282272881896
          </button>
        </div>
      </div>

      <div className="pt-24">
        <h3 className="text-xs">SOCIALS</h3>

        <ul className="flex gap-3 [&>li>a]:text-white my-4">
          <li>
            <a href="#">Some</a>
          </li>
          <li>
            <a href="#">Some</a>
          </li>
          <li>
            <a href="#">Some</a>
          </li>
          <li>
            <a href="#">Some</a>
          </li>
        </ul>

        <div className="w-full h-[1px] opacity-50 bg-[#adadad]"></div>

        <div className="flex justify-between items-center">
          <div className="my-4 flex gap-5 flex-col justify-between-center">
            <h3 className="text-xs">VERSION</h3>
            <h4>2023 Edition</h4>
          </div>
          <div className="my-4 gap-5 flex flex-col justify-between-center">
            <h3 className="text-xs">LOCAL TIME</h3>
            <h4>{time}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
