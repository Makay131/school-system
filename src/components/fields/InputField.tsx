import { FieldError } from "react-hook-form";

import Styles from "./InputField.module.css";

type InputFieldProps = {
    label: string;
    type?: string;
    register: any;
    name: string;
    defaultValue?: string;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

const InputField = ({label, type = "text", register, name, defaultValue, error, inputProps}: InputFieldProps) => {
  return (
    <div className={Styles["input-container"]}>
        <label className={Styles["input-label"]}>{label}</label>
        <input type={type} className={Styles["input-self"]} {...register(name)} {...inputProps} defaultValue={defaultValue} />
        {error?.message && <p className={Styles["input-error"]}>{error?.message.toString()}</p>}
    </div>
  )
}

export default InputField