import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {cyan500, indigo500, indigo50, white, black, brown100} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/App';
import './main';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    },
    appBar: {
        color: indigo500,
    },
    tabs: {
        backgroundColor: indigo50,
        textColor: black,
        selectedTextColor: black,
    },
    inkBar: {
        backgroundColor: brown100,
    },

});

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const Main = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <App/>
    </MuiThemeProvider>
);


ReactDOM.render(<Main />, document.getElementById('app'));
