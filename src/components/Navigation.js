import React from "react";

function Navigation({ onSearch, searchTerm }) { // The two props coming down from the Navigation Component
    return (
        <div className="md:flex justify-between my-6">
            <div className="md:mb-0 mb-4">
                <button className="bg-white shadow text-gray-800 rounded px-8 py-1 mr-4">Name</button>
                <button className="bg-white shadow text-gray-800 rounded px-8 py-1">Dept</button>
            </div>
            <form>
                <input
                    value={searchTerm} // value attribute here keeps what you type in sync
                    onChange={onSearch} // the onChange is the event listening attribute that uses the onSearch prop method let state know there was a change
                    className="shadow pl-5 rounded"
                    type="text"
                    placeholder="search employee"/>
            </form>
        </div>
    )
}

export default Navigation;