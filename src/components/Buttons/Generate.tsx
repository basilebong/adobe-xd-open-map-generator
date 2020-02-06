import React from "react";
import { EButtonVariants } from "enums/buttons";

interface IButtonGenerate {
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant?: EButtonVariants;
  quiet?: boolean;
}

const ButtonGenerate = ({
  children,
  style,
  variant,
  quiet
}: IButtonGenerate): JSX.Element => {
  const uxpVariant = variant || EButtonVariants.SECONDARY;
  const uxpQuiet = quiet || false;

  return (
    <button
      uxp-variant={uxpVariant}
      uxp-quiet={uxpQuiet ? "true" : ""}
      style={style}
      type="button"
    >
      {children}
    </button>
  );
};

export default ButtonGenerate;
