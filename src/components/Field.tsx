import { ReactElement } from "react";

interface FieldProps {
  fieldName: string;
  svg: ReactElement;
}

const Field = ({ fieldName, svg }: FieldProps) => {
  return (
    <div className="flex gap-[4.1px] md:gap-[5.79px] xl:gap-[10.45px] bg-[#FFFFFF33] backdrop-blur-[8.79px] md:backdrop-blur-[12.4px] xl:backdrop-blur-[22.4px] text-white rounded-[11.72px] md:rounded-[16.53px] xl:rounded-[29.86px] pl-[8.79px] py-[7.85px] md:pl-[12.4px] md:py-[11.07px] xl:py-[20px] xl:pl-[22.4px] w-[97px] md:w-[127.54px] xl:w-[230.43px] border-[0.39px] md:border-[0.55px] xl:border border-white text-[5.28px] md:text-[7.44px] xl:text-[13.44px] font-[600] items-center">
      {svg}
      <span>{fieldName}</span>
    </div>
  );
};

export default Field;
