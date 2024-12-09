import React from "react";
import "./TradeDetails.css";

interface TradeDetailsProps {
  title: string;
  startingSalary: string;
  currentHireNeeds: number;
  collectiveLeaders: string[];
  unionLeaders: string[];
  careerPossibilities: {
    entrySalary: string;
    experiencedSalary: string;
    seniorSalary: string;
  };
  requirements: string[];
  certifications: string[];
  careerPathways: {
    name: string;
    link: string;
  }[];
  programs: string;
  localBusinesses: {
    organization: string;
    contact: string;
    email: string;
    hiringNeeds: string;
  }[];
  totalHiresRequired: string;
}

const TradeDetails: React.FC<TradeDetailsProps> = ({
  title,
  startingSalary,
  currentHireNeeds,
  collectiveLeaders,
  unionLeaders,
  careerPossibilities,
  requirements,
  certifications,
  careerPathways,
  programs,
  localBusinesses,
  totalHiresRequired,
}) => {
  try {
    return (
      <div className="trade-details">
        <h1 className="trade-title">{title}</h1>
        <p>
          <strong>Starting Salary:</strong> {startingSalary}
        </p>
        <p>
          <strong>Current Hire Needs:</strong> {currentHireNeeds}
        </p>
        <section>
          <h2>Collective Leaders</h2>
          <ul>
            {collectiveLeaders.map((leader, index) => (
              <li key={index}>{leader}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Union Leaders</h2>
          {unionLeaders.length > 0 ? (
            <ul>
              {unionLeaders.map((leader, index) => (
                <li key={index}>{leader}</li>
              ))}
            </ul>
          ) : (
            <p>None provided</p>
          )}
        </section>
        <section>
          <h2>Career Possibilities</h2>
          <p>
            <strong>Entry Salary:</strong> {careerPossibilities.entrySalary}
          </p>
          <p>
            <strong>Experienced Salary:</strong>{" "}
            {careerPossibilities.experiencedSalary}
          </p>
          <p>
            <strong>Senior Salary:</strong> {careerPossibilities.seniorSalary}
          </p>
        </section>
        <section>
          <h2>Requirements</h2>
          <ul>
            {requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Certifications</h2>
          <ul>
            {certifications.map((certification, index) => (
              <li key={index}>{certification}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Career Pathways</h2>
          <ul>
            {careerPathways.map((pathway, index) => (
              <li key={index}>
                <a
                  href={pathway.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pathway.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Programs</h2>
          <p>{programs}</p>
        </section>
        <section>
          <h2>Local Businesses</h2>
          {localBusinesses.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Organization</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Hiring Needs</th>
                </tr>
              </thead>
              <tbody>
                {localBusinesses.map((business, index) => (
                  <tr key={index}>
                    <td>{business.organization}</td>
                    <td>{business.contact}</td>
                    <td>{business.email}</td>
                    <td>{business.hiringNeeds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No local businesses provided</p>
          )}
        </section>
        <p>
          <strong>Total Hires Required:</strong> {totalHiresRequired}
        </p>
      </div>
    );
  } catch (error) {
    return <div>Sample data incomplete resulting in display error</div>;
  }
};

export default TradeDetails;
