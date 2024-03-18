"use client";

import { useRef, useState } from "react";
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";
import { submitForm } from "@/app/actions";
import SubmitButton from "./SubmitButton";
import useBoundStore from "@/app/store";

const formData = [
  {
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
  },
  {
    name: "message",
    label: "Leave Your Message",
    type: "text",
  },
];

const ContactForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const toastArray = useBoundStore((state) => state.toastArray);
  const setToast = useBoundStore((state) => state.setToast);
  // const defaultNotification = { type: "", message: "" };
  // const [Notification, setNotification] = useState(defaultNotification);

  const handleSubmit = async (formData: FormData) => {
    try {
      const res: any = await submitForm(formData);
      if (res?.response?.includes("OK")) {
        // setToast({ type: "success", message: "" });
        setToast({
          message: "Message sent successfully. Will get back to you ASAP.",
          id: Math.random().toString(),
          type: "success",
        });
        ref?.current?.reset();
      }
    } catch (err: any) {
      console.log({ err });
      setToast({
        type: "error",
        message:
          "Unable to send message. Please check that all fields are properly filled then try again.",
        // message: err.message || "Unable to send message. Please try later.",
        id: Math.random().toString(),
      });
    }
  };

  return (
    <form action={handleSubmit} ref={ref} className="font-kumbh">
      {formData.map((item) =>
        item.name !== "message" ? (
          <ContactInput key={item.name} {...item} />
        ) : (
          <ContactTextArea key={item.name} {...item} />
        )
      )}

      <SubmitButton />
    </form>
  );
};

export default ContactForm;
