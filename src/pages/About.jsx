import React from "react";
import Lay from "../component/Lay";

const teamMembers = [
  { name : "Arijit Ghosh", role: "Team Leader / Fullstack Developer", image: "https://randomuser.me/api/portraits/men/10.jpg" },
  { name: "Bikash Santra", role: "Fullstack Developer", image: "https://randomuser.me/api/portraits/men/20.jpg" },
  { name: "Anupam Acharya", role: "Front-end Developer", image: "https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-1/299917328_589637959467929_7483330855221798637_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_ohc=IpoSItKVZfEQ7kNvgG8cvSW&_nc_oc=AdiiqpGVq-UeOxypVZA7qb76aZJR0aIuBTOGO8Eon-HDeLyrCofeEffnNIUTMertO0pv8X-R7d7kOS8N8atZWNl0&_nc_zt=24&_nc_ht=scontent.fixc4-1.fna&_nc_gid=A1EaYLsd3P5BEv4oWLXfv0c&oh=00_AYC4oJ1iBVx6qV-6Cm_hoEZrwn1FierK1hfFzh_dzWXeKA&oe=67BE48C9" },
  { name: "Niladri Sekhar Raut", role: "Fullstack Developer", image: "https://randomuser.me/api/portraits/women/40.jpg" },
  { name: "Arup Mapa", role: "Backend Developer", image: "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-1/415304307_898849865184034_1335162228661835198_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UoPRBI60ewQQ7kNvgEsWRLv&_nc_oc=Adj2wZTWpJdrS_2afRS3bLDOxwhvP-vF8oLsB7Z7O3_JpDs4Runj_FPKnqCZqg_FUxZ9m3aNYnylEH_6A4w0Y9L1&_nc_zt=24&_nc_ht=scontent.fixc4-3.fna&_nc_gid=AApgA7yki_mwUn62BWQMJEP&oh=00_AYAhDnn8PBRY_BJ6v8ZqOaAqPUlfmdz03BPKBWtobGLagw&oe=67BE5B6E" },
];
const About = () => {
  return (
    <Lay>
    <div className="bg-white min-h-screen">
      {/* Navbar */}


      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-12 py-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          GrowUpNow – AI-Powered Fitness Tracking!
          </h1>
          <p className="text-gray-600 text-lg">
          At GrowUpNow, we use cutting-edge AI with MoveNet and TensorFlow.js to 
          track your squats and push-ups in real-time. Our advanced motion analysis
           ensures accurate form detection and performance insights, helping you improve your workouts efficiently.
           Stay motivated and take your fitness to the next level with GrowUpNow!
          </p>
        </div>

        {/* Image Tiles */}
<div className="md:w-1/2 flex space-x-4 mt-10 md:mt-0 ml-10" >
  <div className="flex flex-col space-y-4">
    <img
      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=160&q=80"
      alt="Meeting"
      className="rounded-xl shadow-lg"
    />
    <img
      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=160&q=80"
      alt="Workspace"
      className="rounded-xl shadow-lg"
    />
  </div>
  <div className="flex flex-col space-y-4 mt-6">
    <img
      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=140&h=150&q=80"
      alt="Teamwork"
      className="rounded-xl shadow-lg"
    />
    <img
      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=140&h=150&q=80"
      alt="Startup"
      className="rounded-xl shadow-lg"
    />
    <img
      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=140&h=150&q=80"
      alt="Coworking"
      className="rounded-xl shadow-lg"
    />
  </div>
</div>

      </div>


      <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Text and Stats Section */}
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left - Text Content */}
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our mission
            </h2>
            <p className="text-gray-600 mt-4">
            At GrowUpNow, our mission is to make the world healthier and stronger by empowering people of all ages to take control of their fitness and well-being. We believe that everyone—regardless of age or experience—deserves the tools to improve their time management, awareness, and overall health.
            </p>
            <p className="text-gray-600 mt-4">
            Using advanced AI-powered motion tracking with MoveNet and TensorFlow.js, we help individuals track their squats and push-ups with precision, ensuring better form, progress, and motivation. Our goal is to make fitness accessible, engaging, and a natural part of daily life.

Together, we grow stronger. Together, we GrowUpNow!
            </p>
          </div>

          {/* Right - Statistics */}
          <div className="md:w-1/3 mt-10 md:mt-0 ml-5">
            <div className="space-y-5">
              <div>
                <p className="text-3xl font-bold text-gray-900">44 million</p>
                <p className="text-gray-500">Transactions every 24 hours</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">$119 trillion</p>
                <p className="text-gray-500">Assets under holding</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">46,000</p>
                <p className="text-gray-500">New users annually</p>
              </div>
            </div>
          </div>
        </div>

        {/* Large Image Section */}
        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="Teamwork"
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>
    </div>


 
    <div className="bg-white py-16 px-6 md:px-12">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Our Values at GrowUpNow</h2>
        <p className="text-gray-600 mt-4 text-lg">
        At GrowUpNow, we believe in more than just fitness—we believe in a mindset that drives continuous improvement, collaboration, and well-being.
         Our core values define who we are and how we help you grow stronger every day.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-gray-700">
        {/* Value Item */}
        <div>
          <h3 className="font-semibold text-lg">Be world-class</h3>
          <p className="mt-2 text-gray-600">
          We strive for excellence in everything we do. From cutting-edge technology to user experience,
           we aim to set the highest standards in fitness tracking.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Share Knowledge Freely</h3>
          <p className="mt-2 text-gray-600">
          Growth happens when knowledge is shared. We foster a community where insights, 
          techniques, and improvements are open for everyone to benefit.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Always learning</h3>
          <p className="mt-2 text-gray-600">
          Fitness and technology evolve, and so do we. We embrace innovation, feedback, 
          and new ideas to make fitness tracking smarter and more effective.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Be supportive</h3>
          <p className="mt-2 text-gray-600">
          Every fitness journey is unique. We encourage, uplift, and support each other, 
          making sure everyone feels empowered to reach their goals.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Take responsibility</h3>
          <p className="mt-2 text-gray-600">
            We take ownership of our actions, results, and progress.
             Whether it's improving our AI accuracy or helping users stay accountable, responsibility is at our core.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Enjoy the Journey</h3>
          <p className="mt-2 text-gray-600">
          Fitness isn’t just about pushing limits—it’s also about balance. We believe in celebrating progress,
           enjoying downtime, and making well-being a lifelong pursuit.
          </p>
        </div>
      </div>

      {/* Trusted By Section */}
      <p className="text-center text-gray-900 font-semibold text-lg mt-12">
        Trusted by the world’s most innovative teams
      </p>
    </div>
    <div className="bg-gray-50 py-16 px-6 md:px-12">
       <div className="text-center max-w-2xl mx-auto">
         <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
         <p className="text-gray-600 mt-4 text-lg">
           We’re a dynamic group of individuals who are passionate about what we do.
         </p>
       </div>
 
       {/* Team Members Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 text-center">
         {teamMembers.map((member, index) => (
           <div key={index} className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg">
             <img
               src={member.image}
               alt={member.name}
               className="w-24 h-24 rounded-full border border-gray-300 shadow-md"
             />
             <h3 className="mt-4 font-semibold text-lg text-gray-900">{member.name}</h3>
             <p className="text-gray-600 text-sm">{member.role}</p>
           </div>
         ))}
       </div>
     </div>
    </div>
    </Lay>
  );
};

export default About