import React, { useState, ChangeEvent } from 'react';

interface WorkExperienceFormProps {
  formData: Array<{
    company: string;
    role: string;
    startDate: string;
    startMonth: string;
    endDate: string;
    endMonth: string;
    stillWorking: boolean;
    description: string;
  }>;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onBack: () => void;
  onNext: () => void;
}

const WorkExperienceForm: React.FC<WorkExperienceFormProps> = ({ formData, setFormData, onBack, onNext }) => {
  // Initialize with one default entry if formData is empty
  const [workExperienceForms, setWorkExperienceForms] = useState(
    formData.length
      ? formData
      : [
        {
          company: '',
          role: '',
          startDate: '',
          startMonth: '',
          endDate: '',
          endMonth: '',
          stillWorking: false,
          description: '',
        },
      ]
  );
  const [errors, setErrors] = useState<Array<Record<string, string>>>([]);

  const handleChange = (index: number) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    const field = id.split('-')[0]; // Extract the field name (e.g., "company" from "company-0")
    const updatedForms = [...workExperienceForms];
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      updatedForms[index] = { ...updatedForms[index], [field]: checked };
    } else {
      updatedForms[index] = { ...updatedForms[index], [field]: value };
    }
    setWorkExperienceForms(updatedForms);
  };

  const validate = () => {
    let newErrors: Array<Record<string, string>> = [];
    let isValid = true;

    workExperienceForms.forEach((form, index) => {
      const formErrors: Record<string, string> = {};
      if (!form.company) formErrors.company = 'Company name is required';
      if (!form.role) formErrors.role = 'Role is required';
      if (!form.startDate) formErrors.startDate = 'Start year is required';
      if (!form.startMonth) formErrors.startMonth = 'Start month is required';
      if (!form.endDate && !form.stillWorking) formErrors.endDate = 'End year is required unless you are still working';
      if (!form.endMonth && !form.stillWorking) formErrors.endMonth = 'End month is required unless you are still working';
      if (!form.description) formErrors.description = 'Description is required';
      newErrors[index] = formErrors;

      if (Object.keys(formErrors).length > 0) {
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validate()) {
      setFormData((prev: any) => ({ ...prev, workExperience: workExperienceForms }));
      onNext();
    }
  };

  const handleAddWorkExperience = () => {
    setWorkExperienceForms([
      ...workExperienceForms,
      {
        company: '',
        role: '',
        startDate: '',
        startMonth: '',
        endDate: '',
        endMonth: '',
        stillWorking: false,
        description: '',
      },
    ]);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(currentYear - 1970 + 1), (_, index) => currentYear - index);
  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex-1 p-6 bg-white rounded-sm w-full max-w-3xl">
        {workExperienceForms.map((form, index) => (
          <form key={index} className="space-y-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor={`company-${index}`} className="block text-sm font-medium text-black">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id={`company-${index}`}
                  type="text"
                  value={form.company}
                  onChange={handleChange(index)}
                  placeholder="Type here.."
                  className="w-full px-3 py-2 bg-gray-100 border-none rounded-md text-black"
                />
                {errors[index]?.company && <p className="text-red-500 text-sm">{errors[index].company}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor={`role-${index}`} className="block text-sm font-medium text-black">
                  Role <span className="text-red-500">*</span>
                </label>
                <input
                  id={`role-${index}`}
                  type="text"
                  value={form.role}
                  onChange={handleChange(index)}
                  placeholder="Type here.."
                  className="w-full px-3 py-2 bg-gray-100 border-none rounded-md text-black"
                />
                {errors[index]?.role && <p className="text-red-500 text-sm">{errors[index].role}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-black">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    id={`startDate-${index}`}
                    value={form.startDate}
                    onChange={handleChange(index)}
                    className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none text-black"
                  >
                    <option value="">Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <select
                    id={`startMonth-${index}`}
                    value={form.startMonth}
                    onChange={handleChange(index)}
                    className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none text-black"
                  >
                    <option value="">Month</option>
                    {months.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors[index]?.startDate && <p className="text-red-500 text-sm">{errors[index].startDate}</p>}
                {errors[index]?.startMonth && <p className="text-red-500 text-sm">{errors[index].startMonth}</p>}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-black">
                  End Date
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    id={`endDate-${index}`}
                    value={form.endDate}
                    onChange={handleChange(index)}
                    className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none text-black"
                    disabled={form.stillWorking}
                  >
                    <option value="">Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <select
                    id={`endMonth-${index}`}
                    value={form.endMonth}
                    onChange={handleChange(index)}
                    className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none text-black"
                    disabled={form.stillWorking}
                  >
                    <option value="">Month</option>
                    {months.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors[index]?.endDate && <p className="text-red-500 text-sm">{errors[index].endDate}</p>}
                {errors[index]?.endMonth && <p className="text-red-500 text-sm">{errors[index].endMonth}</p>}
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id={`stillWorking-${index}`}
                checked={form.stillWorking}
                onChange={handleChange(index)}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label htmlFor={`stillWorking-${index}`} className="ml-2 text-sm text-black">
                I am currently working here
              </label>
            </div>

            <div className="space-y-2">
              <label htmlFor={`description-${index}`} className="block text-sm font-medium text-black">
                Briefly describe what you accomplished and what skills you used in this role <span className="text-red-500">*</span>
              </label>
              <textarea
                id={`description-${index}`}
                value={form.description}
                onChange={handleChange(index)}
                rows={6}
                placeholder="Type here.."
                className="w-full px-3 py-2 bg-gray-100 border-none rounded-md resize-none text-black"
              />
              {errors[index]?.description && <p className="text-red-500 text-sm">{errors[index].description}</p>}
            </div>
          </form>
        ))}
      </div>
      <div className="w-full max-w-3xl mt-4 bg-white rounded-sm p-3 flex justify-center">
        <button
          type="button"
          className="text-black hover:underline"
          onClick={handleAddWorkExperience}
        >
          + Add Work Experience
        </button>
      </div>

      <div className="flex justify-between mt-8 w-full max-w-3xl">
        <button className="px-4 py-2 border rounded-md bg-gray-300 hover:bg-gray-300" onClick={onBack}>
          Back
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WorkExperienceForm;