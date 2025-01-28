import React, { useState, ChangeEvent } from 'react';

interface TechnicalSkillFormProps {
  formData: {
    role: string;
    experience: string;
    skills: string[];
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onBack: () => void;
  onNext: () => void;
}

const TechnicalSkillForm: React.FC<TechnicalSkillFormProps> = ({ formData, setFormData, onBack, onNext }) => {
  const [formValues, setFormValues] = useState(formData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const availableSkills = ["JavaScript", "Angular", "Vue.js", "Git", "React", "Babel", "Python", "Java", "Node.js", "Angular.js", "React Native"];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const validate = () => {
    let newErrors: Record<string, string> = {};
    if (!formValues.role) newErrors.role = 'Role is required';
    if (!formValues.experience) newErrors.experience = 'Experience is required';
    if (!formValues.skills.length) newErrors.skills = 'Select at least one skill';
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleNext = () => {
    if (validate()) {
      setFormData((prev: any) => ({ ...prev, technicalSkills: formValues }));
      onNext();
    }
  };

  const addSkill = (skill: string) => {
    if (!formValues.skills.includes(skill)) {
      setFormValues({ ...formValues, skills: [...formValues.skills, skill] });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-2xl p-6 space-y-6 bg-white rounded-sm w-full">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-black">
              My expertise <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  What role are you interested in finding a job for?
                </label>
                <select
                  id="role"
                  value={formValues.role}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-100 border rounded-md text-black"
                >
                  <option value="">Select</option>
                  <option value="frontend">Front-end</option>
                  <option value="backend">Back-end</option>
                  <option value="fullstack">Full-stack</option>
                </select>
                {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
              </div>
              <div>
                <label className="block text-sm text-gray-600 mt-4">
                  Years of experience <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="experience"
                  value={formValues.experience}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-100 border rounded-md text-black"
                />
                {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-black">
              Skills <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-600">
              Select all the relevant skills. LumioAI test will be tailored on them{" "}
              <span className="text-red-500">⚠</span>
            </p>
            <div className="relative">
              <input
                type="search"
                placeholder="Search skills by name"
                className="w-full pl-10 px-3 py-2 bg-gray-100 border rounded-md text-black"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {availableSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => addSkill(skill)}
                className={`px-3 py-1 ${
                  formValues.skills.includes(skill) ? 'bg-blue-300' : 'bg-blue-50 hover:bg-blue-100'
                } text-black`}
              >
                {skill}
              </button>
            ))}
          </div>

          <div className="space-y-4 mt-4">
            <h3 className="text-sm font-medium text-blue-600">Your Skills</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              {formValues.skills.length === 0 ? (
                <p className="text-gray-500 text-sm">Selected skills will appear here</p>
              ) : (
                formValues.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-medium text-black">{skill}</span>
                    <input
                      type="number"
                      value={formValues.experience}
                      onChange={(e) => {
                        const updatedSkills = formValues.skills.map((s) =>
                          s === skill ? e.target.value : s
                        );
                        setFormValues({ ...formValues, skills: updatedSkills });
                      }}
                      className="max-w-[120px] px-3 py-2 bg-gray-100 border rounded-md text-black"
                      placeholder="Years of experience"
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          {errors.skills && (
            <div className="text-red-500 text-sm">
              {errors.skills}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-8 w-full max-w-2xl">
        <button
          className="px-4 py-2 border rounded-md bg-gray-300 hover:bg-gray-300 text-black"
          onClick={onBack}
        >
          Back
        </button>
        <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default TechnicalSkillForm;