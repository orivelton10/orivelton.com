import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';

describe('src/components/Footer.js', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
});
