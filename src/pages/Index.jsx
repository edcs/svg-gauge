import React from 'react';

import Gauge from '../components/Gauge';

const style = {
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#4D4D4D',
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    item: {
        width: '50%',
        height: 'auto',
    },
};

const Index = () => (
    <div style={style.container}>
        <div style={style.flex}>
            <div style={style.item}>
                <Gauge />
            </div>
        </div>
    </div>
);

export default Index;
