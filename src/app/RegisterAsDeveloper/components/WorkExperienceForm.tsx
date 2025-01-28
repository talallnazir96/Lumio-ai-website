import React, { useState, ChangeEvent } from 'react';

interface WorkExperienceFormProps {
  formData: {
    company: string;
    role: string;
    startDate: string;
    startMonth: string;
    endDate: string;
    endMonth: string;
    stillWorking: boolean;
    description: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onBack: () => void;
  onNext: () => void;
}

const WorkExperienceForm: React.FC<WorkExperienceFormProps> = ({ formData, setFormData, onBack, onNext }) => {
  const [formValues, setFormValues] = useState(formData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormValues({ ...formValues, [id]: checked });
    } else {
      setFormValues({ ...formValues, [id]: value });
    }
  };

  const validate = () => {
    let newErrors: Record<string, string> = {};
    if (!formValues.company) newErrors.company = 'Company name is required';
    if (!formValues.role) newErrors.role = 'Role is required';
    if (!formValues.startDate) newErrors.startDate = 'Start year is required';
    if (!formValues.startMonth) newErrors.startMonth = 'Start month is required';
    if (!formValues.endDate && !formValues.stillWorking) newErrors.endDate = 'End year is required unless you are still working';
    if (!formValues.endMonth && !formValues.stillWorking) newErrors.endMonth = 'End month is required unless you are still working';
    if (!formValues.description) newErrors.description = 'Description is required';
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleNext = () => {
    if (validate()) {
      setFormData((prev: any) => ({ ...prev, workExperience: formValues }));
      onNext();
    }
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
        <form>
          <div className="space-y-6">
            {/* Company and Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-black mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  value={formValues.company}
                  onChange={handleChange}
                  placeholder="Type here.."
                  className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none text-black"
                />
                {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-black mb-1">
                  Role <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="role"
                  value={formValues.role}
                  onChange={handleChange}
                  placeholder="Type here.."
                  className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none text-black"
                />
                {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    id="startDate"
                    value={formValues.startDate}
                    onChange={handleChange}
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
                    id="startMonth"
                    value={formValues.startMonth}
                    onChange={handleChange}
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
                {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
                {errors.startMonth && <p className="text-red-500 text-sm">{errors.startMonth}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  End Date
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    id="endDate"
                    value={formValues.endDate}
                    onChange={handleChange}
                    className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none text-black"
                    disabled={formValues.stillWorking}
                  >
                    <option value="">Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <select
                    id="endMonth"
                    value={formValues.endMonth}
                    onChange={handleChange}
                    className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none text-black"
                    disabled={formValues.stillWorking}
                  >
                    <option value="">Month</option>
                    {months.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
                {errors.endMonth && <p className="text-red-500 text-sm">{errors.endMonth}</p>}
              </div>
            </div>

            {/* Still Working Here */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="stillWorking"
                checked={formValues.stillWorking}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label htmlFor="stillWorking" className="ml-2 text-sm text-black">
                I am currently working here
              </label>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-black mb-1">
                Briefly describe what you accomplished and what skills you used in this role <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                value={formValues.description}
                onChange={handleChange}
                rows={6}
                placeholder="Type here.."
                className="w-full px-4 py-2 bg-gray-100 rounded-md resize-none focus:outline-none text-black"
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>
          </div>
        </form>
      </div>

      <div className="w-full max-w-3xl mt-4 bg-white rounded-sm p-3 flex justify-center">
        <button
          type="button"
          className="text-black hover:text-gray-900 flex items-center gap-2"
          onClick={() => alert('Add work experience functionality not implemented yet')}
        >
          <span className="text-xl">+ </span> Add work experience
        </button>
      </div>

      <div className="flex justify-between mt-8 w-full max-w-3xl">
        <button
          type="button"
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-300"
          onClick={onBack}
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default WorkExperienceForm;