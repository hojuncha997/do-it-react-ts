import { FC } from "react";
import { ReactDivProps } from "../../components";

export type ModalActionProps = ReactDivProps & {};
export const ModalAction: FC<ModalActionProps> = ({
  className: _className,
  ...props
}) => {
  const className = ["modal-action", _className].join(" ");
  return <div {...props} className={className} />;
};
