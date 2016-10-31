import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import style from './style';

const Home = () => (
    <div>
        <div>
            <Paper className={style.search} zDepth={1}>

            </Paper>
        </div>
        <Paper>

        </Paper>
        <Grid className={style.content}>
            <Paper>
                <Tabs>
                    <Tab
                        label="INVESTERS"
                    />
                    <Tab
                        label="BORROWERS"
                    />
                </Tabs>
                <Row>
                    <Col xs={12} md={6} >
                        <Paper className={style.postbox}>
                            <div>
                                <h3>Invester</h3>
                            </div>
                        </Paper>
                    </Col>
                    <Col xs={12} md={6} >
                        <Paper className={style.postbox}>
                            <div>
                                <h3>Borrower</h3>
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Paper>
        </Grid>
    </div>
);

export default Home;
