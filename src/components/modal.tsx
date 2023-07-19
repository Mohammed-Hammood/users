import React from "react";
import { UserType } from "types";
import ICON from "./icons";


type Props = {
    isVisible: boolean;
    setIsVisible: (value: boolean) => void
    user?: UserType;
}


const Modal = ({ isVisible, setIsVisible, user }: Props): JSX.Element | null => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        const elm = e.target as HTMLDivElement;
        //hide the modal when user clicks on the background and not the modal content 
        if(elm.className.toString() === 'modal'){
            setIsVisible(false);
        }
    }
    React.useEffect(() => {

        if(isVisible){
            document.body.style.overflowY = "hidden"; //to prevent scrolling when modal is opened
        }
        
        return ()=> {
            document.body.style.overflowY = "auto";
        }

    }, [isVisible, setIsVisible, user]);

    if (!isVisible || !user) return null;
    return (
        <div onClick={handleClick} className="modal">
            <div className="content">
                <div className="content__header">
                    <div className="content__header__userName">
                        {user.name}
                    </div>
                    <div className="content__header__closeBtn">
                        <button type="button" onClick={() => setIsVisible(false)}>
                            <ICON name="xmark-solid" />
                        </button>
                    </div>
                </div>
                <div className="content__body">
                    <div className="content__body__item">
                        <div className="content__body__item__key">Телефон:</div>
                        <div className="content__body__item__value">{user.phone}</div>
                    </div>
                    <div className="content__body__item">
                        <div className="content__body__item__key">Почта:</div>
                        <div className="content__body__item__value">{user.email}</div>
                    </div>
                    <div className="content__body__item">
                        <div className="content__body__item__key">Дата приема:</div>
                        <div className="content__body__item__value">{user.hire_date}</div>
                    </div>
                    <div className="content__body__item">
                        <div className="content__body__item__key">Должность:</div>
                        <div className="content__body__item__value">{user.position_name}</div>
                    </div>
                    <div className="content__body__item">
                        <div className="content__body__item__key">Подразделение:</div>
                        <div className="content__body__item__value">{user.department}</div>
                    </div>
                </div>
                <div className="content__footer">
                    <div className="content__footer__title">Дополнительная информация:</div>
                    <div className="content__footer__text">
                        Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
