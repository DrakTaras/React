import { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import { ItemCard } from './Card'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

export function ProductList(props) {
    const { dataURL, category } = props; // Предполагаем, что вы передаете category в качестве пропса
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState("default");

    const handleSortChange = (event) => {
        setSortType(event.target.value);
    };

    const sortData = () => {
        const sortedData = [...data];
        
        if (sortType === "priceLowToHigh") {
            sortedData.sort((a, b) => a.price - b.price);
        } else if (sortType === "priceHighToLow") {
            sortedData.sort((a, b) => b.price - a.price);
        } else if (sortType === "titleAZ") {
            sortedData.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortType === "titleZA") {
            sortedData.sort((a, b) => b.title.localeCompare(a.title));
        }
      
        setData(sortedData);
    };

    useEffect(() => {
        sortData();
    }, [sortType]);

    useEffect(() => {
        fetch(dataURL)
            .then((response) => response.json())
            .then((responseJson) => setData(responseJson))
            .catch((error) => {
                console.error(error);
            });
    }, [dataURL]);

    const getFavourites = () => {
        return JSON.parse(localStorage.getItem('favourites')) || [];
    };

    const setFavourites = (favourites) => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    };

    const addToFavourites = (item) => {
        let favourites = [...getFavourites(), item];
        setFavourites(favourites);
    };

    const removeFromFavourites = (item) => {
        let favourites = getFavourites().filter((favourite) => favourite.id !== item.id);
        setFavourites(favourites);
    };

    const isFavourite = (item) => {
        return getFavourites().some((favourite) => favourite.id === item.id);
    };

    return (
        <Paper id="Paper" sx={{ mt: 5 }}>
          <div className="sortContainer">
            <Typography variant="body2" color="text.secondary">
              {category}
            </Typography>
            <Select value={sortType} onChange={handleSortChange}>
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
              <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
              <MenuItem value="titleAZ">Title: A to Z</MenuItem>
              <MenuItem value="titleZA">Title: Z to A</MenuItem>
            </Select>
          </div>
          {data.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              isFavourite={isFavourite}
              addToFavourites={addToFavourites}
              removeFromFavourites={removeFromFavourites}
            />
          ))}
        </Paper>
      );
      
}
