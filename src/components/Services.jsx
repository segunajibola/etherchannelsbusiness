import React from "react";

const Services = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 bg-gray-100 dark:bg-gray-700">
        <div className="relative">
          <img
            src="images/services/itTraining/itTraining2.jpg"
            alt=""
            className="mt-0 w-screen mx-2 h-[320px] mx-auto"
          />
        </div>

        <div className="w-full mx-auto text-center p-5">
          <h2 className="text-2xl font-semibold tracking-wider dark:text-white my-2">
            Services
          </h2>
          <p className="w-11/12 mx-auto text-lg">
            At Etherchannel Solution Sevices, our team are dedicated
            professionals and solution driven who follow due process that will
            enable us to deliver quality I.T services that ensures the growth of
            your business. We are absolutely concern Our experienced and
            seasoned professionals create, configure, implement, and maintain a
            healthy cloud and on-premises infrastructure for your business,
            reducing your IT expenses, and allowing for budgetary planning for
            the future.
          </p>
        </div>
      </div>

      <h2 className="text-center font-bold text-2xl my-3">What we offer</h2>

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
          <div className="h-[700px] bg-gray-100 text-lg">
            <div className="w-11/12 mx-auto">
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
        <div className="relative">
          <img
            src="images/services/digitalMkt/digitalMkt1.jpeg"
            alt=""
            srcset=""
            className="h-32 w-full rounded-xl object-cover object-bottom m-2"
          />
          <h3 className="absolute bottom-2 left-4 text-5xl font-bold text-blue-100 drop-shadow-xl shadow-w">
            Digital Marketing
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
