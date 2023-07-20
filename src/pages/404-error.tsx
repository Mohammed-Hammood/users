import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: linear-gradient(to top, teal, white);
    .card {
        color:white;
        text-align:center;
        display: flex;
        gap:20px;
        flex-direction:column;
    }
`

const NotFound:React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <div className='card'>
                <h1>404 page not found!</h1>
                <Link to="/">Home page</Link>
            </div>
        </Wrapper>
    )
};

export default NotFound;