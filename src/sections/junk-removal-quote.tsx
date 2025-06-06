"use client";

import { useState } from "react";
import { toast } from "sonner";
import Field from "@/components/Field";
import {
  CircleArrowIcon,
  Email,
  InformationIcon,
  PhoneIcon,
  User,
} from "@/components/svgs";
import { sendEmail } from "@/app/actions";

const JunkRemovalQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = {
        to: process.env.NEXT_PUBLIC_CONTACT_INFO || "",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        isQuoteRequest: true,
      };

      const result = await sendEmail(data);

      if (result.success) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        toast.success(
          "Thank you for your quote request! We will contact you shortly.",
        );
      }

      if (result.error) {
        toast.error(
          "There was a problem submitting your request. Please try again.",
        );
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-100 mx-auto min-w-[247.68px] px-[20px] md:px-[35px] lg:max-w-[1392px] lg:px-[60px] xl:px-0">
      <div className="bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-[19.38px] px-[19.84px] pt-[20px] pb-[12px] text-white md:px-[19.84px] md:py-[21.04px] xl:rounded-[35px] xl:px-[35.84px] xl:py-[38px]">
        <h2 className="mb-[20px] text-center text-[16.6px] font-semibold md:text-[18.6px] xl:mb-[30px] xl:text-[33.6px]">
          Get your <span className="font-[800] underline">Free</span> Junk
          Removal Quote!
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-[14px] md:flex-row md:flex-wrap md:gap-[7.4px] xl:gap-[11.4px]"
        >
          {/* Fields */}
          <Field
            svg={<User />}
            fieldName="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Field
            svg={<Email />}
            fieldName="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Field
            svg={<PhoneIcon />}
            fieldName="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Field
            svg={<InformationIcon />}
            fieldName="How Can We Help?"
            name="message"
            value={formData.message}
            onChange={handleChange}
            isTextArea={false}
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full cursor-pointer flex-nowrap items-center justify-center gap-[3.49px] rounded-[17.47px] bg-[#000000] px-[20.61px] py-[18px] text-[16px] leading-[8.08px] font-[700] text-white disabled:opacity-70 md:w-fit md:gap-[4px] md:rounded-[27.68px] md:px-[10px] md:py-[13px] md:text-[14px] md:leading-[12.81px] xl:gap-[6px] xl:rounded-[50px] xl:px-[15px] xl:py-[21px] xl:text-[18px] xl:leading-[23.14px] 2xl:px-[30px]"
          >
            <CircleArrowIcon />
            <span className="text-nowrap">
              {loading ? "Sending..." : "Get My Junk GONE"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default JunkRemovalQuote;
