import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { options, url } from "../../api/api";
import "./Search.scss";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);
    const handleChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    const loadOptions = async (inputValue) => {
        try {
            console.log(inputValue);
            const response = await fetch(`${url}/cities?minPopulation=1000&namePrefix=${inputValue}`, options);
            const result = await response.json();
            console.log(result);
            return {
                options: result.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    };
                }),
            };
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AsyncPaginate
            placeholder="Search For Cities"
            debounceTimeout={1111}
            value={search}
            onChange={handleChange}
            loadOptions={loadOptions}
        ></AsyncPaginate>
    );
};

export default Search;
