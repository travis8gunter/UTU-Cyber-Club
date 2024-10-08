import React, { Component } from 'react';
//import homeImage from '../photos/home2.jpeg';
import '../styles/home.scss';
import bsidesImage from '../photos/bsides2.jpeg';
import nclImage from '../photos/ncl.jpeg';
import ccdcImage from '../photos/CCDC.png';
import nclSpring2024 from '../photos/NCL-spring2024.png'
import AccomplishmentItem from '../pages/accomplish.js';
import homeImage from '../photos/backgroundBison.jpg';
import clubNight from '../photos/clubnight.jpg';
import learnImage from "../photos/NCL-TEAM-2.jpeg";
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";


export default class Home extends Component {
  render() {
    return (
        <div className="home-page">
        
        {/* Full header image */}
        <header className="h-screen flex flex-col gap-8 justify-center items-start bg-cover bg-center p-8" style={{backgroundImage: "url(" + homeImage + ")"}}>
          {/* <img src={homeImage} alt="UTU Cyber Club" /> */}
          <span class="bg-gray-900/50 p-12 flex flex-col gap-8 rounded-xl lg:w-1/3 md:w-1/2 backdrop-blur">
            <h2 class="text-2xl font-medium">Utah Tech University</h2>
            <h1 class="text-7xl font-bold">Cyber Security Club</h1>
            <small><a href="https://docs.google.com/forms/d/e/1FAIpQLSdFnnT9a0iQ_h4a5cOgFw6i-vzziSEJdc49_VSzyRmHn4oP7A/viewform?fbzx=-6038488573771462056">Mark Your Attendance</a></small>
          </span>
          
          <div class="arrow-container text-4xl self-center"><FaAngleDown /></div>
        </header>

        <section className="flex flex-col gap-12 items-center">

          {/* Meeting Time Section */}
          <div className="flex flex-col gap-8 justify-center items-center py-16 px-8">
            <h2 class="text-5xl font-bold">Meeting Time</h2>
            <small class="underline"><a class="underline" href="https://docs.google.com/forms/d/e/1FAIpQLSdFnnT9a0iQ_h4a5cOgFw6i-vzziSEJdc49_VSzyRmHn4oP7A/viewform?fbzx=-6038488573771462056">Mark Your Attendance</a></small>
            <p class="text-lg text-gray-300 text-center">Join us every Thursday at 7:00 PM in room 107 of the Smith building.</p>
          </div>
          {/* Accomplishments section */}
        </section>

        <section class="flex flex-col md:flex-row gap-12 md:gap-24 px-8 md:px-24 py-16 items-center">
          <div class="flex flex-col gap-8">

            <h2 class="text-5xl font-bold">Who We Are</h2>
            <p class="text-lg text-gray-300">The Utah Tech University Cyber Security Club is a community of students passionate about learning and practicing cybersecurity. We provide hands-on experience in areas like network defense, ethical hacking, and digital forensics to prepare members for exciting career opportunities. Open to all skill levels, our club focuses on real-world applications and staying ahead in this rapidly growing field.</p>
            
          </div>
          <img src={clubNight} alt="Club Night" class="rounded-lg lg:w-1/2 md:w-1/3 w-full" />
        </section>

        <section class="flex flex-col-reverse md:flex-row gap-12 md:gap-24 px-8 md:px-24 py-16 items-center">
          <img src={learnImage} alt="Top Down View of People at Desk" class="rounded-lg lg:w-1/2 md:w-1/3 w-full" />
          <div class="flex flex-col gap-4">
            <h2 class="text-5xl font-bold">What Do We Do</h2>
            <p class="text-lg text-gray-300">We engage in a variety of activities, including:</p>
            <ul class="list-disc text-lg pl-8 flex flex-col gap-2 text-gray-300">
            {/* Workshops and Training: Hands-on sessions led by experts and club members.
                Competitions: Participation in local and national cybersecurity competitions like Capture the Flag (CTF) and Collegiate Cyber Defense Competitions (CCDC).
                Guest Speakers: Hear from professionals in the industry about their experiences, career tips, and emerging trends in cybersecurity.
                Networking Opportunities: Connect with peers, mentors, and industry leaders. */}
              <li><b class="text-gray-200">Workshops and Training:</b> Hands-on sessions led by experts and club members.</li>
              <li><b class="text-gray-200">Competitions:</b> Participation in local and national cybersecurity competitions.</li>
              <li><b class="text-gray-200">Guest Speakers:</b> Hear from professionals in the industry about their experiences, career tips, and emerging trends in cybersecurity.</li>
              <li><b class="text-gray-200">Networking Opportunities:</b> Connect with peers, mentors, and industry leaders.</li>
            </ul>
          </div>
        </section>
        
        
        {/* Content below header image */}
        

        <div className='flex flex-col gap-12 items-center px-8 sm:px-24 py-20'>
          <h2 class="text-5xl font-bold text-center mb-4">Our Accomplishments!</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            <AccomplishmentItem 
              image={bsidesImage} 
              title="Bsides Fall 2023" 
              description="Placed 1st at the 2023 Bsides Cyber Team Competition. ( Click here to learn more ) " 
              text="Our team competed in the Bsides St George cyber security conference CTF competition and we won the competiton coming in 1st place!" 
              />
            <AccomplishmentItem 
              image={nclImage} 
              title="National Cyber League Fall 2023" 
              description="Top 3% of 4500+ teams in the 2023 fall team National Cyber League Competition. ( Click here to learn more )" 
              text="Our team competed in the National Cyber Leauge CTF Individual and Team competitions. We had 3 individuals placed in the top 3% of 8500+ players in the fall Individual Competition. Our Team placed top 3% in the team competition out of 4500+ teams! " 
            />
            <AccomplishmentItem 
              image={nclSpring2024} 
              title="National Cyber League Spring 2024." 
              description="Our team participated and placed top 66 of 4199 teams( Click here to learn more )" 
              text="Our team participated in the National Cyber League team and individual competitions in Spring 2024, and all our members placed in the top 1000 out of 7000 players during the individual competition and placed 66th place on the team. Through these competitions, we honed our skills in port scanning, digital forensics, network traffic analysis, log analysis, password cracking, open-source intelligence, and web application exploits. This experience provided valuable hands-on learning and teamwork, preparing us for real-world cybersecurity challenges." 
            />
            <AccomplishmentItem 
              image={ccdcImage} 
              title="Collegiate Cyber Defense Competition 2024." 
              description="Highlights from CCDC. ( Click here to learn more )" 
              text="Our team had the opportunity to compete in the Collegiate Cyber Defense Competition where we had different machines spanning from linux OS to Windows. We were tasked with hardening them and defending them in a small business simulation from a Professional Red Team! " 
            />
          </div>
        </div>
        <section className="join-now">
          <h2><NavLink to="/discord" className="join-link">Click Here To Join Now!</NavLink></h2>
        </section>
      </div>
    );
  }
}
