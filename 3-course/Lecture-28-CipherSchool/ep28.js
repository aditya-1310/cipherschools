
// import {useEffect, useState} from "react";
// import WeatherRow from "./components/WeatherRow";
// import WeatherSummary from "./components/WeatherSummary";
// const fetchCoordinates=(callback)=>{
  
//   navigator.geolocation.getCurrentPosition(({coords:{latitude , longitude}})=>{
//     callback(latitude,longitude)
//   },(err)=>console.error(err)
// );
// }
// const WeatherPage =()=>{.
//   const [todayWeather,setTodayWeather]=useState({});
//   const [weekWeather, setWeather]= useState([]);
//   const [isCslsius, setIsCelcius]= useState(true);
//   const isDay = todayWeather.isDay ?? true;
//   useEffect(()=>{
//     fetchCoordinates(async(latitude,longitude)=>{
//     const weatherInfo= await getWeather({latitude, longitude});
//     convertToStateVariable(weatherInfo)
//     });
//   },[]);

// const convertToStateVariable = (tempWeekWeather)=> {
//   let fetchedWeatherInfo=[];
//   for (let i=0; i<tempWeekWeather.daily.time.length; i++){
//     fetchedWeatherInfo.push({
//       date:new Date(tempWeekWeather.daily.time[i]),
//       maxTemperature: tempweekWeather.daily.temperature_2m_max[i],
//       minTemperature: tempweekWeather.daily.temperature_2m_min[i],
//       weatherCode: tempweekWeather.daily.weathercode[i],
//     })
//   }
//   setWeekWeather(fetchedWeatherInfo);
//   let currentWeather = tempWeekWeather.current_weather;
//   currentWeather.time = new Date(currentWeather.time);
//   currentWeather.isDay === 1 ? true: false;
//   delete currentWeather.is_day;
//   currentWeather.weatherCode = currentWeather.weathercode;
//   delete currentWeather.weathercode;
//   setTodayWeather(currentWeather);
// };
// if(!weekweather.length){
//   return<p>loading</p>
// }
//   return(
//     <div className={isDay ? "app":"app dark"}>
//       <h1 className="my-heading">Weather</h1>
//        <button className="ui icon button" onClick={()=>{
//         setIsCelcius(!isCelcius);
//      }} style={float:"right"}>{isCelcius?"F": "C"}</button>
//       <div>
//         <WeatherSummary currentWeather={currentWeather}isCelcius={isCelcius}/>
//         <table className={`ui very basic table${!isDay ? "dark": ""}`}>
//           <thead className={`table-custom${!isDay ? "dark": ""}`}>
//             <tr>
//               <th>Date</th>
//               <th>Temperature</th>
//               <th>Type</th>
//             </tr>
//           </thead>
//           <tbody className="table-custom">  
//             {weekWeather.map((weather)=>{
//               (<WeatherRow weather={weather} isCelcius={isCelcius} key={weather.date}/>)
//             })}
//           </tbody>
//       </div>
//     </div>
//   )
// }
// export default WeatherPage;

// import "./App.css";
// import WeatherPage from ""./pages/WeatherPage";

// function App(){
//   return (
//     <div className="App">
//       <WeatherPage/>
//     </div>
//   );
// }
// export defualt App;

// import {convertToFarhenheit} from "../weatherUtil" ;
// const WeatherSummary=({currentWeather:{temperature,weather}},isCelcius)=>{
//   return(
//     <div>
//       <h1>{isCelcius ? `${temperature}C` : `${convertToFarhenheit(maxtemperature) F}{""}`} | {getWeatherTypeFromCode(weathercode)}{""}</h1>
//     </div>
//   );
// };
// export defaut WeatherSummary;

// const dateFormatter=new Intl.DateTimeFormat("en-IN",{month:"short",day:"numeric",year:2-digit});
// const formatDate=(date)=>dateFormatter.format(date);
// const WeatherRow=({weather:{date,maxTemperature,minTemperature,weatherCode},isCelcius,})=>{
//   return(
//     <tr>
//       <td>{formatDate(date)}</td>
//       <td>H: {isCelcius ? `${maxTemperature} C` : `${convertToFarhenheit(maxtemperature) F}{""}`} - L: {isCelcius ? `${minTemperature} C` : `${convertToFarhenheitmin(temperature) F}</td>
//       <td>{getWeatherTypeFromCode(weatherCode  )}</td>
//     </tr>
//   )
// }
// export default WeatherRow;

// import Axios from "axios";
// const WEATHER_API_URL="https://apiopen-meteo.com/v1/forecast";
// const convertDate=(date)=>{
//   const year= date.getFullYear();
//   const month= date.getMonth() + 1<=9 ? `0${date.getMonth() + 1}`: date.getMonth() + 1;
//   const day= date.getDate() <=9 ? `0${date.getDAte()}`: date.getDate();
//   return `${year}-${month}-${day}`
// }
// const getWeather = async({latitude,longitude})=>{
//   const currentDate = new Date();
//   const startDate = new Date(startDate.currentxDate(currentDate.getDate() + 1));
//   const {data: weatheInfo} = await Axios.get(WEATHER_API_URL),{
//     params:{
//       latitude, longitude, current_weather: true, timezone:"IST", daily:["temperature_2m_max","temperature_2m_min","weathercode"],start_date:convertDate(startDate),end_date:convertDate(new Date()satrtDate.setDate.getDate() + 7),
//     },
//   };
//   return weatherInfo.data
// };
// export default getWeather;

// const convertToFarhenheit = (celciusTemp) =>(return((celciusTemp*9)/5+32).toFixed(1));
// const getWeatherTypeFromCode = {code}=> wmoWeatherCode.get(code);
// export{convertToFarhenheit};
