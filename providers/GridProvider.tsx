import React, { createContext, ReactNode, useContext } from "react";

interface GridProviderProps {
  useGrid?: boolean;
  children: ReactNode;
}

const GridContext = createContext<boolean>(false);

export const GridProvider: React.FC<GridProviderProps> = ({
  useGrid = true,
  children,
}) => <GridContext.Provider value={useGrid}>{children}</GridContext.Provider>;

export const useGrid = (): boolean => useContext(GridContext);

export default GridProvider;
