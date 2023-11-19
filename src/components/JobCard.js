import { Button } from "./Button";

export const JobCard = ({
  companyLogo,
  title,
  companyName,
  location,
  time,
  experience,
  salary,
  employees,
  buttonText,
  buttonClass,
}) => {
  return (
    <div>
      <div className="w-[830px] px-6 py-4 bg-white border border-[#DADEDF] rounded-xl">
        <div className="flex items-start">
          <img src={companyLogo} alt="Netflix Logo" className="mr-2" />

          <div>
            <h5 className="text-black text-2xl font-normal">{title}</h5>
            <div className="mb-6 text-base text-darkText">
              <p>{companyName}</p>
              <p className="mb-6 text-[#646464]">{location}</p>

              <p className="mb-2">{time}</p>
              <p className="mb-2">Experience ({experience})</p>
              <p className="mb-2">INR (₹) {salary} / Month</p>
              <p>{employees} employees</p>
            </div>

            <Button text={buttonText} className={buttonClass} />
          </div>
        </div>
      </div>
    </div>
  );
};
