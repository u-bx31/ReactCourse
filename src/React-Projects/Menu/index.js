import React, { useState, useEffect } from 'react';
import Menu from './Menu'
import Categories from './Categorie'
import Data from './data'
import OffCanvasExample from './OffCanvas';
const allCat = ['all', ...new Set(Data.map((c) => c.category))]


const Index = () => {
    const [menu, SetMenu] = useState(Data);
    const [itmes, setItmes] = useState([]);
    const [categories, setCategories] = useState(allCat)
    const [togle, setTgole] = useState(false);

    const filterItem = (category) => {

        if (category === 'all') {
            setItmes(Data)
        }
        else {
            const NewItems = menu.filter((item) => item.category === category)
            setItmes(NewItems);
        }
    }


    useEffect(() => {
        document.body.style.background = 'rgba(49, 49, 49, 1)'
        setItmes(menu)
    }, [])
    return (
        <main>
            <div className='d-sm-block d-flex justify-content-between align-items-center' >
                <h2 className='text-white'>
                    Menu
                    <div className='c-hr mx-auto'></div>
                </h2>
                <OffCanvasExample placement='end' data={categories} filterItem={filterItem}/>
            </div>
            <Categories data={categories} filterItem={filterItem} />
            <div className="row row-cols-sm-2 c-row">
                <Menu data={itmes} />
            </div>
        </main>

    );
}

export default Index;