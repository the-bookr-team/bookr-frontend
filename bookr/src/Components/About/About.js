import React from 'react';
import justin from '../../assets/justin.jpg';
import cedric from '../../assets/cedric.jpg';
import dan from '../../assets/dan.jpg';
import cesare from '../../assets/cesare.jpg';
import TeamMember from './TeamMember';

const teamMembers = [
  {
    name: "Cedric 'The Wizard' Amaya",
    role: 'Front-end Developer',
    bio: "I'm a Computer Science major and software developer with a great passion for solving problems with the use of code. I love working day-to-day on projects that require multidisciplinary skill sets and solving complex issues that make the lives of others easier.",
    photo: cedric,
    github: 'https://github.com/cedricium',
    linkedin: 'https://www.linkedin.com/in/cedricamaya/',
    twitter: 'https://twitter.com/CedricAmaya'
  },
  {
    name: 'Justin Andrade',
    role: 'Backend Developer',
    bio: "",
    photo: justin,
    github: '',
    linkedin: '',
    twitter: ''
  },
  {
    name: "Dan 'The Dev' Sample",
    role: 'Front-end Developer',
    bio: "I am a full stack web developer student at Lambda School. I am married and we have a handsome 1 year old baby boy. I love coding and solving everyday problems with the power of technology. I also enjoy the art of creating and love to work on UI/UX projects.",
    photo: dan,
    github: 'https://github.com/DanSample',
    linkedin: 'https://www.linkedin.com/in/dan-sample-89897b183/',
    twitter: 'https://twitter.com/DanTheDev3'
  },
  {
    name: 'Cesare Ferrari',
    role: 'Front-end Developer',
    bio: "I am Cesare Ferrari, a professional web designer and developer based in Du Bois, Pennsylvania.  I work with agencies and designers to help them build profitable web sites and web applications.",
    photo: cesare,
    github: 'https://github.com/cesareferrari',
    linkedin: 'https://www.linkedin.com/in/cesare-ferrari-web-development/',
    twitter: 'https://twitter.com/cesareferrari'
  }
]

const About = () => {
  return(
    <div>
    About page
    <br/>

    {teamMembers.map(member => <TeamMember member={member} />)}

    </div>
  )
}

export default About;
