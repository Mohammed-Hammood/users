

import { useState, useEffect, useRef } from 'react';
import { UserType } from 'types';
import { Endpoints } from 'utils';

type Props = {
    setUsers: (users: UserType[]) => void;
    search?: string;
}

function useFetch({ setUsers, search }: Props) {
    const firstLoad = useRef<boolean>(true);
    const searchRef = useRef<string | undefined>(search);
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<null | { status: number, text: string }>(null);
    const url = Endpoints.getUsers({ q: search });

    useEffect(() => {
        const sendRequest = async (): Promise<void> => {
            setLoading(true);
            try {
                const req = await fetch(url);

                const res = await req.json();
                if (res) {
                    setUsers(res);
                }
            } catch (err: any) {
                setMessage({ status: err.status, text: err.message });

            } finally {
                setLoading(false);
            }
        }
        if (searchRef.current !== search || firstLoad.current) {
            setMessage(null);
            sendRequest();
            searchRef.current = search;
            firstLoad.current = false;
        }
    }, [url, loading, message, setLoading, search])
    return {
        loading,
        message,
        setLoading,
        setMessage,
    }
}
export default useFetch;