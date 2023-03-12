
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency} = useContext(AppContext);
    const [budgetUpdated, setBudgetUpdated] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const limit = 20000

    const handelBudgetChange = (val) => {
        if (budgetUpdated > (limit - 1)) {
            alert("Budget cannot exceed "+ Location +" " + limit)
            setBudgetUpdated(limit);
        }
        else if (budgetUpdated < totalExpenses) {
                alert("Cannot reduce budget below spending ammount !");
                setBudgetUpdated(totalExpenses);
        }        
        else{
            setBudgetUpdated(val.target.value)
        }

    }


    return (
        <div className='alert alert-secondary'>
            <div className="input-group-prepend" >
            <span>Budget: {currency} </span>
            <input
              required="required"
              type="number"
              id="budget"
              value={budgetUpdated}
            //   style={{ marginLeft: "2rem", size: 10 }}
              onChange={(event) => handelBudgetChange(event)}
            ></input>
          </div>
        </div>
    );
};
export default Budget;