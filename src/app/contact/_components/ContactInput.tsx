export type ContactInputType = {
  name: string;
  label: string;
  type?: string;
};

const ContactInput: React.FC<ContactInputType> = ({
  name,
  label,
  type = "text",
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        className="h-12 w-full border border-[#d9d9d9] mt-2 outline-none px-4"
      />
    </div>
  );
};

export default ContactInput;
