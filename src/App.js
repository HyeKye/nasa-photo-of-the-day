import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

import NasaPhoto from "./Components/NasaPhoto";

const dummyData = {
  date: "2022-08-19",
  explanation: "Saturn is the most distant planet of the Solar System easily visible to the unaided eye. With this extraordinary, long-term astro-imaging project begun in 1993, you can follow the ringed gas giant for one Saturn year as it wanders once around the ecliptic plane, finishing a single orbit around the Sun by 2022. Constructed from individual images made over 29 Earth years, the split panorama is centered along the ecliptic and crossed by the plane of our Milky Way galaxy. Saturn's position in 1993 is at the right side, upper panel in the constellation Capricornus and progresses toward the left. It returns to the spot in Capricornus at left in the lower panel in 2022. The consistent imaging shows Saturn appears slightly brighter during the years 2000-2005 and 2015-2019, periods when its beautiful rings were tilted more face-on to planet Earth.",
  hdurl: "https://apod.nasa.gov/apod/image/2208/Saturn1993-2022Lb.jpg",
  title: "Saturn: 1993 - 2022",
}

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      { data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;



