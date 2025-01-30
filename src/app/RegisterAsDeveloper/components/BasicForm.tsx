import type React from "react"
import { useState, type ChangeEvent } from "react"
import { FaUpload } from "react-icons/fa"

// Sample JSON data
const countryCodes = [
  { name: "United States", code: "+1" },
  { name: "Canada", code: "+11" },
  { name: "United Kingdom", code: "+44" },
  { name: "Australia", code: "+61" },
  { name: "India", code: "+91" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
  { name: "Japan", code: "+81" },
  { name: "China", code: "+86" },
  { name: "Brazil", code: "+55" },
  { name: "Pakistan", code: "+92" }
];

interface BasicFormProps {
  formData: {
    firstName: string;
    lastName: string;
    country: string;
    discovery: string;
    rate: string;
    phone: string;
    profilePicture: File | null;
    resume: File | null;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onNext: () => void;
}

const BasicForm: React.FC<BasicFormProps> = ({ formData, setFormData, onNext }) => {
  const [formValues, setFormValues] = useState(formData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [profilePicture, setProfilePicture] = useState<File | null>(formData.profilePicture || null);
  const [resume, setResume] = useState<File | null>(formData.resume || null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
  ) => {
    const file = e.target.files?.[0] || null;
    setFile(file);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formValues.firstName) newErrors.firstName = "First name is required";
    if (!formValues.lastName) newErrors.lastName = "Last name is required";
    if (!formValues.country) newErrors.country = "Country is required";
    if (!formValues.phone) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleNext = () => {
    if (validate()) {
      setFormData((prev: any) => ({ ...prev, basic: { ...formValues, profilePicture, resume } }));
      onNext();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex-1 p-4 sm:p-6 bg-white rounded-sm w-full max-w-3xl">
        {/* Picture Upload Section */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex flex-col items-center justify-center p-4 sm:p-8 border-2 border-dashed rounded-lg">
            <div className="w-32 h-32 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
              {profilePicture ? (
                <img
                  src={URL.createObjectURL(profilePicture) || "/placeholder.svg"}
                  alt="Profile"
                  className="h-32 w-32 rounded-full object-cover"
                />
              ) : (
                <FaUpload className="h-8 w-8 text-gray-400" />
              )}
            </div>
            <label className="text-blue-600 text-sm hover:underline cursor-pointer">
              Add professional photo
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setProfilePicture)}
              />
            </label>
            <span className="text-gray-500 text-sm">See guidelines</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-black">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                value={formValues.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-black"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm font-medium text-black">
                Country of residence <span className="text-red-500">*</span>
              </label>
              <input
                id="country"
                type="text"
                value={formValues.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-black"
              />
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="discovery" className="block text-sm font-medium text-black">
                How did you discover LumioAI?
              </label>
              <select
                id="discovery"
                value={formValues.discovery}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-black"
              >
                <option value="">Select</option>
                <option value="search">Search Engine</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="rate" className="block text-sm font-medium text-black">
                Set your expected monthly rate
              </label>
              <div className="relative">
                <input
                  id="rate"
                  type="text"
                  value={formValues.rate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md text-black"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">USD</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-black">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                value={formValues.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-black"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-black">
                Phone number <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-1">
                <select
                  id="phoneCode"
                  className="w-full sm:w-[100px] px-2 py-2 border rounded-md text-black"
                  value={formValues.phoneCode}
                  onChange={handleChange}
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name} ({country.code})
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  type="tel"
                  value={formValues.phone}
                  onChange={handleChange}
                  className="flex-1 px-2 py-2 border rounded-md text-black"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-black">Upload your resume</label>
              <div className="flex flex-col items-center justify-center p-4 sm:p-6 border-2 border-dashed rounded-lg bg-gray-50">
                <FaUpload className="h-6 w-6 text-gray-400 mb-2" />
                <label className="text-blue-600 text-sm hover:underline cursor-pointer">
                  Upload your file
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileChange(e, setResume)}
                  />
                </label>
              </div>
              {resume && <p className="text-sm text-gray-500 mt-2">{resume.name}</p>}
              <p className="text-sm text-gray-500">You can skip this step for now</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-6 sm:mt-8 w-full max-w-3xl">
        <button className="w-full sm:w-auto px-4 py-2 border rounded-md bg-gray-300 hover:bg-gray-400">Back</button>
        <button
          className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BasicForm;