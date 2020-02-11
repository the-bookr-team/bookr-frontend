import React from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";

const TeamMember = props => {
  return (
    <div className="team-member">
      <div className="team-member-img">
        <img src={props.member.photo} alt={props.member.name} />
      </div>

      <div className="team-member__details">
        <h2>{props.member.name}</h2>
        <h3>{props.member.role}</h3>

        <p>{props.member.bio}</p>

        <div className="social-links">
          <a
            className="github"
            href={props.member.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub color="none" fill="gray" />
          </a>
          <a
            className="linked-in"
            href={props.member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin color="none" fill="gray" />
          </a>
          <a
            className="twitter"
            href={props.member.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter color="none" fill="gray" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
