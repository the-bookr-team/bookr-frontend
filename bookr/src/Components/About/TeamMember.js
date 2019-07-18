import React from 'react';
import { GitHub, Linkedin, Twitter } from 'react-feather';
import { Link } from 'react-router-dom';

const TeamMember = props => {
  return(
    <div className="team-member">
      <div className="team-member-img">
        <img src={props.member.photo} alt={props.member.name} />
      </div>

      <div className="team-member__details">
        <h2>{props.member.name}</h2>
        <h3>{props.member.role}</h3>

        <p>{props.member.bio}</p>

        <div className="social-links">
          <a href={props.member.github}><GitHub color="none" fill="gray" /></a>
          <a href={props.member.linkedin}><Linkedin color="none" fill="gray" /></a>
          <a href={props.member.twitter}><Twitter color="none" fill="gray" /></a>
        </div>

      </div>
    </div>
  )
}

export default TeamMember;
