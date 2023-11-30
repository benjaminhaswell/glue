import React from 'react';
import { shallow } from 'enzyme';
import Filters from '../src/components/Filters';

describe('Filters Component', () => {
  let mockFilters;
  let mockHandleFilterChange;
  let wrapper;

  beforeEach(() => {
    mockFilters = {
      payment: 'all',
      platform: 'all',
    };
    mockHandleFilterChange = jest.fn();
    wrapper = shallow(
      <Filters filters={mockFilters} handleFilterChange={mockHandleFilterChange} />
    );
  });

  it('renders select elements for payment and platform', () => {
    expect(wrapper.find('select').length).toEqual(2);
  });

  it('renders options for payment select', () => {
    const paymentSelect = wrapper.find('select').at(0);
    expect(paymentSelect.find('option').length).toEqual(3); // All, Free, Paid
  });

  it('renders options for platform select', () => {
    const platformSelect = wrapper.find('select').at(1);
    expect(platformSelect.find('option').length).toEqual(3); // All, iOS, Android
  });

  it('calls handleFilterChange when payment select changes', () => {
    const paymentSelect = wrapper.find('select').at(0);
    paymentSelect.simulate('change', { target: { value: 'paid' } });
    expect(mockHandleFilterChange).toHaveBeenCalledWith('payment', 'paid');
  });

  it('calls handleFilterChange when platform select changes', () => {
    const platformSelect = wrapper.find('select').at(1);
    platformSelect.simulate('change', { target: { value: 'iOS' } });
    expect(mockHandleFilterChange).toHaveBeenCalledWith('platform', 'iOS');
  });

  it('renders the correct initial values for payment and platform selects', () => {
    const paymentSelect = wrapper.find('select').at(0);
    const platformSelect = wrapper.find('select').at(1);
    expect(paymentSelect.prop('value')).toEqual('all');
    expect(platformSelect.prop('value')).toEqual('all');
  });

  it('validates PropTypes', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    consoleErrorSpy.mockImplementation(() => {});

    const invalidFilters = {
      payment: 'invalid',
      platform: 'invalid',
    };

    shallow(
      <Filters filters={invalidFilters} handleFilterChange={mockHandleFilterChange} />
    );

    expect(consoleErrorSpy).toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });
});
