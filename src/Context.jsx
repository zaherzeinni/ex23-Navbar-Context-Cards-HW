import React, { createContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  //const [users, setUsers] = useState([]);
  //const [name ,setName] =useState('zaher')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <GlobalContext.Provider value={{ isOpen ,onOpen  , onClose }}>
      {children}
     

    </GlobalContext.Provider>
  );
};
