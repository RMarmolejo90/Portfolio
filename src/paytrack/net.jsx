import React, { useState, useEffect } from 'react'
import Select from 'react-select';

export default function Net(props) {
    const grossPay = props.grossPay

    // state for the select deductions bar, checks for stored state in local storage
    // deductionState is the localStorage key - deductionRate is the state
    const [deductionRate, setDeductionRate] = useState(() => {
        const storedDeductions = localStorage.getItem("deductionState");
        console.log("stored deductions: ", storedDeductions);
        return storedDeductions ? JSON.parse(localStorage.getItem(storedDeductions)) : "0.8";
    })

    // to update local storage when the select bar options are changed
    useEffect(() => {
        localStorage.setItem("deductionState", JSON.stringify(deductionRate));
    }, [deductionRate]);


    const [netPay, setNetPay] = useState(0);
  
    useEffect(() => {
      setNetPay(grossPay * deductionRate);
    }, [grossPay, deductionRate]);
  
    // This sets the default deduction option to 20% on first render
    useEffect(() => {
      const defaultOption = deductionOptions.find(option => option.id === 6);
      setDeductionRate(defaultOption.value);
    }, []);
    
  
    function handleDeductionRate(data){
      setDeductionRate(data.value);
    }
  
    const deductionOptions = [
      {id: 1, value:0.90, label:"10%"},
      {id: 2, value:0.88, label:"12%"},
      {id: 3, value:0.86, label:"14%"},
      {id: 4, value:0.84, label:"16%"},
      {id: 5, value:0.82, label:"18%"},
      {id: 6, value:0.80, label:"20%"},
      {id: 7, value:0.78, label:"22%"},
      {id: 8, value:0.76, label:"24%"},
      {id: 9, value:0.74, label:"26%"},
      {id: 10, value:0.72, label:"28%"},
      {id: 11, value:0.70, label:"30%"}
    ];
  
    return (
      <div>
        <h1>Todays Net Pay: {netPay.toFixed(3)}</h1>
        <label htmlFor="deductions">Deductions Rate</label>
        <div className='dropdown-wrapper'>
          <Select 
            defaultValue={deductionOptions[5]}
            title = "change deduction rate"
            className='dropdown-options'
            placeholder={deductionRate ? deductionRate : "Deductions Rate"}
            options = {deductionOptions}
            onChange = {handleDeductionRate}
          />
        </div>
      </div>
    )
  }
  
