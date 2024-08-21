import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/3d-filament.png"
          title="Design and Implementation of a Closed-Loop System for Recycling Plastic Bottles into High-Quality 3D Printer Filament"
          description="
          • Engineered Arduino code to automate the recycling process, seamlessly integrating hardware and software for efficient production. \n
• Developed a Next.js-based e-commerce platform, facilitating the creation and management of stores for selling 3D printer filament, attracting interest from 2 government body for large-scale development.\n
• Collaborated with a multidisciplinary team of 11 engineers, resulting in a top 5 placement out of 120 teams in the Science and Technology school and securing an A+ in the course."
        />
        <ProjectCard
          src="/movie-app.jpg"  
          title="CineSphere"
          description="• Developed a discovery app that allows users to explore trending films, watch trailers, and view ratings, all within a seamless and user-friendly interface.
• Implemented Clean Architecture and Test-Driven Development (TDD) principles in Flutter, leading to a 40% reduction in bug occurrences and ensuring a maintainable and scalable codebase.
• Integrated Firebase for authentication, providing secure access for over 500 active users, while using Bloc for state management to deliver a smooth and responsive user experience."
        />
        <ProjectCard
          src="/peerlink.png"
          title="Peer Link"
          description="• Designed a mentoring platform that facilitated over 100+ personalized sessions, connecting students with experienced mentors and enhancing academic support.

• Constructed the frontend using React and Redux, leading to a 30% increase in user retention through a user-centric interface and seamless navigation.
• Integrated Firebase for real-time communication and data storage, ensuring seamless scalability and security, resulting in top 10 finalist placement out of 200+ teams in the A2SV Hackathon."
        />
      </div>
    </div>
  );
};

export default Projects;