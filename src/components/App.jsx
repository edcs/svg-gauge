import React from 'react';

import Index from '../pages/Index';

const App = ({ children }) => (
    <div>
        {children || <Index />}
    </div>
);

App.propTypes = {
    children: React.PropTypes.any,
};

export default App;
