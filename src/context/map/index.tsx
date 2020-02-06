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

interface IMapContext {
  mapContext: IMap;
  setMapContext: React.Dispatch<IMapContextActions>;
}

const initialMapContext: IMapContext = {
  mapContext: defaultMapContext,
  setMapContext: () => null
};

const reducer = (state: IMap, action: IMapContextActions): IMap => {
  switch (action.type) {
    case EMapContextActions.SET:
      return merge({}, state, action.payload);
  }
};

const MapContext = createContext(initialMapContext);

export const MapContextProvider = ({
  children
}: IProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, defaultMapContext);

  return (
    <MapContext.Provider value={{ mapContext: state, setMapContext: dispatch }}>
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = (): IMapContext => useContext(MapContext);
