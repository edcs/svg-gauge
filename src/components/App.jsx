import React from 'react';
import { connect } from 'react-redux';

import Index from '../pages/Index';
import { fetchGauge } from '../state/actions';

class App extends React.Component {
    /**
     * Component will mount event handler.
     *
     * Checks the authentication status of the current user.
     */
    componentWillMount() {
        this.props.dispatch(fetchGauge());
    }

    /**
     * Renders the application.
     *
     * @return {XML}
     */
    render() {
        return (
            <div>
                {this.props.children || <Index />}
            </div>
        );
    }
}

App.propTypes = {
    dispatch: React.PropTypes.any,
    children: React.PropTypes.any,
};

export default connect()(App);
