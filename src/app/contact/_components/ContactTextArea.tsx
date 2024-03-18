import React from "react";

export type ContactTextAreaType = {
  name: string;
  label: string;
};
const ContactTextArea: React.FC<ContactTextAreaType> = ({ name, label }) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
      <textarea
        className="w-full border border-[#d9d9d9] mt-2 outline-none px-4 resize-none"
        rows={10}
        name={name}
      ></textarea>
    </div>
  );
};

export default ContactTextArea;
