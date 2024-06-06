import { FC, PropsWithChildren, useState } from 'react';
import { AppContext } from 'context/context.ts';

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [month, setMonth] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  return (
    <AppContext.Provider value={{ month, setMonth, year, setYear, currentDate, setCurrentDate }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
