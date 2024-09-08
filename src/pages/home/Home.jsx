import { useState } from 'react'
import ExploreMenu from '../../Components/Exploremenu/ExploreMenu'
import Header from '../../Components/Header/Header'
import './home.css'
import FoodDisplay from '../../Components/foodDisplay/FoodDisplay'
import AppDown from '../../Components/Appdownload/AppDown'
export default function Home() {
    const [category , setCategory] = useState('All')
    return(
        <div>
            <Header/>
            <ExploreMenu category={category} 
            setCategory={setCategory}/>
            <FoodDisplay category ={category}/>
            <AppDown/>
        </div>
    )
};
