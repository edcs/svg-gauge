import { connect } from 'react-redux';

import Gauge from '../components/Gauge';

const mapStateToProps = (state) => ({
    value: state.gauge.value,
    min: state.gauge.min,
    max: state.gauge.max,
    unit: state.gauge.unit || '',
});

const mapDispatchToProps = () => ({
    //
});

export default connect(mapStateToProps, mapDispatchToProps)(Gauge);
