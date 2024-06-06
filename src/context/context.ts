import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type ContextType = {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
};

export const AppContext = createContext<ContextType | undefined>(undefined);

export const useAppContext = () => {
  const contextData = useContext(AppContext);
  if (contextData === undefined) {
    throw new Error('Context is undefined');
  }

  return contextData;
};
