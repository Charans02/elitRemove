
import Field from "../components/Field"
import { CircleArrowIcon, Email, InformationIcon, PhoneIcon, User } from "../components/svgs"


const JunkRemovalQuote = () => {
    return (
        <div className="bg-red-gradient-2 text-white rounded-[19.38px] xl:rounded-[35px] custom-junk-shadow max-w-[247.67514038085938px] md:max-w-fit w-fit xl:max-w-[1392px] mx-auto pt-[20px] pb-[12px] px-[19.84px] md:py-[21.04px] md:px-[19.84px] xl:py-[38px] xl:px-[35.84px]">
            <h2 className="text-center text-[16.6px] md:text-[18.6px] xl:text-[33.6px] font-semibold mb-[16.61px] xl:mb-[30px]">
                Get your <span className="underline font-[800]">Free</span> Junk Removal Quote!
            </h2>
            <div className="flex flex-wrap justify-center gap-[14px] md:flex-nowrap md:gap-[12.4px] xl:gap-[22.4px] items-center">
                {/* Fields */}
                <Field svg={<User />} fieldName="Name" />
                <Field svg={<Email />} fieldName="Email Address" />
                <Field svg={<PhoneIcon />} fieldName="Phone Number" />
                <Field svg={<InformationIcon />} fieldName="How Can We Help?" />

                {/* Button */}
                <button className="bg-[#000000] text-white text-[5.59px] leading-[8.08px] md:text-[8.86px] md:leading-[12.81px] xl:text-[16px] xl:leading-[23.14px] font-[700] px-[20.61px] py-[10px] md:px-[32.66px] md:py-[18.82px] xl:px-[59px] xl:py-[34px] rounded-[17.47px] md:rounded-[27.68px] xl:rounded-[50px]  flex items-center gap-[3.49px] md:gap-[5.54px] xl:gap-[10px] cursor-pointer">
                    <CircleArrowIcon />
                    <span>Get My Junk GONE</span>
                </button>
            </div>
        </div>
    )
}

export default JunkRemovalQuote
