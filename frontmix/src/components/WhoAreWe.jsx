import React, { useEffect, useState } from 'react';

const WhoAreWe = () => {
  const [who, setWho] = useState([]);

  useEffect(() => {
    fetch('/restApi.json')
      .then(res => res.json())
      .then(json => {
        console.log('Fetched JSON:', json);
        const fetchedData = json.data?.[0]?.who_we_are || [];
        console.log('Parsed who_we_are:', fetchedData);
        setWho(fetchedData);
      })
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  return (
    <section className="who_are_we" id="who_are_we">
      <div className="container">
        <div className="text_banner">
          {who.length > 0 ? (
            who.slice(0,2).map((element) => (
              <div className="card" key={element.id}>
                <h1 style={{ fontWeight: "300" }} className="heading">{element.number}</h1>
                <p>{element.title}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="image_banner">
            <img src="/center.svg" alt="center" className="gradient_bg" />
            <img src="/whoweare.png" alt="who" />
        </div>
        <div className="text_banner">
          {who.length > 0 ? (
            who.slice(2).map((element) => (
              <div className="card" key={element.id}>
                <h1 style={{ fontWeight: "300" }} className="heading">{element.number}</h1>
                <p>{element.title}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
