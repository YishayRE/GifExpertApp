import React, { Fragment, useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({defaultCategory = []}) => {
//solo si jamas cambia
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategory);

    //console.log(categories)

    return (
        <Fragment>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
            
                /*
                    categories.map(category => { <GifGrid />
                        return <li key={category}>{category}</li>;
                    })
                */
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp;