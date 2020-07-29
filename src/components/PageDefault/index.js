import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer'; 

import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function PageDefault({ children }) { // "Abri" o props e pego a propriedade children
    return (
        <React.Fragment>
            <Menu></Menu>
            <Main>
                { children }
            </Main>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default PageDefault;