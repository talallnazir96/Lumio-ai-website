import React, { useState, ChangeEvent, useEffect } from 'react';

interface EducationFormProps {
  formData: {
    education: Array<{
      school: string;
      degree: string;
      country: string;
      startDate: string;
      startMonth: string;
      endDate: string;
      endMonth: string;
      stillStudying: boolean;
      about: string;
    }>;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onBack: () => void;
  onNext: () => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ formData, setFormData, onBack, onNext }) => {
  const [educationForms, setEducationForms] = useState(formData.education);
  const [errors, setErrors] = useState<Array<Record<string, string>>>([]);

  useEffect(() => {
    setEducationForms(formData.education);
  }, [formData.education]);

  const handleChange = (index: number) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    const field = id.split('-')[0]; // Extract the field name (e.g., "school" from "school-0")
    const updatedForms = [...educationForms];
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      updatedForms[index] = { ...updatedForms[index], [field]: checked };
    } else {
      updatedForms[index] = { ...updatedForms[index], [field]: value };
    }
    setEducationForms(updatedForms);
  };

  const validate = () => {
    const newErrors: Array<Record<string, string>> = [];
    let isValid = true;

    educationForms.forEach((form, index) => {
      const formErrors: Record<string, string> = {};
      if (!form.school) formErrors.school = 'School is required';
      if (!form.degree) formErrors.degree = 'Degree is required';
      if (!form.country) formErrors.country = 'Country is required';
      if (!form.startDate) formErrors.startDate = 'Start year is required';
      if (!form.startMonth) formErrors.startMonth = 'Start month is required';
      if (!form.endDate && !form.stillStudying) formErrors.endDate = 'End year is required unless you are still studying';
      if (!form.endMonth && !form.stillStudying) formErrors.endMonth = 'End month is required unless you are still studying';
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
      setFormData((prev: any) => ({ ...prev, education: educationForms }));
      onNext();
    }
  };

  const handleAddEducation = () => {
    setEducationForms([
      ...educationForms,
      {
        school: '',
        degree: '',
        country: '',
        startDate: '',
        startMonth: '',
        endDate: '',
        endMonth: '',
        stillStudying: false,
        about: '',
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
      <div className="flex-1 p-6 bg-white rounded-sm w-full max-w-3xl gap-4">
        {educationForms.map((form, index) => (
          <form key={index} className="space-y-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor={`school-${index}`} className="block text-sm font-medium text-black">
                  School or University <span className="text-red-500">*</span>
                </label>
                <input
                  id={`school-${index}`}
                  type="text"
                  value={form.school}
                  onChange={handleChange(index)}
                  placeholder="Type here.."
                  className="w-full px-3 py-2 bg-gray-100 border-none rounded-md text-black"
                />
                {errors[index]?.school && <p className="text-red-500 text-sm">{errors[index].school}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor={`degree-${index}`} className="block text-sm font-medium text-black">
                  Degree <span className="text-red-500">*</span>
                </label>
                <select
                  id={`degree-${index}`}
                  value={form.degree}
                  onChange={handleChange(index)}
                  className="w-full px-3 py-2 bg-gray-100 border-none rounded-md text-black"
                >
                  <option value="">Select</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">Ph.D.</option>
                </select>
                {errors[index]?.degree && <p className="text-red-500 text-sm">{errors[index].degree}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor={`country-${index}`} className="block text-sm font-medium text-black">
                Issuing Country <span className="text-red-500">*</span>
              </label>
              <input
                id={`country-${index}`}
                type="text"
                value={form.country}
                onChange={handleChange(index)}
                placeholder="Type here.."
                className="w-1/2 px-3 py-2 bg-gray-100 border-none rounded-md text-black"
              />
              {errors[index]?.country && <p className="text-red-500 text-sm">{errors[index].country}</p>}
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
                  End Date <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    id={`endDate-${index}`}
                    value={form.endDate}
                    onChange={handleChange(index)}
                    className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none text-black"
                    disabled={form.stillStudying}
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
                    disabled={form.stillStudying}
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
                id={`stillStudying-${index}`}
                checked={form.stillStudying}
                onChange={handleChange(index)}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label htmlFor={`stillStudying-${index}`} className="ml-2 text-sm text-black">
                Still studying
              </label>
            </div>

            <div className="space-y-2">
              <label htmlFor={`about-${index}`} className="block text-sm font-medium text-black">
                About you (Let us know briefly about yourself)
              </label>
              <textarea
                id={`about-${index}`}
                rows={6}
                value={form.about}
                onChange={handleChange(index)}
                placeholder="Type here.."
                className="w-full px-3 py-2 bg-gray-100 border-none rounded-md resize-none text-black"
              />
            </div>
          </form>
        ))}
      </div>
      <div className="w-full max-w-3xl mt-4 bg-white rounded-sm p-3 flex justify-center">
        <button
          type="button"
          className="text-black hover:underline"
          onClick={handleAddEducation}
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