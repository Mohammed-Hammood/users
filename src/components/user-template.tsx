import React from "react";
import { UserType } from "types";
import { styled } from "styled-components";
import { ICON } from 'components';

const Wrapper = styled.div`
    cursor: pointer;
    border-radius: 16px; 
    background: #FFF; 
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10); 
    display: flex;
    width: 357px;
    height: 314px;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    &:hover {
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2); 
    }
    &:active {
        transform: scale(1.1);
        transition: transform 500ms;
    }
    
        .card{
            display: flex;
            flex-direction: column;
            gap:24px;
            align-items: flex-start;
            
            &__title{
                color: var(--plumbum, #262C40);
                text-align: center;
                font-family: Proxima Nova;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: 30px; 
            }
            
            &__body {
                display: flex;
                flex-direction: column;
                gap: 12px;
                
                &__phone, &__email {
                    display: flex;
                    justify-content: flex-start;
                    gap: 14px;
                    &__text {
                        color: var(--asphalt, #8189A3);
                        text-align: center;
                        font-family: Proxima Nova;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 20px; 
                    }
                    
                    &__icon {
                        svg {
                            height: 24px;
                            width:  24px;
                            path {
                                fill: var(--iconColor, #432EAB);
                            }
                        }
                    }
                }
            }
    }
`
type Props = {
    user: UserType;
    setModal: (value: { user: UserType, isVisible: boolean }) => void
}

const UserTemplate = ({ user, setModal }: Props) => {
    
    return (
        <Wrapper onClick={() =>  setModal({ isVisible: true, user })}>
            <div className="card" >
                <h1 className="card__title" >{user.name}</h1>
                <div className="card__body" >
                    <div className="card__body__phone">
                        <span className="card__body__phone__icon">
                            <ICON name="phone-regular"/>
                        </span>
                        <h2 className="card__body__phone__text">{user.phone}</h2>
                    </div>
                    <div className="card__body__email" >
                        <span className="card__body__email__icon">
                            <ICON name="email-regular"/>
                        </span>
                        <h2 className="card__body__email__text">{user.email}</h2>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default UserTemplate;