import '@testing-library/jest-dom';
import React from "react";
import { shallow } from "enzyme";

import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

//?para mejor visualización, hacer cada modificacion dentro de 
//?cada test
describe('Pruebas en el componente GifGrid', () => {
    const category = 'Hola';
    const gifs = [{
        id:'ABC',
        url:'url.com',
        title: 'Hola'
    }];

    useFetchGifs.mockReturnValue({
        data: gifs,
        loading: true
    });

    let wrapper = shallow(<GifGrid category={category}/>);

    test('Debe de mostrar <GifGrid/>', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de mostrar items cuando cargan las imagenes de useFetchGifs', () => {
        expect(wrapper).toMatchSnapshot();
    });
});