import { InputText } from "./InputText";
import { Button } from "./Button";

export const CreateJobStepOne = () => {
  return (
    <div className="w-[577px] p-8 border border-border rounded-xl">
      <div className="flex items-center justify-between mb-6 text-[#182021]">
        <h1 className="text-xl font-normal">Create a Job</h1>
        <span className="text-base font-medium">Step 1</span>
      </div>

      <form action="#">
        <InputText
          label="Job title"
          id="jobTitle"
          placeholder="ex. UX UI Designer"
          required
        />

        <InputText
          label="Company name"
          id="companyName"
          placeholder="ex. Google"
          required
        />

        <InputText
          label="Industry"
          id="industry"
          placeholder="ex. Information Technology"
          required
        />

        <div className="flex mb-[72px]">
          <div className="w-1/2 pr-3">
            <InputText
              label="Location"
              id="location"
              placeholder="ex. Chennai"
            />
          </div>

          <div className="w-1/2 pl-3">
            <InputText
              label="Remote Type"
              id="remoteType"
              placeholder="ex. In-office"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button text="Next" className="bg-primary text-white shadow-custom" />
        </div>
      </form>
    </div>
  );
};
