import React, { useState, useEffect } from 'react';
import Layout from "./components/Layout";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import EmployeeCardList from "./components/EmployeeCardList";
import Footer from "./components/Footer";
//import employees from "./data/employees.json";
import API from "./utils/API";

function App() {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sorted, setSorted] = useState(false);
    const [ data, setEmployees ] = useState([]);

    useEffect(() => {

            API.getUsers()
                .then(response => {
                    console.log(response.data.results);
                    setEmployees(response.data.results);
                })
                .catch(err => console.log(err))

    },[])

    function handleSearchTerm(event)  {
        event.preventDefault();
        setSearchTerm(event.target.value)
    }

    function handleSortByName(event) {
        event.preventDefault();
        // sort array ascending or descending by first name
        if (!sorted) {
            setEmployees(data.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1));
            setSorted(true);
        } else {
            setEmployees(data.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1));
            setSorted(false);
        }
    }

    function handleSortByDept(event) {
        event.preventDefault();
        // sort array ascending or descending by dept name
        if (!sorted) {
            setEmployees(data.sort((a, b) => (a.department > b.department) ? 1 : -1));
            setSorted(true);
        } else {
            setEmployees(data.sort((a, b) => (a.department > b.department) ? -11 : 1));
            setSorted(false);
        }
    }

    // the filteredEmployees variable only stores employee names that start with with the matching string you type
    const filteredEmployees = data.filter(employee => employee.name.first.toLowerCase().startsWith(searchTerm.toLowerCase()));
    return (
        <div>
            <Header/>
            <Layout>
                <h1 className="title text-5xl text-gray-800 mt-16">Employee Directory</h1>
                <p className="mb-16 text-md">Search for an employee or sort by Name or Category.</p>
                {/*the handleSearchTerm method and searchTerm state get passed down to the Navigation component via props with the onSearch and searchTerm props*/}
                <Navigation
                    onSearch={handleSearchTerm}
                    searchTerm={searchTerm}
                    handleSortByName={handleSortByName}
                    //handleSortByDept={handleSortByDept}
                />
                {/* the employees array gets the filteredEmployees data via the data prop */}
                <EmployeeCardList data={filteredEmployees}/>
                <Footer/>
            </Layout>
        </div>
    )
}

export default App;
