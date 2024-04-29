import React from 'react';
import { IoLogoVenmo } from "react-icons/io5";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './Shop.css';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import frenchfries from './images/image.png';

const Shop = () => {  
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (<>
        <div>
          <div className="shop-description">
            <div className='temp-text-container'>
              <h1>
                
              </h1>
       
              Fundraising event info <br /><br />
              UFFSA Apparel forms <a href='https://sites.google.com/view/uffsa-apparel/'>[OLD SITE]</a> <br /><br />
              Threads of Hope / <a href='http://uffsahaiyan.weebly.com/'>Philanthropy efforts</a> <br /><br />
              
              <a href='https://account.venmo.com/u/uffsafinance' target="_blank" rel="noopener noreferrer">
                  <button className='shop-button'>
                      <IoLogoVenmo /> Venmo
                  </button>
              </a>
              <p>
                buy my stuff!
              </p>
            </div>
            {/* <img src={frenchfries} alt='Fries'/> */}
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>


          <div className="big-box">
            <div className="vid-container">
             {/* <iframe className='test'
            width= "600"
            height="400"
            src="https://www.youtube.com/embed/2Z_-xJjXxMs?list=PLW7zUERvigZXW2YyMk9sSP_2PI9vFlJmB"
            title="FSA Promo 2020"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          /> */}


            </div>
            <div className = "jare">
                <p>hi im lynette blahaahh</p>
            </div>
            <div className = "bear"> 
                <p>hemingway</p>
            </div>
          </div>

          <div className = "button-container">

            <button className= "lynette-button">
              <p>hi</p>
              <a href="https://en.wikipedia.org/wiki/Super_weaner" target="_blank" rel="noreferrer">jdoiji</a>
            </button>
          </div>
   


          </div>
        </div>
    </> 
  );
}

export default Shop;