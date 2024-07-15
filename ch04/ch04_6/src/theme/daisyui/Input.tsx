import type { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";
import { forwardRef } from "react";

export type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputProps = ReactInputProps & {};


export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className: _className, ...inputProps } = props;
  const className = ["input", _className].join(" ");
  return <input {...inputProps} ref={ref} className={className} />;
})

// export const Input: FC<inputProps> = ({
//   className: _className,
//   ...inputProps
// }) => {
//   const className = ["input", _className].join(" ");
//   return <input {...inputProps} className={className} />;
// };
