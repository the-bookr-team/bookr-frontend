import React from 'react';

const TeamMember = props => {
  return(
    <div className="team-member">
      <img src={props.member.photo} alt={props.member.name} />
      <div className="team-member__details">
        <h2>{props.member.name}</h2>
        <h3>{props.member.role}</h3>

        <p>{props.member.bio}</p>

        <ul>
          <li>{props.member.github}</li>
          <li>{props.member.linkedin}</li>
          <li>{props.member.twitter}</li>
        </ul>

      </div>
    </div>
  )
}

export default TeamMember;
