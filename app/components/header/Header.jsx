import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Login = () => (
    <FlatButton label="login" primary={true} />
);
const Header = () => (
    <div>
        <AppBar title="FUNDING PACK" iconElementRight={<FlatButton label="LOG IN"/>}/>
    </div>
);

export default Header;
