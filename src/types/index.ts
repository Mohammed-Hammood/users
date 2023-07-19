export type UserType = {
    id: number;
    name: string;
    phone: string;
    email: string;
    address: string;
    position_name: string;
    department: string;
    hire_date: string;
}

export type UserContextType = {
    users: UserType[],
    setUsers: (users: UserType[]) => void
}
