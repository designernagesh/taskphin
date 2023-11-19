import { InputText } from "./InputText";
import { InputTextTwoColumn } from "./InputTextTwoColumn";
import { RadioButtons } from "./RadioButtons";
import { Button } from "./Button";

export const CreateJobStepTwo = () => {
  return (
    <div className="w-[577px] p-8 border border-border rounded-xl">
      <div className="flex items-center justify-between mb-6 text-[#182021]">
        <h1 className="text-xl font-normal">Create a Job</h1>
        <span className="text-base font-medium">Step 2</span>
      </div>

      <form action="#">
        <InputTextTwoColumn
          id="minExperience"
          label="Experience"
          placeholderOne="Minimum"
          placeholderTwo="Maximum"
        />

        <InputTextTwoColumn
          id="minSalary"
          label="Salary"
          placeholderOne="Minimum"
          placeholderTwo="Maximum"
        />

        <InputText
          id="totalEmployee"
          label="Total employee"
          placeholder="ex. 100"
        />

        <div className="mb-24">
          <RadioButtons
            labelName="Apply type"
            name="applyType"
            options={[
              { value: "quick", label: "Quick apply" },
              { value: "external", label: "External apply" },
            ]}
          />
        </div>

        <div className="flex justify-end">
          <Button text="Save" className="bg-primary text-white shadow-custom" />
        </div>
      </form>
    </div>
  );
};
