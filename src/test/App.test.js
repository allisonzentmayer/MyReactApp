import React from 'react';
import { Enzyme, shallow } from 'enzyme';
import { PopularMoviesContainer } from '../containers/PopularMoviesContainer';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
    let result;

    it('should render PopularMoviesContainer', () => {
        result = shallow(<App/>);
        expect(result.find(PopularMoviesContainer));
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
