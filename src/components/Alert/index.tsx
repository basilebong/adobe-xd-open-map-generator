import React from "react";
import styled from "@emotion/styled";

import { EBackgroundColors } from "enums/colors";

interface IAlertProps {
  color?: EBackgroundColors;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const AlertDiv = styled.div({
  padding: "5px 10px",
  margin: "15px auto",
  color: "#fff",
  textAlign: "center",
  borderRadius: "5px",
  width: "auto"
});

const Alert = ({ color, children, style }: IAlertProps): JSX.Element => {
  return (
    <>
      <AlertDiv className={color} style={style ? style : {}}>
        {children}
      </AlertDiv>
    </>
  );
};

export default Alert;
