import { useEffect, useState } from 'react';
import {Card} from './Components/Card';
import { getAreaFooditems, getAreaList  } from  './api/Services/Food'



function App() {
 const [fooditems, setfooditem] = useState([]);
    const [areas, setAreas] = useState([]);


    const fetchAreaList = async () =>{
      const response = await getAreaList ();
      if(response.data.meals && response.data.meals.length >0 ){
        setAreas(response.data.meals);
        fetchFoodItems(response.data.meals[0].strArea)
      }  
    }

    const fetchFoodItems = async (area) =>{
      const response =await getAreaFooditems (area);
      setfooditem(response.data.meals);

    }

    const handleAreaChange = (e) => fetchFoodItems(e.target.value);


   useEffect (() =>{
    fetchAreaList();

   }, [])
    

  return (
  <section className="container py-3">
    <div className="p-2 px-4 d-flex align-items-center justify-content-between bg-light rounded border border-muted">
     <select onChange={handleAreaChange} className="p-2 px-3 border border-muted">
        {
          areas.map(area =>(
             <option key={area.strArea} value={area.strArea}>
              {area.strArea}
              </option>))

        }
     </select>
     <div className="bg-dark p-3 px-4 text-white rounded" >
                        3</div>
    </div>
    <div className="row my-4">
     {
      fooditems.map (food =>(
        <div className="col-12 col-md-4">
        <Card image = {food.strMealThumb} title = {food.strMeal} />
      </div>

      ))
     }
    </div>
  </section>
  );
}

export default App;
