import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {cyan500, indigo500, indigo50, white, black, brown100} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/App';
import './main';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    },
});

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.

class Main extends Component {
    render(){
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <App/>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<Main />, document.querySelector('#app'));
