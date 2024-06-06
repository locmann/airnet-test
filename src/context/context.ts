import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type ContextType = {
  month: number | null;
  setMonth: Dispatch<SetStateAction<number | null>>;
  year: number | null;
  setYear: Dispatch<SetStateAction<number | null>>;
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
