import React, { useState, ChangeEvent } from 'react';

interface EducationFormProps {
  formData: {
    school: string;
    degree: string;
    country: string;
    startDate: string;
    startMonth: string;
    endDate: string;
    endMonth: string;
    stillStudying: boolean;
    about: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onBack: () => void;
  onNext: () => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ formData, setFormData, onBack, onNext }) => {
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
    if (!formValues.school) newErrors.school = 'School is required';
    if (!formValues.degree) newErrors.degree = 'Degree is required';
    if (!formValues.country) newErrors.country = 'Country is required';
    if (!formValues.startDate) newErrors.startDate = 'Start year is required';
    if (!formValues.startMonth) newErrors.startMonth = 'Start month is required';
    if (!formValues.endDate && !formValues.stillStudying) newErrors.endDate = 'End year is required unless you are still studying';
    if (!formValues.endMonth && !formValues.stillStudying) newErrors.endMonth = 'End month is required unless you are still studying';
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleNext = () => {
    if (validate()) {
      setFormData((prev: any) => ({ ...prev, education: formValues }));
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="school" className="block text-sm font-medium text-black">
                  School or University <span className="text-red-500">*</span>
                </label>
                <input
                  id="school"
                  type="text"
                  value={formValues.school}
                  onChange={handleChange}
                  placeholder="Type here.."
                  className="w-full px-3 py-2 bg-gray-100 border-none rounded-md text-black"
                />
                {errors.school && <p className="text-red-500 text-sm">{errors.school}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="degree" className="block text-sm font-medium text-black">
                  Degree <span className="text-red-500">*</span>
                </label>
                <select
                  id="degree"
                  value={formValues.degree}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-100 border-none rounded-md text-black"
                >
                  <option value="">Select</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">Ph.D.</option>
                </select>
                {errors.degree && <p className="text-red-500 text-sm">{errors.degree}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm font-medium text-black">
                Issuing Country <span className="text-red-500">*</span>
              </label>
              <input
                id="country"
                type="text"
                value={formValues.country}
                onChange={handleChange}
                placeholder="Type here.."
                className="w-full px-3 py-2 bg-gray-100 border-none rounded-md text-black"
              />
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-black">
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
              <div className="space-y-2">
                <label className="block text-sm font-medium text-black">
                  End Date <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    id="endDate"
                    value={formValues.endDate}
                    onChange={handleChange}
                    className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none text-black"
                    disabled={formValues.stillStudying}
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
                    disabled={formValues.stillStudying}
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

            <div className="flex items-center">
              <input
                type="checkbox"
                id="stillStudying"
                checked={formValues.stillStudying}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label htmlFor="stillStudying" className="ml-2 text-sm text-black">
                Still studying
              </label>
            </div>

            <div className="space-y-2">
              <label htmlFor="about" className="block text-sm font-medium text-black">
                About you (Let us know briefly about yourself)
              </label>
              <textarea
                id="about"
                rows={6}
                value={formValues.about}
                onChange={handleChange}
                placeholder="Type here.."
                className="w-full px-3 py-2 bg-gray-100 border-none rounded-md resize-none text-black"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="w-full max-w-3xl mt-4 bg-white rounded-sm p-3 flex justify-center">
        <button
          type="button"
          className="text-black hover:underline"
        >
          + Add Education
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

export default EducationForm;