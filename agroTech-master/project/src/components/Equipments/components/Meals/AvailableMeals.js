import classes from "./AvailableMeals.module.css";
<<<<<<< HEAD
import MealItem from "./MealItems/MealItem";
import { useState } from "react";
import FilterByPrice from './FilterForm/FilterByPrice';
import FilterSearch from './FilterForm/FilterSearch';
import {useEffect} from "react";
const AvailableMeals = () => {
  const [SearchText,setSearchTest] = useState("");
  const SubmitSearch=(event)=>{
     event.preventDefault();
     console.log(SearchText);
  }
  const SearchOnChangeHandler=(e)=>{
        setSearchTest(e.target.value);
  }

  const [maxValue,setMaxValue] = useState(0);
  function MaxValueChangeHandler(e){
     setMaxValue(e.target.value);
  }
  function SubmitValue(event){
     event.preventDefault();
     console.log(maxValue);
  }

  const [Category,setCategory] = useState("");
  function SubmitCategory(event){
     event.preventDefualt();
     console.log(Category);
  }
  function CategoryChangeHandler(e){
     setCategory(e.target.value);
  }

  const [current_data,set_data]=useState([]);
  const mealsList = current_data.map((equipment) => (
    <MealItem
      key={equipment._id}
      id={equipment._id}
      name={equipment.Equipmentname}
      description={equipment.Description}
      price={10}
    ></MealItem>
  ));
    useEffect(() => {
      fetch("http://localhost:5000/equipments", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        // hint,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        set_data(data.data);
        if (data.status == "ok") {
          {};
        } else {alert("something went wrong")};
      });
    }, []);
  const fetchSearch = (event) => {
    console.log("yes");
    const d = { equip: SearchText}
    fetch("http://localhost:5000/searchE", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        d
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        set_data(data.data);
        if (data.status == "saved") {
          alert("Registration successfull");
        } else alert("something went wrong");
      });
  };
  const fetchPrice = (event) => {
    console.log("yes");
    fetch("http://localhost:5000/searchP", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        // hint,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        set_data(data.data);
        if (data.status == "saved") {
          alert("Registration successfull");
        } else alert("something went wrong");
      });
  };
=======
import EquipmentFiter from "./EquipmentFilter";
import MealItem from "./MealItems/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
// const fetchHandler = () => {};

const fetchHandler = (event) => {
  console.log("yes");
  fetch("http://localhost:5000/equipments", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      // hint,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.status == "saved") {
        alert("Registration successfull");
      } else alert("something went wrong");
    });
};

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));
>>>>>>> 92337f96e7f000497b5ac190f20e67ccf2b92974
  return (
    <div className={classes.row}>
      <div className={classes.column1}>
        <div className={classes.filter}>
<<<<<<< HEAD
        <div className={classes.card}>
         <fieldset className={classes.sortContainer}>
         <legend className={classes.heading}>Sort Items</legend>
           <FilterSearch onHandler={fetchSearch} OnSave={SubmitSearch} onChange={SearchOnChangeHandler} value={SearchText}/>
           <FilterByPrice OnSave={SubmitValue} onChange={MaxValueChangeHandler} onHandler={fetchPrice} value={maxValue}/> 
         </fieldset>
     </div>
=======
          <EquipmentFiter></EquipmentFiter>
>>>>>>> 92337f96e7f000497b5ac190f20e67ccf2b92974
        </div>
      </div>
      <div className={classes.column2}>
        <div className={classes.meals}>
          <div className={classes.row}>{mealsList}</div>
<<<<<<< HEAD
         
=======
          <button onClick={fetchHandler}>fetch</button>
>>>>>>> 92337f96e7f000497b5ac190f20e67ccf2b92974
        </div>
      </div>
    </div>
  );
};
export default AvailableMeals;
