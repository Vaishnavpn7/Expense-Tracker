import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";

const BASE_URL = "http://localhost:8000/";

const token = localStorage.getItem('token'); // Retrieve the user token from local storage


const config = {
  headers: {
    Authorization: `Token ${token}`, // Include the user token in the headers
  },
};

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [profile, setProfile] = useState([])
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);





  const getProfile = async () =>{

    const response = await axios.get(`${BASE_URL}/profile`, config)
    setProfile(response.data)   
    console.log('profile',response.data);
  }
  // getProfile()

  // console.log('profile',getProfile())

/////////////Calculate incomes

  const addIncome = async (income) => {
  
      const response = await axios.post(`${BASE_URL}income/add/`, income, config)      
      .catch((err) =>{
        setError(err.response.data.description)
        console.log('error',err.response.data.description);

        console.log(response);
    })

    getIncomes()
  };


  const getIncomes = async () =>{

    const response = await axios.get(`${BASE_URL}/income`, config)
    setIncomes(response.data)   
    // console.log(response.data);
  }


  const deleteIncome = async (id) =>{

    const response = await axios.delete(`${BASE_URL}income/delete/${id}/`, config);
    console.log(response);

    getIncomes()

  }

  const totalIncome = () => {
    var total = 0;
    incomes.forEach((income) => {
      total += parseFloat(income.amount); // Convert to a number using parseFloat
    });
    return total;
  };




  //////////Calculate Expenses
  const addExpenses = async (expense) => {

      const response = await axios.post(`${BASE_URL}expense/add/`, expense, config)
      .catch((err) =>{
        setError(err.response.data.description)
        console.log(response);
    })

    getExpenses()

  };


  const getExpenses = async () =>{

    const response = await axios.get(`${BASE_URL}/expense`, config)
    setExpenses(response.data)   
    console.log(response.data);
  }


  const deleteExpense = async (id) =>{

    const response = await axios.delete(`${BASE_URL}expense/delete/${id}/`, config);
    console.log(response);

    getExpenses()

  }

  const totalExpense = () => {
    var total = 0;
    expenses.forEach((expense) => {
      total += parseFloat(expense.amount); // Convert to a number using parseFloat
    });
    return total;
  };

  const totalBalance = () =>{

    return totalIncome() - totalExpense()
  }

  const transactionHistory = () => {
    const history = [...incomes, ...expenses]
    history.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
    })
    return history.slice(0, 3)

  }

  const TotalHistory = () => {
    const history = [...incomes, ...expenses]
    history.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
    })
    return history

  }

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        totalIncome,
        addExpenses,
        getExpenses,
        deleteExpense,
        totalExpense,
        expenses,
        getProfile,
        profile,
        setProfile,
        totalBalance,
        transactionHistory,
        error,
        setError,
        TotalHistory,

        

      }} >
      {children}
    </GlobalContext.Provider>
  );
};


export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}