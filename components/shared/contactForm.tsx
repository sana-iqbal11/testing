import React from "react";
import SectionTitle from "./sectionTitle";
import ColoredSpan from "./coloredSpan";
import HeadingDescription from "./headingDescription";

function ContactForm() {
  return (
    <div className="grid grid-cols-1 gap-5 place-content-center h-full lg:px-16 px-3">
      <SectionTitle className="lg:text-start text-center">
        <ColoredSpan className="text-white laptop:text-5xl text-3xl">
          Let’s level up your brand, together
        </ColoredSpan>
      </SectionTitle>
      <HeadingDescription className="text-[16px] lg:text-start text-center mt-[-28px]">
        You can reach us anytime via{" "}
        <span className="text-orange">info@e3.ventures</span>
      </HeadingDescription>

      <form className="flex flex-col gap-4" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <div className="laptop:block hidden">
          <TextField title="Name" placeholder="Your Name" type="text" name="name" />
        </div>
        <div className="laptop:hidden block">
          <TextField title="First name" placeholder="First name" type="text" name="first-name" />
        </div>
        <div className="laptop:hidden block">
          <TextField title="Last name" placeholder="Last name" type="text" name="last-name" />
        </div>
        <TextField title="Email" placeholder="you@company.com" type="email" name="email" />
        <PhoneField title="Phone number" placeholder="Enter Phone Number" name="telephone" />
        <label
          htmlFor="message"
          className="laptop:block mb-2 text-sm font-medium text-gray-900 dark:text-white  hidden"
        >
          How can we help?
        </label>
        <label
          htmlFor="message"
          className="laptop:hidden mb-2 text-sm font-medium text-gray-900 dark:text-white  block message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="laptop:block hidden p-2.5 text-black focus:border-0 mt-[-16px] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
          placeholder="Tell us a little about the project..."
        ></textarea>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="laptop:hidden block p-2.5 text-black focus:border-0 mt-[-16px] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
        ></textarea>
        <div className="flex items-center justify-center w-full mt-3">
         
          <button
            className={`text-[16px] bg-[orange] hover:bg-lightOrange 
            rounded-[8px] border-none p-[9px_20px] laptop:block hidden mb-[39px] 
            laptop:mb-[30px] tracking-wide text-white font-normal w-full `}
            type="submit"
        >
           Get Started
        </button>
          <button
            className={`text-[16px] bg-[orange] hover:bg-lightOrange rounded-[8px] 
            border-none p-[9px_20px] laptop:hidden block mb-[39px] laptop:mb-[30px] 
            tracking-wide text-white font-normal w-full `}
            type="submit"
        >
           Send message
        </button>
        </div>{" "}
      </form>
    </div>
  );
}

export default ContactForm;

const TextField = ({
  title,
  placeholder,
  type,
  name,
}: {
  title: string;
  placeholder: string;
  type: string;
  name: string;
}) => {
  return (
    <div className="flex flex-col col-span-1 gap-5">
      <p className="text-themeDarkGreen text-sm font-semibold mb-[-9px]">
        {title}
      </p>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="border-b border-themeDarkGreen outline-none rounded-lg text-black text-sm focus:border-0"
      />
    </div>
  );
};

const PhoneField = ({
  title,
  placeholder,
  name,
}: {
  title: string;
  placeholder: string;
  name: string;
}) => {
  // Sample country codes list, you can replace it with your own list
  const countryCodes = [
    { code: "+966" },
    { code: "+20" },
    // Add more country codes as needed
  ];

  return (
    <div className="flex flex-col col-span-1 gap-5">
      <p className="text-themeDarkGreen text-sm font-semibold mb-[-9px]">
        {title}
      </p>
      <div className="flex items-center rounded-lg bg-white">
        <select className="border-0 bg-transparent  border-themeDarkGreen outline-none rounded-l-lg text-black text-sm">
          {countryCodes.map((country, index) => (
            <option key={index} value={country.code}>
              ({country.code})
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          className="border-none bg-transparent border-themeDarkGreen outline-none focus:outline-none rounded-r-lg text-black text-sm focus:border-0"
        />
      </div>
    </div>
  );
};
