import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

class Header extends Component {
    render(){
        const Menu = () => (
            <AppBar
                title="LOGO"
                iconElementLeft={<IconButton iconClassName="muidocs-icon-custom-github" />}
                iconElementRight={<FlatButton label="LOG IN"/>}
            />
        );

        return(
            <div>
                <Menu/>


            </div>
        );
    }
}

export default Header;
