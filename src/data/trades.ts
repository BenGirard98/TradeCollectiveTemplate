import aviationImg from "../assets/images/Aviation.jpg";
import constructionImg from "../assets/images/Construction.jpg";
import firefightingImg from "../assets/images/Firefighting.jpg";
import plumbingImg from "../assets/images/Plumbing.jpg";
import solarImg from "../assets/images/Solar.jpg";
import weldingImg from "../assets/images/Welding.jpg";
import HVACImg from "../assets/images/HVAC.jpg";
import policeImg from "../assets/images/Police.jpg";
import automotiveImg from "../assets/images/Automotive.jpg";

import { Trade } from "../types/Trade";

const policeTradeData = {
  title: "Public Safety (Law Enforcement)",
  startingSalary: "$83,566 - $125,351 (effective Jan 1, 2024)",
  currentHireNeeds: "X",
  collectiveLeaders: [
    "Lixil Corporation (Jim O’Neil)",
    "Local 130 Plumbers Union (Tony Rottman)",
  ],
  unionLeaders: [],
  careerPossibilities: {
    entrySalary: "$83,566",
    experiencedSalary: "$125,351",
    seniorSalary: "N/A",
  },
  requirements: [
    "U.S. citizen or permanent resident",
    "No felony or misdemeanor convictions in accordance with 50 ILCS 705/6.1",
    "Valid state-issued driver’s license with a safe driving record",
    "Between 21 and 35 years of age at the time of employment (age exemptions for prior service)",
    "High school diploma or GED and completion of 60 college credit hours",
    "Valid P.O.W.E.R. Test card issued within the past 12 months of April 17, 2023",
    "Valid Firearm Owner Identification card or ability to obtain one",
  ],
  certifications: [
    "P.O.W.E.R. Test Certification",
    "Full-time sworn law enforcement officer certification from the Illinois Law Enforcement Training and Standards Board or reciprocal state training board",
  ],
  process: [
    "Passing score on the written exam (entry-level officers)",
    "Structured oral interview and writing assessment",
    "Complete background investigation, polygraph, and psychological assessment",
    "Certification by the Evanston Public Safety Civil Service Commission",
  ],
  requiredDocumentation: [
    "Copy of U.S. citizenship or permanent resident status",
    "Copy of valid driver’s license",
    "Copy of social security card",
    "Copy of high school diploma or GED certificate",
    "Copy of official college/university transcripts showing completion of at least 60 credit hours",
    "Copy of valid P.O.W.E.R. Test card issued within the past 12 months of April 17, 2023",
  ],
  preferredDocumentation: [
    "Copy of Military Discharge Form DD-214 (if applicable)",
    "Proof of residency in Evanston, IL (driver’s license or State ID)",
    "Certification as a full-time sworn law enforcement officer",
    "Proof of current employment as a full-time sworn law enforcement officer",
  ],
  salaryBenefits: {
    healthInsurance: "Health, Dental, Vision Insurance",
    retirementPlan: "457 Deferred Compensation Plan",
    additionalBenefits: [
      "Annual Education Incentive: $2,000",
      "Uniform Allowance: $1,250 annually",
      "Fitness Incentive: $500 annually",
      "Longevity Pay",
      "Off-duty overtime opportunities at 1.5x rate",
      "11 Paid Holidays and 3 Floating Holidays per year",
      "Compensatory Accrual: Bank up to 500 hours",
      "No residency or geographical boundary requirement",
    ],
  },
  careerPathways: [
    {
      name: "ETHS Courses",
      description:
        "Recommended high school courses such as Algebra, Geometry, Physics, Thermodynamics, and Computer Sciences",
      link: "https://example.com/eths-courses",
    },
    {
      name: "Oakton College (Des Plaines, IL)",
      description:
        "Degrees and certifications in related fields, 11 miles from ETHS",
      link: "https://example.com/oakton",
    },
    {
      name: "Trade/Vocational Schools",
      description:
        "Programs in Chicago offering certifications and training for public safety careers, within 10 miles of ETHS",
      link: "https://example.com/trade-schools",
    },
    {
      name: "Community Colleges",
      description:
        "Additional colleges in the Chicago area offering degrees and certifications for public safety, within 10 miles of ETHS",
      link: "https://example.com/community-colleges",
    },
    {
      name: "Local Businesses",
      description:
        "Businesses offering training programs and apprenticeships for public safety careers within 10 miles of ETHS",
      link: "https://example.com/local-businesses",
    },
  ],
  localBusinesses: [
    {
      organization: "Business A",
      contact: "Contact A",
      email: "emailA@example.com",
      phone: "555-555-5555",
      hiringNeeds: "X",
    },
    {
      organization: "Business B",
      contact: "Contact B",
      email: "emailB@example.com",
      phone: "555-555-5556",
      hiringNeeds: "X",
    },
    {
      organization: "Business C",
      contact: "Contact C",
      email: "emailC@example.com",
      phone: "555-555-5557",
      hiringNeeds: "X",
    },
  ],
  totalHiresRequired: "X",
};
const automotiveTradeData = {
  title: "Automotive",
  startingSalary: "$45,000 - $120,000",
  currentHireNeeds: "50",
  collectiveLeaders: [
    "Autobarn (Richard Fisher)",
    "Patrick Group",
    "Napleton",
    "McGrath Subaru Evanston",
    "Loeber Motors",
    "Tenneco – Lake Forest",
    "NAPA Distributor (Paul Mitsui)",
    "The Community Garage (John Santiago)",
    "Lakeshore Recycling Services Fleet (LRS)",
    "IAMAW Mechanics Local Union 701 – Aurora",
    "US AutoForce – Skokie",
  ],
  unionLeaders: ["IAMAW Mechanics Local Union 701 – Aurora"],
  careerPossibilities: {
    entrySalary: "$45,000",
    experiencedSalary: "$120,000",
    seniorSalary: "N/A",
  },
  requirements: [
    "High school diploma/GED",
    "Electives in Automotive Technology and Automotive Mechanics (optional)",
    "Post-secondary education in Automotive Technology (Vocational school or certifications)",
    "On-the-job experience as a technician trainee, helper, or lubricant worker",
    "Certified Automotive Technician (requires passing ASE Certification testing with 2 years of experience)",
  ],
  certifications: [
    "Automotive Service Excellence (ASE) Certification",
    "Master Technician ASE Certification (tests A1-A8)",
    "ASE Certification valid for 5 years (recertification required every 5 years)",
  ],
  careerPathways: [
    {
      name: "ETHS: Automotive Maintenance (Elective)",
      link: "https://example.com/eths-automotive-maintenance",
    },
    {
      name: "Oakton College: Automotive Technology A.A.S",
      link: "https://example.com/oakton-automotive-aas",
    },
    {
      name: "Universal Technical Institute (Lisle, IL)",
      link: "https://example.com/uti",
    },
    {
      name: "Lincoln Technical Institute (Melrose, IL)",
      link: "https://example.com/lincoln-tech",
    },
    {
      name: "Moraine Valley Community College: Automotive Technology",
      link: "https://example.com/moraine-automotive",
    },
    {
      name: "Garage Gurus (Skokie)",
      link: "https://example.com/garage-gurus",
    },
    {
      name: "Penn Foster Career Diplomas (Remote)",
      link: "https://example.com/penn-foster",
    },
  ],
  programs:
    "Hands-on training programs and certifications from institutions like Oakton College, Universal Technical Institute, and Lincoln Technical Institute prepare candidates for ASE certification and advanced skills. Apprenticeship opportunities at Moraine Valley Community College and specialized training from Garage Gurus and Penn Foster provide entry and advanced career options.",
  localBusinesses: [
    {
      organization: "Autobarn",
      contact: "Richard Fisher",
      email: "info@autobarn.com",
      hiringNeeds: "X",
    },
    {
      organization: "The Community Garage",
      contact: "John Santiago",
      email: "john@communitygarage.com",
      hiringNeeds: "X",
    },
    {
      organization: "Tenneco – Lake Forest",
      contact: "Support Team",
      email: "support@tenneco.com",
      hiringNeeds: "X",
    },
    {
      organization: "US AutoForce – Skokie",
      contact: "Hiring Manager",
      email: "careers@usautoforce.com",
      hiringNeeds: "X",
    },
    {
      organization: "Lakeshore Recycling Services Fleet (LRS)",
      contact: "Recruitment Team",
      email: "recruitment@lrs.com",
      hiringNeeds: "X",
    },
  ],
  totalHiresRequired: "50",
};
const plumbingTradeData = {
  title: "Plumbing",
  startingSalary: "$35,000 - $60,000",
  currentHireNeeds: "150",
  collectiveLeaders: [
    "Lixil Corporation (Jim O’Neil)",
    "Local 130 Plumbers Union (Tony Rottman)",
  ],
  unionLeaders: ["Local 130 Plumbers Union", "Pipefitters Local 597"],
  careerPossibilities: {
    entrySalary: "$35,000",
    experiencedSalary: "$100,000",
    seniorSalary: "$110,000",
  },
  requirements: [
    "High school diploma/GED",
    "Driver's license",
    "Vocational training program (optional)",
    "4-5 year apprenticeship",
    "Pass state licensing exam (written and practical portions)",
  ],
  certifications: [
    "Plumbing License",
    "Apprenticeship Completion Certificate",
    "Continuing Education Credits (for licensed plumbers)",
  ],
  careerPathways: [
    {
      name: "Oakton College: Air Conditioning, Heating, and Refrigeration Technology",
      link: "https://example.com/oakton-program",
    },
    {
      name: "Chicago Plumber Local Union 130 Apprenticeship",
      link: "https://example.com/union-130-program",
    },
    {
      name: "Star Tech Academy (American Vintage Home)",
      link: "https://example.com/star-tech-academy",
    },
    {
      name: "Chicago Pipefitters Local Union 597 Apprenticeship",
      link: "https://example.com/union-597-program",
    },
  ],
  programs:
    "Apprenticeships and paid training programs offered by Local 130 Plumbers Union, Star Tech Academy, and Pipefitters Local Union 597. Online programs like Penn Foster and Stratford Career Institute provide entry-level training.",
  localBusinesses: [
    {
      organization: "Lixil Corporation",
      contact: "Jim O’Neil",
      email: "james.oneil@lixil.com",
      hiringNeeds: "X",
    },
    {
      organization: "Hart, Travers and Associates",
      contact: "Chris Travers",
      email: "chris@htareps.com",
      hiringNeeds: "X",
    },
    {
      organization: "Mid-Continent",
      contact: "Jason Romano",
      email: "JRomano@mcmsl.com",
      hiringNeeds: "X",
    },
    {
      organization: "Inland Sales Group",
      contact: "Brian Yelton",
      email: "Brian.Yelton@InlandSalesGroup.com",
      hiringNeeds: "X",
    },
    {
      organization: "Herkowski Stickler & Associates",
      contact: "Phil Traynor",
      email: "PhilT@hsarep.com",
      hiringNeeds: "X",
    },
  ],
  totalHiresRequired: "150",
};
const hvacTradeData = {
  title: "HVAC",
  startingSalary: "$30,000 - $40,000",
  currentHireNeeds: 10,
  collectiveLeaders: [
    "Able Distributors (Michael + Dan Bleier)",
    "John J. Cahill Plumbing, Heating & Air Conditioning",
    "NorthStar Heating & Air Conditioning",
  ],
  unionLeaders: [
    "Chicago Pipefitters Local Union 597 - Chicago",
    "Sheet Metal Workers' Local 73",
  ],
  careerPossibilities: {
    entrySalary:
      "$30,000 - $40,000 (Starting/Junior HVAC Technician, Apprenticeship)",
    experiencedSalary:
      "$50,000 - $60,000 (Experienced HVAC Technician, HVAC Installer)",
    seniorSalary:
      "$80,000 - $90,000 (Contractor, Project Manager, Estimator, Service Technician)",
  },
  requirements: ["High school diploma or GED", "EPA 608 Certification"],
  certifications: [
    "NATE Ready to Work Certification",
    "NATE HVAC Support Technician Certification",
    "NATE Certification Traditional Pathway & CHP-5 Certification",
    "Senior Level Efficiency Analyst Certification",
    "EPA 608 Universal Certification (Core, Type 1, Type 2, Type 3)",
  ],
  careerPathways: [
    {
      name: "Evanston Explore Program",
      link: "https://example.com/evanston-program",
    },
    {
      name: "Oakton College: Air Conditioning, Heating, and Refrigeration Technology",
      link: "https://catalog.oakton.edu/career-programs-pathways/air-conditioning-heating-refrigeration-technology",
    },
    {
      name: "Sheet Metal Workers' Local 73 Apprenticeship Program",
      description:
        "Hands-on training with 1,360 classroom hours and paid on-the-job training.",
    },
    {
      name: "Kennedy-King College (City Colleges of Chicago)",
      link: "https://www.ccc.edu/colleges/kennedy/Pages/default.aspx",
    },
    {
      name: "Harper College: Heating, Ventilation, Air Conditioning and Refrigeration (HVAC/R)",
      link: "https://www.harpercollege.edu",
    },
    {
      name: "College of DuPage: HVACR Program",
      link: "https://www.cod.edu",
    },
    {
      name: "Chicago Pipefitters Local Union 597 Apprenticeship Program",
      description:
        "Five-year paid apprenticeship with classroom and on-the-job training.",
    },
    {
      name: "HVAC Technical Institute",
      description: "33-48 weeks of HVAC training, day or evening classes.",
    },
  ],
  programs: [
    {
      name: "American Vintage (Pipefitters Local Union 597)",
      description: "Apprenticeships available through unions like Local 597.",
    },
    {
      name: "Oakton College: Air Conditioning, Heating, and Refrigeration Technology",
      link: "https://catalog.oakton.edu/career-programs-pathways/air-conditioning-heating-refrigeration-technology",
    },
    {
      name: "Sheet Metal Workers' Local 73 Apprenticeship Program",
      description:
        "Hands-on training with 1,360 classroom hours and paid on-the-job training.",
    },
  ],
  localBusinesses: [
    {
      organization: "American Vintage",
      contact: "JR. Elmar",
      email: "",
      phone: "847-251-5271",
      hiringNeeds: "X",
    },
    {
      organization: "AA Service",
      contact: "Shawn Mansfield",
      email: "",
      phone: "847-875-6506",
      hiringNeeds: "X",
    },
    {
      organization: "Northern Air Systems",
      contact: "Bob Ropke",
      email: "",
      phone: "847-223-8877",
      hiringNeeds: "X",
    },
    {
      organization: "Shavitz HVAC",
      contact: "Bronson",
      email: "",
      phone: "224-588-0554",
      hiringNeeds: "X",
    },
    {
      organization: "AirFlow",
      contact: "Yoram",
      email: "",
      phone: "847-732-7899",
      hiringNeeds: "X",
    },
    {
      organization: "Five Star",
      contact: "Mark P",
      email: "",
      phone: "773-386-6993",
      hiringNeeds: "X",
    },
    {
      organization: "ABT",
      contact: "Dan Rasyby",
      email: "",
      phone: "773-655-7783",
      hiringNeeds: "X",
    },
    {
      organization: "RH Witt",
      contact: "Pat",
      email: "",
      phone: "847-207-9153",
      hiringNeeds: "X",
    },
    {
      organization: "TRG",
      contact: "Will",
      email: "",
      phone: "312-420-9005",
      hiringNeeds: "X",
    },
  ],
  totalHiresRequired: "XX",
};

const fireTradeData = {
  title: "Fire",
  startingSalary: "$57,120 - $75,000",
  currentHireNeeds: 4,
  collectiveLeaders: ["EFD (Paul Polep)", "MABAS Division 3"],
  unionLeaders: [],
  careerPossibilities: {
    entrySalary: "$40,000",
    experiencedSalary: "$94,000",
    seniorSalary: "N/A",
  },
  requirements: [
    "21 yrs. Minimum Age",
    "Point System",
    "CPAT/Ladder Climb Certification/Written Test",
    "Personal Group Interview (Dress to Impress/Eye Contact/Strong Handshake)",
  ],
  certifications: [
    "EMT Certification",
    "State of Illinois Firefighter II Certification",
    "Paramedic License",
    "Hazardous Material Operations Certification",
    "Class A Non-Commercial Driver's License",
  ],
  careerPathways: [
    {
      name: "Evanston Explore Program",
      link: "https://example.com/evanston-program",
    },
    {
      name: "Oakton College: Fire Science Technology A.A.S.",
      link: "https://catalog.oakton.edu/career-programs-pathways/fire-science-technology/#degreestext",
    },
  ],
  programs:
    "Paid on-call hiring (Northfield & Mt. Prospect). Hiring based on the point system beginning with the Explore Program, Boy Scouts of America, and Evanston Lifeguard Program in high school. Previous trade experience is a major advantage in hiring.",
  localBusinesses: [
    {
      organization: "Org A",
      contact: "John Doe",
      email: "john@example.com",
      hiringNeeds: "3",
    },
    {
      organization: "Org B",
      contact: "Jane Smith",
      email: "jane@example.com",
      hiringNeeds: "5",
    },
  ],
  totalHiresRequired: "XX",
};
const aviationTradeData = {
  title: "Aviation",
  startingSalary: "$40,000 - $50,000",
  currentHireNeeds: "TBD",
  collectiveLeaders: [
    "FAA (Federal Aviation Administration)",
    "Aviation Institute of Maintenance",
  ],
  unionLeaders: [
    "Air Line Pilots Association (ALPA)",
    "Aircraft Mechanics Fraternal Association (AMFA)",
  ],
  careerPossibilities: {
    entrySalary: "$40,000",
    experiencedSalary: "$400,000",
    seniorSalary: "N/A",
  },
  requirements: [
    "HS diploma/GED",
    "Aviation Mechanic: FAA A&P certification",
    "Pilots: Private, Commercial, and Airline Transport Pilot Licenses",
    "Air Traffic Controller: FAA AT-CTI training or relevant degree and certification",
    "Aircraft Dispatchers: FAA Aircraft Dispatcher Certificate",
    "Flight Attendants: Airline training, FAA certification for specific aircraft",
  ],
  certifications: [
    "FAA Airframe and Powerplant Certification (A&P)",
    "Private Pilot License (PPL)",
    "Commercial Pilot License (CPL)",
    "Airline Transport Pilot License (ATPL)",
    "FAA Aircraft Dispatcher Certificate",
    "FAA Flight Attendant Certification",
  ],
  careerPathways: [
    {
      name: "Aviation Institute of Maintenance (Chicago Campus)",
      link: "https://example.com/aviation-institute",
    },
    {
      name: "Olive-Harvey City Colleges (Chicago, IL)",
      link: "https://example.com/olive-harvey",
    },
    {
      name: "Lewis University (Romeoville, IL)",
      link: "https://example.com/lewis-university",
    },
    {
      name: "Rock Valley College (Rockford, IL)",
      link: "https://example.com/rock-valley",
    },
    {
      name: "US Navy - Pensacola Training",
      link: "https://example.com/us-navy-aviation",
    },
  ],
  programs:
    "Training programs include Aviation Maintenance, Pilot Training, Aircraft Dispatcher Certification, and Flight Attendant Training. Schools and certifications align with FAA requirements. Career pathways include college degrees, military training, and professional schools.",
  localBusinesses: [
    {
      organization: "O’Hare Airport",
      contact: "Jane Doe",
      email: "jane.doe@ohare.com",
      hiringNeeds: "Various positions available",
    },
    {
      organization: "Chicago Executive Flight School",
      contact: "John Smith",
      email: "john.smith@cefs.com",
      hiringNeeds: "3 instructors and dispatchers",
    },
  ],
  totalHiresRequired: "TBD",
};

export const trades: Trade[] = [
  {
    image: aviationImg,
    title: "Aviation",
    cardDescription:
      "Operate aircraft and ensure safe, efficient air travel operations.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Aviation!"),
    data: aviationTradeData,
  },
  {
    image: HVACImg,
    title: "HVAC",
    cardDescription:
      "Install and maintain heating, cooling, and ventilation systems.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore HVAC!"),
    data: hvacTradeData,
  },
  {
    image: firefightingImg,
    title: "Fire Fighter",
    cardDescription:
      "Respond to emergencies, extinguish fires, and protect lives and property.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Fire Fighting!"),
    data: fireTradeData,
  },
  {
    image: plumbingImg,
    title: "Plumbing",
    cardDescription:
      "Install, repair, and maintain piping systems for water and gas",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Plumbing!"),
    data: plumbingTradeData,
  },
  {
    image: automotiveImg,
    title: "Automotive",
    cardDescription:
      "Diagnose, repair, and maintain vehicles for optimal performance.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Automotive!"),
    data: automotiveTradeData,
  },
  {
    image: policeImg,
    title: "Police",
    cardDescription:
      "Protect and serve communities by enforcing laws and ensuring safety.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Police!"),
    data: policeTradeData,
  },
];
