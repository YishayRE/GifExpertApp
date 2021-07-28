import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en el componente GifGridItem', () => {
    test('Debe tener 10 gifs', async() => {
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);
    });
    
    test('Debe tener 0 gifs', async() => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    });
});