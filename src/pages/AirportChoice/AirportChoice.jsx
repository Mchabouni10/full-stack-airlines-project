// // Import necessary libraries and styles
// import React, { useState, useEffect } from 'react';
// import './AirportChoice.css'

// function AirportChoice() {
//   const [airports, setAirports] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     // Fetch data from MongoDB
//     const apiUrl = `http://localhost:3000/api/airports?limit=05${searchQuery ? `&name=${searchQuery}` : ''}`;

//     fetch(apiUrl) 
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Fetched Data:', data);
//         setAirports(data);
//       })
//       .catch((error) => console.error('Error fetching airports:', error));
//   }, [searchQuery]);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = () => {
//     // Trigger a new fetch when the search button is clicked
//     fetch(`http://localhost:3000/api/airports?name=${searchQuery}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Fetched Data:', data);
//         setAirports(data);
//       })
//       .catch((error) => console.error('Error fetching airports:', error));
//   };

//   return (
//     <div className='airport-choice-container'>
//       <h1>Airport Information</h1>
//       <div className="search-bar">
//         <label htmlFor="search">Search by Name:</label>
//         <input
//           type="text"
//           id="search"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           placeholder="Enter airport name..."
//         />
//         <button onClick={handleSearchSubmit}>Search</button>
//       </div>
//       <table className="airport-choice-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Ident</th>
//             <th>Type</th>
//             <th>Name</th>
//             <th>Latitude</th>
//             <th>Longitude</th>
//             <th>Elevation</th>
//             <th>ISO Country</th>
//             <th>ISO Region</th>
//             <th>Municipality</th>
//             <th>GPS Code</th>
//             <th>Local Code</th>
//             <th>Home Link</th>
//           </tr>
//         </thead>
//         <tbody>
//           {airports.map((airport) => (
//             <tr key={airport._id}>
//               <td>{airport.id}</td>
//               <td>{airport.ident}</td>
//               <td>{airport.type}</td>
//               <td>{airport.name}</td>
//               <td>{airport.latitude_deg}</td>
//               <td>{airport.longitude_deg}</td>
//               <td>{airport.elevation_ft}</td>
//               <td>{airport.iso_country}</td>
//               <td>{airport.iso_region}</td>
//               <td>{airport.municipality}</td>
//               <td>{airport.gps_code}</td>
//               <td>{airport.local_code}</td>
//               <td>
//                 {airport.home_link && (
//                   <a href={airport.home_link} target="_blank" rel="noopener noreferrer">
//                     {airport.home_link}
//                   </a>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AirportChoice;


