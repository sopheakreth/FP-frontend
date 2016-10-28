import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import style from './style';

const Home = () => (
    <div>
        <div>
            <Paper className={style.search} zDepth={1}>

            </Paper>
        </div>
        <Grid>
            <Row>
                <Col xs >
                    <Paper>
                        Invester
                    </Paper>
                </Col>
                <Col xs >
                    <Paper>
                        Invester
                    </Paper>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default Home;
