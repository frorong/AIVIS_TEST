import { Dispatch, SetStateAction } from "react";

interface Props {
  text: string;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
}

const Input: React.FC<Props> = ({
  text,
  inputValue,
  setInputValue,
  disabled = false,
}) => (
  <div className="mb-4">
    <label htmlFor="input" className="block text-sm font-medium text-gray-700">
      {text}
    </label>
    <input
      placeholder=""
      type="text"
      id="input"
      name="input"
      disabled={disabled}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700"
    />
  </div>
);

export default Input;
