import '@testing-library/jest-dom';
import React from "react";
import { shallow } from "enzyme";

import AddCategory from "../../components/AddCategory";

describe('Pruebas en el componente AddCategory', () => {
    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe de mostrar <AddCategory/>', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    
    test('Debe cambiar el valor del input', () => {
        const input = wrapper.find('input');
        const value = 'One Punch';

        input.simulate('change', {target: {value}});
        //poco mas se puede hacer co el archivo como tal
        //?se debe modificar el original para ver cambios
    });

    test('No Debe postear la informacion el submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe llamar el setcategories y limpiar el texto', () => {
        const input = wrapper.find('input');
        const value = 'One Punch';

        input.simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');
    });
});