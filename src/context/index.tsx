import React, { createContext, useState } from "react";
import { UserType, UserContextType } from "types";


export const UserContext = createContext<UserContextType>({ users: [], setUsers: () => { } });


export function UserProvider({ children }: { children: React.ReactNode }) {

    const [users, setUsers] = useState<UserType[]>([]);

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    )
}