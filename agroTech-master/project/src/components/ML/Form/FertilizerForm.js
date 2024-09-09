import React, { useState } from "react";
import classes from './CropForm.module.css';
import Input from "../../Trading/Input";
function FertilizerForm() {
    const [enteredNirogenContent, setNitrogenContent] = useState("");
    const [enteredPhosphorusContent,setPhosphorusContent] = useState("");
    const [enteredPotassiumContent,setPotassiumContent] = useState(0);
    const [enteredPh, setPh] = useState("");
    const [enteredSoilType,setSoilType] = useState("");
    const [enteredCropType,setCropType] = useState("");
    const NitrogenContentChangeHandler = (event) => {
        setNitrogenContent(event.target.value);
    };
    const PhosphorusContentChangeHandler = (event) => {
        setPhosphorusContent(event.target.value);
    };
    const PotassiumContentChangeHandler = (event) => {
        setPotassiumContent(event.target.value);
    };
    const PhChangeHandler = (event) => {
        setPh(event.target.value);
    };
    const SoilTypeChangeHandler = (event) => {
        setSoilType(event.target.value);
    };
    const CropTypeChangeHandler = (event) => {
        setCropType(event.target.value);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        const ExpenseData = {
            nitrogen: enteredNirogenContent,
            phosphorus: enteredPhosphorusContent,
            potassium: enteredPotassiumContent,
            Ph: enteredPh,
            soiltype: enteredSoilType,
            croptype:enteredCropType,
 
        };
        console.log(ExpenseData);

        setNitrogenContent("");
        setPhosphorusContent("");
        setPotassiumContent("");
        setPh("");
        setCropType("");
        setSoilType("");
    };
    return (
        <div className={classes.card1}>
        <div className={classes.card}>
            <form onSubmit={submitHandler}>
            <div>
                <Input name="nitrogen" placeholder="Enter Nitrogen Content..." value={enteredNirogenContent} handler={NitrogenContentChangeHandler} type="number"></Input>
                <Input name="phosphorus" placeholder="Enter Phosphorus Content..." value={enteredPhosphorusContent} handler={PhosphorusContentChangeHandler} type="number"></Input>
                <Input name="potassium" placeholder="Enter Potassium Content..." value={enteredPotassiumContent} handler={PotassiumContentChangeHandler} type="number"></Input>
                <Input name="ph" placeholder="Enter Ph..." value={enteredPh} handler={PhChangeHandler} type="number"></Input>
                <Input name="soil" placeholder="Enter Soil Type..." value={enteredSoilType} handler={SoilTypeChangeHandler} type="text"></Input>
                <Input name="crop" placeholder="Enter Crop Type..." value={enteredCropType} handler={CropTypeChangeHandler} type="text"></Input>
                
                <button type="submit" className={classes.right}>Submit</button>
            </div>
             
            </form>
        </div>
        </div>
    );
}

export default FertilizerForm;