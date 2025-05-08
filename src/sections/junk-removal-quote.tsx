import Field from "@/components/Field";
import {
  CircleArrowIcon,
  Email,
  InformationIcon,
  PhoneIcon,
  User,
} from "@/components/svgs";

const JunkRemovalQuote = () => {
  return (
    <div className="mx-auto min-w-[247.68px] px-[20px] md:px-[35px] lg:max-w-[1392px] lg:px-[60px] xl:px-0">
      <div className="bg-red-gradient-2 mx-auto rounded-[19.38px] px-[19.84px] pt-[20px] pb-[12px] text-white md:px-[19.84px] md:py-[21.04px] xl:rounded-[35px] xl:px-[35.84px] xl:py-[38px]">
        <h2 className="mb-[20px] text-center text-[16.6px] font-semibold md:text-[18.6px] xl:mb-[30px] xl:text-[33.6px]">
          Get your <span className="font-[800] underline">Free</span> Junk
          Removal Quote!
        </h2>
        <div className="flex flex-col items-center justify-center gap-[14px] md:flex-row md:flex-wrap md:gap-[7.4px] xl:gap-[11.4px]">
          {/* Fields */}
          <Field svg={<User />} fieldName="Name" />
          <Field svg={<Email />} fieldName="Email Address" />
          <Field svg={<PhoneIcon />} fieldName="Phone Number" />
          <Field svg={<InformationIcon />} fieldName="How Can We Help?" />

          {/* Button */}
          <button className="flex cursor-pointer justify-center w-full md:w-fit flex-nowrap items-center gap-[3.49px] rounded-[17.47px] bg-[#000000] px-[20.61px] py-[10px] text-[16px] leading-[8.08px] font-[700] text-white md:gap-[4px] md:rounded-[27.68px] md:px-[10px] md:py-[13px] md:text-[14px] md:leading-[12.81px] xl:gap-[6px] xl:rounded-[50px] xl:px-[15px] xl:py-[21px] xl:text-[18px] xl:leading-[23.14px]2xl:px-[30px]">
            <CircleArrowIcon/>
            <span className="text-nowrap">Get My Junk GONE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JunkRemovalQuote;
