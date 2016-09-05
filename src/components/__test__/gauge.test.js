import React from 'react';
import { shallow } from 'enzyme';

import Gauge from '../Gauge.jsx';

it('renders gauge with currency correctly', () => {
    const gauge = shallow(
        <Gauge
            value={50}
            min={0}
            max={100}
            type={'currency'}
            unit={'GBP'}
        />
    );

    expect(gauge.contains('£0')).toEqual(true);
    expect(gauge.contains('£100')).toEqual(true);
    expect(gauge.contains('£50')).toEqual(true);
});

it('renders gauge without currency correctly', () => {
    const gauge = shallow(
        <Gauge
            value={50}
            min={0}
            max={100}
        />
    );

    expect(gauge.contains('0')).toEqual(true);
    expect(gauge.contains('100')).toEqual(true);
    expect(gauge.contains('50')).toEqual(true);
});
