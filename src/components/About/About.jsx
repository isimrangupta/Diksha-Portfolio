import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.jpg'

const About = () => {
  return (
    <section
      id='about'
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-32">

      <div className="flex flex-col-reverse  md:flex-row justify-between items-center gap-2.5 ">
        {/* Left Side */}
        <div className="md:w-1/2 md:text-left mt-8 md:mt-0 ">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-2xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Diksha Gupta
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-3xl sm:text-2xl md:text-4xl font-semibold mb-4 text-[#c4b5fd] drop-shadow-md leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                'Frontend Developer',
                'React Developer',
                'UI Developer'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>

          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed text-justify">
            I am a front-end developer with a solid foundation in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React. My passion for user interface design inspired me to focus deeply on front-end development, where I enjoy building clean, responsive, and interactive web applications. I have completed a full-stack development course from PW Skills, which introduced me to both front-end and back-end technologies. To strengthen my front-end skills, I have built several practice projects, including a food ordering website using React. I am eager to start my professional journey and apply my skills to create user-friendly digital experiences.
          </p>

          {/* Resume Button */}
          <a
            href='/Diksha_gupta_resume.pdf'
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

           {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Diksha Gupta"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>

    </section>
  )
}

export default About;
