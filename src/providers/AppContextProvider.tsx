import { FC, PropsWithChildren, useState } from 'react';
import { AppContext } from 'context/context.ts';
import { MapType } from 'types/types.ts';

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  // const [todosMap, setTodosMap] = useState<MapType>(new Map());
  const todosMap: MapType = new Map();
  return (
    <AppContext.Provider
      value={{ currentDate, setCurrentDate, selectedDay, setSelectedDay, todosMap }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
