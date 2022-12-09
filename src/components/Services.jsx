import React from "react";
import banner from "../assets/services/services3.jpeg";
import data from "../data/services.js";
import ServicesCard from "./ServiceCard";

const Services = () => {
  return (
    <>
      <div className="bg-gray-100 py-4 dark:bg-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-1 mt-[40px]">
          <img
            src={banner}
            alt=""
            className="mb-3 w-screen h-[70vh] object-cover object-center"
          />
          <div className="mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-wider text-gray-900 dark:text-white my-8">
              Our Services
            </h2>
            <p className="w-11/12 mx-auto py-16 text-xl">
              We are IT Solution Services firm founded on the 21st of December
              2020 and Our core value is aimed at providing quality assurance
              with an unbeatable solutions driven to all our business partners
              and customers. We are innovative, highly motivated and well
              equipped with one of the best IT infrastructures, quality and
              competent training hands. We are absolutely committed to ensure
              that our clients are taking highly recommended technical decisions
              and are realizing business value and results from their IT
              Investments throughout our business partnering.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-center font-bold text-2xl my-3">What we offer</h2>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {data
          .map((services) => (
            <ServicesCard services={services} first={false} />
          ))}
      </div>

      <div>
        <div className="">
          <div className="relative">
            <img
              src="images/services/cbtTesting/pearsonVueTest.jpeg"
              alt=""
              srcset=""
              className="h-32 w-full rounded-xl object-cover object-bottom m-2"
            />
            <h3 className="absolute bottom-2 left-4 text-5xl font-bold text-blue-100 drop-shadow-xl shadow-w">
              CBT Testing
            </h3>
          </div>
          <div className="h-auto bg-gray-100 text-lg">
            <div className="w-11/12 mx-auto py-2">
              <h2 className="my-2 text-lg">
                CBT Testing (Pearson VUE, Prometric, Promotional exams, Jamb CBT
                exams, School exams, Navy and Army exams, External exams)
              </h2>
              <p>
                We've structured our testing environment at Etherchannel in such
                a way that would be comfortable, conducive and secure for the
                candidates to take their tests with the adequate guidelines and
                instructions from our competent test administrator which helps
                the students to comes out at their very best.
              </p>
              <h3 className="my-2 text-lg">Exams We Deliver</h3>
              <p>
                The below are the list of examinations that we delivered at
                Etherchannel Solution Services at optimum level.
              </p>
              <ul>
                <li>a. Pearson VUE exams</li>
                <li>b. Prometric exams</li>
                <li>c. Promotional exams</li>
                <li>d. Jamb CBT exams</li>
                <li>e. School exams (Internal exams)</li>
                <li>f. Navy and Army exams</li>
                <li>g. External exams</li>
                <li>h. ICAN exams</li>
                <li>i. Placement exams.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              src="images/services/itTraining/itTraining1.jpg"
              alt=""
              srcset=""
              className="h-32 w-full rounded-xl object-cover object-bo m-2"
            />
            <h3 className="absolute bottom-2 left-4 text-5xl font-bold text-blue-100 drop-shadow-xl shadow-w">
              IT Training
            </h3>
          </div>
          <div className="h-auto bg-gray-100 text-lg">
            <div className="w-11/12 mx-auto">
              <h2 className="my-2 text-lg">
                IT Training and Services (Corporate and Retail training for both
                organizations and Individuals)
              </h2>
              <p>
                Welcome to IT Training section, here at Etherchannel Solution
                Services, we work with our customers to know the best IT
                Training courses to recommend that will boost their employees
                performance and growth with the mond-blowing training facilities
                in place. We offer both Corporate and Retail training options to
                our customers
              </p>
              <h3 className="my-2 text-lg">Corporate Training</h3>
              <p>
                The best way we know our customers IT training demand is to work
                adequately with them to know the kinds of best courses to
                recommend that can help them achieve their goals and interested
                customers can also join our public classes and enjoy a fantastic
                discount on our courses.
              </p>
              <h4>Corporate Training Courses</h4>
              <h5>Microsoft Office Category</h5>
              <ul>
                <li>
                  a. Basic Computer Appreciation training for Domestic Staff
                </li>
                <li>b. Microsoft Excel 2016: Level 1, 2 & 3</li>
                <li> c. Microsoft Office Suite 2016: 1, 2 & 3</li>
                <li>
                  d. Microsoft Excel and PowerPoint 2016 skills training for
                  Sales and Marketing Team
                </li>
                <li> e. Excel 2016 Programming with VBA</li>
              </ul>
              <h5>
                MICROSOFT 365 MODERN DESKTOP ADMINISTRATOR (MD-100, MD-101)
                (ASSOCIATE LEVEL)
              </h5>
              <ul>
                <li>a. Windows 10</li>
                <li>c. Managing modern desktop</li>
                <li>d. Microsoft 365 Messaging Administrator (MS-203)</li>
                <li>e. Microsoft 365 Security Administrator (MS-500) </li>
                <li>f. Microsoft 365 Developer (MS600) </li>
                <li>g. Microsoft 365 Teams Administrator (MS-700)</li>
              </ul>

              <h5>TRAINING FOR OFFICE 365 CERTIFICATIONS</h5>
              <h6>1A. MICROSOFT 365 FUNDAMENTALS</h6>
              <ul>
                <li>a. MS-900T01-A: Microsoft 365 Fundamentals</li>
              </ul>

              <h6>1B. MICROSOFT 365 (EXPERT)</h6>
              <ul>
                <li>a. Microsoft 365 Teams Administrator (MS-700)</li>
              </ul>

              <h5>MICROSOFT POWER PLATFORM</h5>
              <ul>
                <li>
                  a. PL-900: Microsoft Certified Power Platform Fundamentals
                </li>
              </ul>

              <h5>Power Platform Associate</h5>
              <ul>
                <li>a. Power Platform App Maker (PL-100)</li>
                <li>b. Power Platform Functional Consultant (PL-200)</li>
                <li>c. Power Platform Developer (PL-400)</li>
                <li>d. Power Apps + Dynamics 365 Developer (MB-200, MB400)</li>
                <li>e. Data Analyst (DA-100)</li>
              </ul>

              <h5>MICROSOFT OFFICE 365 POWER PLATFORM EXPERT LEVEL</h5>
              <ul>
                <li>
                  a. MB-600: Microsoft Certified: Power Apps + Dynamics 365
                  Solution Architect Expert
                </li>
              </ul>

              <h5>MICROSOFT DYNAMIC OFFICE 365 INTERMEDIATE LEVEL</h5>
              <ul>
                <li>
                  a. MB-200T01-A: Dynamics 365: Power Platform applications
                </li>
                <li>
                  b. MB-200T03-A: Dynamics 365: Power Platform integrations
                </li>
                <li>
                  c. MB-200T04-A: Dynamics 365: Power Platform test and deploy
                </li>
                <li>d. MB-210T01: Microsoft Dynamics 365 Sales</li>
                <li>
                  e. MB-200T00-A: Microsoft Power Platform + Dynamics 365 Core
                </li>
              </ul>

              <h5>MICROSOFT AZURE TRAINING (FUNDAMENTALS MASTER THE BASICS)</h5>
              <ul>
                <li>a. Azure Fundamentals (AZ-900)</li>
                <li>b. Azure AI Fundamentals (AI-900)</li>
                <li>c. Azure Data Fundamentals (DP-900)</li>
              </ul>

              <h5>AZURE FOR ADMINISTRATOR ASSOCIATE</h5>
              <li>a. Azure Administrator (AZ-104)</li>
              <li>b. Developing Solutions for Azure (AZ-204)</li>

              <h5>AZURE SECURITY ENGINEER ASSOCIATE</h5>
              <ul>
                <li>a. Microsoft Azure Security Technologies AZ-500T00</li>
              </ul>

              <h5>DEVOPS ENGINEER EXPERT</h5>
              <ul>
                <li>
                  a. Designing and Implementing Microsoft DevOps solutions
                  (AZ-400T00-A)
                </li>
              </ul>

              <h5>AZURE FOR SOLUTIONS ARCHITECT EXPERT</h5>
              <ul>
                <li>
                  a. Microsoft Azure Technologies for AWS Architects* (AZ030T00)
                </li>
                <li>b. Microsoft Azure Architect Technologies* (AZ-303T00)</li>
                <li>c. Microsoft Azure Architect Design (AZ-304T00)</li>
              </ul>

              <h3 className="my-2 text-lg">Retail Training</h3>
              <p>
                Welcome to our Retail Training landing page, Planning on getting
                a rightful and job demanding IT skills in 2022, we gat you
                covered! At Etherchannel Solution Services, we provides and
                recommend the best IT training to our clients and our courses
                are well prepared for both individuals and groups which meet
                their training needs. Check out the list of courses offered.
              </p>
              <h4>IF YOU TRAIN WITH US:</h4>
              <ul>
                <li>
                  1. You get unlimited access to course materials for free.
                </li>
                <li>2. Hand on labs experience with quality trainers.</li>
                <li>3. Course certificate after completing a course.</li>
                <li>
                  4. CBT and VUE testing to supplement your training needs.
                </li>
              </ul>
              <h4>RETAIL COURSES OFFERED:</h4>
              <h5>IT FUNDAMENTALS CATEGORY:</h5>
              <li>
                A. Internet Appreciation and Microsoft Office 2021 Essentials
              </li>
              <li>B. Microsoft Office 2021 for Advanced Users</li>
              <li>C. Advanced Excel for Business class and Professionals</li>
              <li>D. Computer Networking Fundamentals</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
