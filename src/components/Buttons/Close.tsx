import React from "react";
import { useAdobeContext } from "context/adobe";
import { EButtonVariants } from "enums/buttons";

interface IButtonCloseProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant?: EButtonVariants;
  quiet?: boolean;
}

const ButtonClose = ({
  children,
  style,
  variant,
  quiet
}: IButtonCloseProps): JSX.Element => {
  const { dialog } = useAdobeContext().adobeContext;

  const uxpVariant = variant || EButtonVariants.SECONDARY;
  const uxpQuiet = quiet || false;

  const onClose = (): void =>
    dialog ? dialog.close() : console.error("Missing dialog");

  return (
    <button
      uxp-variant={uxpVariant}
      uxp-quiet={uxpQuiet ? "true" : ""}
      type="button"
      onClick={(): void => onClose()}
      style={style}
    >
      {children}
    </button>
  );
};

export default ButtonClose;
