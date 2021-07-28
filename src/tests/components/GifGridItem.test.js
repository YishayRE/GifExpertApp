import React from "react";
import { shallow } from "enzyme";

import GifGridItem from "../../components/GifGridItem";

describe('Pruebas en el componente GifGridItem', () => {
    const title = 'Hola';
    const url = 'url.com';

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe de mostrar <GifGridItem/>', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo', () => {
        const textoP = wrapper.find('p').text().trim();

        expect(textoP).toBe(title);
    });

    test('Debe de mostrar una imagen', () => {
        const img = wrapper.find('img');
        const src = img.props().src;
        const alt = img.props().alt;

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    
    test('Debe el div tener una clase', () => {
        const clase = 'animate__bounce';
        const img = wrapper.find('div');
        const classN = img.props().className;
        expect(classN).toMatch(clase);
    });
/*
    

    test('Debe de incrementar el boton en 1', () => {
        wrapper.find('button').at(2).simulate('click');
        
        const textoP = wrapper.find('h2').text().trim();
        
        expect(textoP).toBe('11');
    });

    test('Debe de reiniciar el boton', () => {
        wrapper.find('button').at(1).simulate('click');
        
        const textoP = wrapper.find('h2').text().trim();
        
        expect(textoP).toBe('10');
    });

    test('Debe de disminuir el boton en 1', () => {
        wrapper.find('button').at(0).simulate('click');
        
        const textoP = wrapper.find('h2').text().trim();
        
        expect(textoP).toBe('9');
    });
*/
});