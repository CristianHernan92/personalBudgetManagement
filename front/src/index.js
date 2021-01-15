import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'

import Main from './containers/Main'

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Main></Main>
        </BrowserRouter>
    </Provider>, 
document.getElementById("app"))