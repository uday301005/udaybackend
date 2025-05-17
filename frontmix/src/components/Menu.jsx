import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('/restApi.json')
      .then(res => res.json())
      .then(json => {
        console.log('Fetched JSON:', json);
        const fetchedData = json.data?.[0]?.dishes || [];
        console.log('Parsed menu:', fetchedData);
        setMenu(fetchedData);
      })
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR MENU</h1>
          <p>Discover our carefully curated menu featuring signature dishes crafted with passion and precision. Each plate tells a story of flavor and tradition.</p>
        </div>
        <div className="dishes_container">
          {menu.length > 0 ? (
            menu.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title || 'Dish Image'} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            ))
          ) : (
            <p>Loading dishes...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
