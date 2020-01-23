import React, { createContext, useReducer, useContext } from "react";
import { merge } from "lodash";

import { IMap } from "models/map";
import { defaultMapContext } from "./default";

export enum EMapContextActions {
  SET = "set"
}

interface IMapContextActions {
  type: EMapContextActions;
  payload: {
    [k in keyof IMap]?: IMap[k];
  };
}

interface IProviderProps {
  children: React.ReactNode;
}

const initialMapContext: {
  mapContext: IMap;
  setMapContext: React.Dispatch<IMapContextActions>;
} = {
  mapContext: defaultMapContext,
  setMapContext: () => {}
};

const reducer = (state: IMap, action: IMapContextActions) => {
  switch (action.type) {
    case EMapContextActions.SET:
      return merge(state, action.payload);
  }
};

const MapContext = createContext(initialMapContext);

export const MapContextProvider = ({ children }: IProviderProps) => {
  const [state, dispatch] = useReducer(reducer, defaultMapContext);

  return (
    <MapContext.Provider value={{ mapContext: state, setMapContext: dispatch }}>
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => useContext(MapContext);
