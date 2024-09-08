import { useContext } from 'react'
import './fooddisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import Fooditem from '../foodItem/Fooditem'

export default function FoodDisplay({category}) {
    const {food_list} =useContext(StoreContext)
    return(
        <div className='food-display' id='food-display'>
            <h2>Top dishes near to you</h2>
            <div className="food-display-list">
                {food_list.map((item ,index)=>{
                if (category==='All'|| category ===item.category){
                    
                    return <Fooditem key={index}
                    image={item.image}
                    id={item.id} name={item.name}
                    description={item.description}
                    price={item.price}/>
                }
            })}
            </div>
        </div>
    )
};
