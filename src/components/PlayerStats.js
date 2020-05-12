import React, {useEffect, useState} from "react";
import Stats from "./Stats";
const PlayerStats = () => {
    const APP_KEY = "8QtFCkvCoSfAgYOFa48vRQJBhqG3";
    const [stats,setStats] = useState([]);
    const [search,setSearch] = useState("");
    const [query,setQuery] = useState("");

    useEffect(() => {
        getStats();

    }, [query]);

    const getStats = async () => {
        const response = await fetch(`http://cricapi.com/api/playerStats?pid=253802&apikey=A3XepSFHxjfOGXABymTAtvdK1BE2`);
        const data = await response.json();
        setStats(data.pid);
        console.log(data);
    };

    const updateSearch = e =>{
        setSearch(e.target.value);
    };

    const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit"> Submit</button>
            </form>
        
           
            
        </div>
    )
}

export default PlayerStats