import React from "react";
import { ModalTitle } from ".";
import { ETextColors } from "enums/colors";
import { ButtonClose } from "components/Buttons";
import { EButtonVariants } from "enums/buttons";

const ModalEmptySelectionError = () => {
  return (
    <>
      <div>
        <ModalTitle className={ETextColors.DANGER}>
          Please select a shape and try again
        </ModalTitle>
        <hr />
        <p>
          In order for Open Map Generator to be able to insert a map as
          background image you must select a shape.
        </p>
      </div>

      <div style={{ textAlign: "right" }}>
        <ButtonClose variant={EButtonVariants.CTA}>
          Close and try again
        </ButtonClose>
      </div>
    </>
  );
};

export default ModalEmptySelectionError;
