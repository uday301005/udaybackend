import React from 'react'
// import {data} from "../restApi.json"
import { useEffect, useState } from 'react';

const Qualities = () => {
  const [qualities, setQualities] = useState([]);

  useEffect(() => {
    fetch('/restApi.json')
      .then(res => res.json())
      .then(json => setQualities(json.data[0].ourQualities));
  }, []);

// const Qualities = () => {
  return (
    <section className="qualities" id="qualities">
      <div className="container">
        {
            // data[0].ourQualities
            qualities.map((element) =>  (
                <div className="card" key={element.id}>
                    <img src={element.image} alt={element.title} />
                    <p className="title">{element.title}</p>
                    <p className= "description">{element.description}</p>
                </div>
                )
            )
        }
      </div>
    </section>
  )
}

export default Qualities;
