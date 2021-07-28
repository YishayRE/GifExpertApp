import '@testing-library/jest-dom';
import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en el componente GifExpertApp', () => {

    
    test('Debe de mostrar <GifExpertApp/>', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon'];
        const wrapper = shallow(<GifExpertApp defaultCategory={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});