import React, { useContext, useState } from "react";
import { ICON, Loader } from 'components';
import { UserContext } from 'context';
import useFetch from 'hooks/useFetch';
import UserTemplate from "components/user-template";
import Modal from "components/modal";
import { UserType } from "types";
import "styles/home-page.scss";


export default function HomePage() {
    const { users, setUsers } = useContext(UserContext);
    const [modal, setModal] = useState<{ user?: UserType, isVisible: boolean }>({ isVisible: false });
    const [search, setSearch] = useState<string>("");

    //if you want the search to be on the backend, then just remove undefined and pass search to useFetch
    // but for fast search, used search locally
    const { loading, message, setMessage } = useFetch({ setUsers, search: undefined });

    const filtersUsers = users.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <main className="homePage">
                <div className="center-content">
                    <div className="search__wrapper">
                        <input
                            title="Filter users by name"
                            id=":searchInput"
                            className="wrapper_input"
                            onChange={e => setSearch(e.target.value.trim())}
                            type="text"
                        >
                        </input>
                        <button onClick={() => { document.getElementById(':searchInput')?.focus() }}>
                            <ICON name="search-regular" />
                        </button>
                    </div>
                    {message && <div className="message__wrapper" onClick={() => setMessage(null)}>
                        {message.text}
                    </div>}
                    <div className="users__wrapper">

                        {loading ?
                            <Loader size={60} />
                            :
                            filtersUsers.map(user => (
                                <UserTemplate
                                    {...{
                                        user,
                                        setUser: (user: UserType) => setModal({ isVisible: true, user }),
                                        key: user.id
                                    }}
                                />
                            ))}
                    </div>
                </div>
            </main>
            <Modal
                isVisible={modal.isVisible}
                user={modal.user}
                setIsVisible={() => setModal({ isVisible: false })}
            />
        </>
    );
}
