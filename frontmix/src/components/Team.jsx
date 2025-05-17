import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch('/restApi.json')
      .then(res => res.json())
      .then(json => {
        const fetchedData = json.data?.[0]?.ourTeam || [];
        setTeam(fetchedData);
      })
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">MEET OUR TEAM</h1>
          <p>The Culinary Artists Behind Your Extraordinary Dining Experience</p>
        </div>
        <div className="team_container">
          {team.length > 0 ? (
            team.map((element) => (
              <div className="team-card" key={element.id}>
                <div className="member-image">
                  <img src={element.image} alt={element.name} />
                  <div className="social-links">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                  </div>
                </div>
                <div className="member-info">
                  <h3>{element.name}</h3>
                  <span className="designation">{element.designation}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="loading">Preparing to introduce our team...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
