import React, { createContext, useReducer, useContext } from "react";
import { merge } from "lodash";

export enum EAdobeContextActions {
  SET = "set"
}

interface IAdobeContextActions {
  type: EAdobeContextActions;
  payload: IAdobe;
}

interface IProviderProps {
  children: React.ReactNode;
}

const initialAdobeContext: {
  adobeContext: IAdobe;
  setAdobeContext: React.Dispatch<IAdobeContextActions>;
} = {
  adobeContext: {},
  setAdobeContext: () => {}
};

const reducer = (state: IAdobe, action: IAdobeContextActions) => {
  switch (action.type) {
    case EAdobeContextActions.SET:
      return merge({ ...state }, action.payload);
  }
};

const AdobeContext = createContext(initialAdobeContext);

export const AdobeContextProvider = ({ children }: IProviderProps) => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <AdobeContext.Provider
      value={{ adobeContext: state, setAdobeContext: dispatch }}
    >
      {children}
    </AdobeContext.Provider>
  );
};

export const useAdobeContext = () => useContext(AdobeContext);
