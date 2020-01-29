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

interface IAdobeContext {
  adobeContext: IAdobe;
  setAdobeContext: React.Dispatch<IAdobeContextActions>;
}

const initialAdobeContext: IAdobeContext = {
  adobeContext: {},
  setAdobeContext: () => null
};

const reducer = (state: IAdobe, action: IAdobeContextActions): IAdobe => {
  switch (action.type) {
    case EAdobeContextActions.SET:
      return merge({ ...state }, action.payload);
  }
};

const AdobeContext = createContext(initialAdobeContext);

export const AdobeContextProvider = ({
  children
}: IProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <AdobeContext.Provider
      value={{ adobeContext: state, setAdobeContext: dispatch }}
    >
      {children}
    </AdobeContext.Provider>
  );
};

export const useAdobeContext = (): IAdobeContext => useContext(AdobeContext);
