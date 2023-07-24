import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if(!divEl.current) {
        return;
      };

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      };
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);

    }
  }, []);

  // open/close dropdown (toggles isOpen to the opposite of what it currently is)
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  //handler for when the user clicks on one of the options
  const handleOptionClick = (option) => {
    //Close dropdown
    setIsOpen(false);
    // what option did the user select?
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {/* if value is null, display "Select...", otherwise display the label of the selected option */}
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}
export default Dropdown;
