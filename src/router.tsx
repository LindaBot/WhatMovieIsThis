import * as React from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import App from './App';

// Each component is an isolated piece that's responsible for one part of UI 
import BackgroundComponent from './components/BackgroundComponent'
import FirstComponent from './components/FirstComponent';
import { Header } from './components/Header'; 
import SecondComponent from './components/SecondComponent';

import './css/styles.css';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <BackgroundComponent />
                <main>
                    <Route exact={true} path="/" component={App} />
                    <Route path="/FirstComponent" component={FirstComponent}/>
                    <Route path="/SecondComponent" component={SecondComponent}/>
                    <Redirect from="*" to="/" />
                </main>
            </div>
        </BrowserRouter>
    );
}