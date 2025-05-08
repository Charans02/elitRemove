import { ReactElement } from "react";

interface FieldProps {
  fieldName: string;
  svg: ReactElement;
}

const Field = ({ fieldName, svg }: FieldProps) => {
  return (
    <div className="flex w-[105px] items-center gap-[4.1px] rounded-[11.72px] border-[0.39px] border-white bg-[#FFFFFF33] py-[7.85px] pl-[8.79px] text-[8px] font-[600] text-white backdrop-blur-[8.79px] md:w-[127.54px] md:gap-[5.79px] md:rounded-[16.53px] md:border-[0.55px] md:py-[11.07px] md:px-[12.4px] md:text-[10px] md:backdrop-blur-[12.4px] xl:w-[230.43px] xl:gap-[10.45px] xl:rounded-[29.86px] xl:border xl:py-[20px] xl:px-[22.4px] xl:text-[13.44px] xl:backdrop-blur-[22.4px]">
      {svg}
      <span className="text-nowrap">{fieldName}</span>
    </div>
  );
};

export default Field;
