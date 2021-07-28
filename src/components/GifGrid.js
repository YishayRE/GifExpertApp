//?lo comentado es sin usar un custom Hook
import React, { Fragment} from 'react'
//import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

const GifGrid = ({category}) => {
    /*
    const [Images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(setImages);
    }, [category]);
*/
    //getGifs();

    const {data, loading} = useFetchGifs(category);
    
    return (
        <Fragment>
            <h3 className="animate__animated animate__bounce">{category}</h3>
            
            {/*loading ? 'Cargando...' : 'Data Cargada'*/}
            {loading && <p>Loading</p>}

            <div className="card-grid">
                {
                    data.map(img =>
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
            
            {/*
            <div className="card-grid">
                {
                    Images.map(img =>
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
            */}
        </Fragment>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
