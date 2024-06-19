import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Dattatraya, a passionate Full Stack Java developer with a keen eye for Full Stack Java
        . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          [BCS], [Pune University], [2020-2023] <br />
          {/* [Degree/Certification],
          [Institution], [Year] [Relevant Course], [Platform/Institution],
          [Year] */}
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
        Programming languages: JAVA,
SQL, JAVASCRIPT, HTML, CSS,
BOOTSTRAP, REACT JS <br />
Database: MYSQL <br />
Web frameworks: Spring Boot,
Hibernate <br />
Tools: Eclipse, Visual Studio Code
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          [Java Developer Intern], [YESS INFOTECH PVT.LTD. ,
            PUNE, MAHARASHTRA], [7/2023 - 2/2024] [Worked as part of a team on Java Full Stack
development projects.
Assisted in implementing RESTful APIs and database
interactions.
Collaborated with senior developers and learned best
practices in Java backend development.
          {/* ] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions] */}
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          [Full Stack Java Development], [YESS INFOTECH PVT.LTD.], [7/2023 - 2/2024] [Full Stack Java Development Internship Certificate],
          [YESS INFOTECH PVT.LTD. ,
            PUNE, MAHARASHTRA], [7/2023 - 2/2024]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative [software Development] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
