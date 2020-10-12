import React, { useState } from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker} from "react-date-range";
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import { Link, useHistory } from 'react-router-dom';

//date picker component
function Search() {
    const history = useHistory();
    //managing state here 
    const[startDate, setStartDate] = useState(new Date());
    const[endDate, setEndDate] = useState(new Date());
    
    //this is something we have to do, this library got us to
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }
    
    //this is something we have to do, this library got us to
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        //this is something we have to do, this library got us to
        <div className="search">s
              <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
        <h2> 
            Number of guests
            <PeopleIcon />
        </h2>
        <input min={0} defaultValue={2} type="number"/>
        
        <Button onClick={() => history.push("/search")}>Airbnb </Button>
  
        </div>
    )
}

export default Search
