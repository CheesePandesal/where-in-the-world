
import React, { useEffect, useState } from "react";
import Country from "./Country";
import axios from "axios";
const Countries = () => {
    const [countries, setCountries] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restfulcountries.com/api/v1/countries", {
          headers: {
            Authorization: `Bearer 975|DPlebNTUUg8yi726jdu788T8VDyTOSaDRFjsr1KS`
          }
        });
        setCountries(response.data.data);
        console.log(countries)
      } catch (error) {
        // Handle any errors here
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-8 lg:px-12 xl:grid-cols-4 2xl:grid-cols-5 pt-24">
        { countries && countries.map((country) => <Country key={country.capital} name={country.name} population={country.population} countryFlag={country.href.flag} capital={country.capital} continent={country.continent}/>)}
    </section>
  );
};

export default Countries;