import { ChangeEvent, ReactElement } from "react";

interface FieldProps {
  fieldName: string;
  svg: ReactElement;
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
  required?: boolean;
}

const Field = ({
  fieldName,
  svg,
  name,
  value = "",
  onChange,
  isTextArea = false,
  required = true,
}: FieldProps) => {
  const commonProps = {
    name,
    value,
    onChange,
    placeholder: fieldName,
    required,
  };

  return (
    <div className="flex w-full items-center gap-[4.1px] rounded-[11.72px] border-[0.39px] border-white bg-[#FFFFFF33] py-[7.85px] pl-[8.79px] text-[15px] font-[600] text-white backdrop-blur-[8.79px] md:w-[115.54px] md:gap-[4px] md:rounded-[16.53px] md:border-[0.55px] md:px-[8px] md:py-[11.07px] md:text-[12px] md:backdrop-blur-[12.4px] xl:w-[200px] xl:gap-[7px] xl:rounded-[29.86px] xl:border xl:px-[15px] xl:py-[20px] xl:text-[14px] xl:backdrop-blur-[22.4px] 2xl:w-[240px] 2xl:gap-[10px] 2xl:rounded-[29.86px] 2xl:border 2xl:px-[15px] 2xl:py-[20px] 2xl:text-[16px] 2xl:backdrop-blur-[22.4px]">
      {svg}
      {isTextArea ? (
        <textarea
          {...commonProps}
          className="w-full resize-none overflow-hidden bg-transparent text-nowrap text-white placeholder-white outline-none"
          style={{
            height: "24px",
            maxHeight: "24px",
            paddingTop: "0",
            paddingBottom: "0",
            lineHeight: "normal",
          }}
        />
      ) : (
        <input
          {...commonProps}
          className="w-full bg-transparent text-nowrap text-white placeholder-white outline-none"
        />
      )}
    </div>
  );
};

export default Field;
