"use client";

import Button from "@/_components/form/Button";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={pending ? " bg-[#e5e5e5] cursor-not-allowed" : ""}
      text={pending ? "Loading" : "Submit"}
      style={{ width: "200px" }}
    />
  );
};

export default SubmitButton;
