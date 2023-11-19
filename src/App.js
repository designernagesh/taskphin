import { CreateJobStepOne } from "./components/CreateJobStepOne";
import { CreateJobStepTwo } from "./components/CreateJobStepTwo";
import { JobCard } from "./components/JobCard";

function App() {
  const netflix = require('./images/netflix-logo.png');

  return (
    <>
      <div className="w-[1200px] m-auto p-12">
        <div className="flex justify-between items-start gap-12">
          <CreateJobStepOne />
          <CreateJobStepTwo />
        </div>
      </div>

      <br />
      <br />

      <div className="w-[1810px] bg-[#D8D8D8] p-12 m-auto mb-12">
        <div className="flex justify-between flex-wrap gap-12">
          <JobCard
            companyLogo={netflix}
            title="UX UI Designer"
            companyName="Great Vibes - Information Technology"
            location="Chennai, Tamilnadu, India (In-office)"
            time="Part-Time (9.00 am - 5.00 pm IST)"
            experience="1 - 2 years"
            salary="30,000 - 50,000"
            employees="51-200"
            buttonText="Apply Now"
            buttonClass="border border-transparent bg-primary text-white shadow-custom py-2 px-4 mr-2"
          />
          
          <JobCard
            companyLogo={netflix}
            title="Developer"
            companyName="Great Vibes - Information Technology"
            location="Chennai, Tamilnadu, India (In-office)"
            time="Part-Time (9.00 am - 5.00 pm IST)"
            experience="1 - 2 years"
            salary="50,000 - 70,000"
            employees="51-200"
            buttonText="External Apply"
            buttonClass="border-primary text-primary shadow-custom border"
          />

          <JobCard
            companyLogo={netflix}
            title="Interaction Designer"
            companyName="Great Vibes - Information Technology"
            location="Chennai, Tamilnadu, India (In-office)"
            time="Part-Time (9.00 am - 5.00 pm IST)"
            experience="1 - 2 years"
            salary="30,000 - 50,000"
            employees="51-200"
            buttonText="External Apply"
            buttonClass="border-primary text-primary shadow-custom border"
          />

          <JobCard
            companyLogo={netflix}
            title="SEO Analyst"
            companyName="Great Vibes - Information Technology"
            location="Chennai, Tamilnadu, India (In-office)"
            time="Part-Time (9.00 am - 5.00 pm IST)"
            experience="1 - 2 years"
            salary="30,000 - 50,000"
            employees="51-200"
            buttonText="Apply Now"
            buttonClass="border border-transparent bg-primary text-white shadow-custom py-2 px-4 mr-2"
          />                  
        </div>
      </div>
    </>
  );
}

export default App;
