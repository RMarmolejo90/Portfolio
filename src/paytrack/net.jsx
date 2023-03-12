

import React, { useState, useEffect } from 'react'
import Select from 'react-select';

export default function Net(props) {
    const grossPay = props.grossPay
    
    // state for the select deductions bar, checks for stored state in local storage
    // deductionState is the localStorage key - deductionRate is the state

    const storedDeductions = localStorage.getItem('deductionState');
    const defaultDeductionRate = 0.8;
    
    const [deductionRate, setDeductionRate] = useState(() => {
      try {
        return storedDeductions ? JSON.parse(storedDeductions) : defaultDeductionRate;
      } catch (error) {
        console.error('Error parsing deduction rate:', error);
        return defaultDeductionRate;
      }
    });

    // to update local storage when the select bar options are changed
    useEffect(() => {
        localStorage.setItem('deductionState', JSON.stringify(deductionRate));
        console.log("stored deductions: ", storedDeductions);
    }, [deductionRate]);


    const [netPay, setNetPay] = useState(0);
  
    useEffect(() => {
      setNetPay(grossPay * deductionRate);
      localStorage.setItem('netPay', netPay);
    }, [grossPay, deductionRate]);
  
    

//handles the state and local storage for select bar placeholder

    const [deductionsLabel, setDeductionsLabel] = useState(
        () => {
            const storedLabel = localStorage.getItem('placeholderText');
            return storedLabel ? JSON.parse(storedLabel) : "Default 20%"
        }
    )

    useEffect(
        () => {
            const jsonLabel = JSON.stringify(deductionsLabel);
            localStorage.setItem('placeholderText', jsonLabel);
        }, [deductionsLabel]
    )
   
   function handleDeductionRate(data){
       setDeductionRate(data.value);
       setDefDeductions(data.value);
       setDeductionsLabel(data.label);
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

    // trying new version - add local storage deduction state - sets default to the last choice, or 20% option
   
    
    const deductionDefault = localStorage.getItem('deductions');
    const defaultOption = deductionOptions[5].value;
    
    useEffect(
        () => {
            localStorage.setItem('deductions', JSON.stringify(defDeductions));
        }, [deductionRate]
    );
    const [defDeductions, setDefDeductions] = useState(
        () => {
            try {
                return deductionDefault ? JSON.parse(deductionDefault) : defaultOption;
            } catch (error) {
                console.error('error parsing the deductionDefault', error);
                return defaultOption;
            }
        }
    )
    
    return (
      <div className='p-6 flex flex-row justify-center items-center'>
        <label htmlFor="deductions">Deductions Rate</label>
        <div className='p-6'>
          <Select 
            defaultValue={deductionDefault}
            title = "change deduction rate"
            placeholder={deductionsLabel}
            options = {deductionOptions}
            onChange = {handleDeductionRate}
          />
        </div>
      </div>
    )
  }
  
