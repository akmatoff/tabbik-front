import { IDropdownOption } from "@/interfaces/common";
import { ReactNode, useState } from "react";

interface Props {
  options: IDropdownOption[];
  trigger: ReactNode;
}

export default function Dropdown({ options, trigger }: Props) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleOptionClick = (option: IDropdownOption) => {
    option.onClick();
    setShow(false);
  };

  return (
    <>
      {show && (
        <div
          className="absolute w-screen h-screen top-0 left-0 -z-10"
          onClick={() => setShow(false)}
        ></div>
      )}
      <div className="cursor-pointer" onClick={handleShow}>
        {trigger}
      </div>
      {show && (
        <div className="relative">
          <div className="-left-20 top-6 absolute bg-white rounded-secondary cursor-pointer shadow-lg py-2 px-3">
            {options.map((option) => (
              <div className="p-1" onClick={() => handleOptionClick(option)}>
                {option.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
