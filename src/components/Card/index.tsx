import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  customClass?: string;
}

export const Card = ({ children, customClass = "" }: Props) => {
  return <div className={`card ${customClass}`}>{children}</div>;
};
