import React, { useState } from "react";
import Job from "./job";
import en from "../locales/en.json"
import es from "../locales/es.json"

let idiom = en


const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 1250
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 1260
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 1270
    },
  ]);
  if(window.navigator.language === 'es-ES'){
    idiom=es
  }
  else{
    idiom=en
  }

  return (
   
    <div>
    
    
      <table className="table" >
        <thead className="thead-dark">
          <tr>
            
            <th scope="col">#</th>
            <th scope="col">{idiom.Position}</th>
            <th scope="col">{idiom.Company}</th>
            <th scope="col">{idiom.Salary}</th>
            <th scope="col">{idiom.City}</th>
            <th scope="col">{idiom.PublicationDate}</th>
            <th scope="col">{idiom.Views}</th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
