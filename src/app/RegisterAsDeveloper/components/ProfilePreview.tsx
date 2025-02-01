import { useRouter } from "next/navigation";
import React from "react";
import { FaUser, FaGraduationCap, FaTools, FaBriefcase, FaFilePdf } from 'react-icons/fa';

interface ProfilePreviewProps {
  formData: {
    basic: {
      firstName: string;
      lastName: string;
      country: string;
      phone: string;
      rate: string;
      profilePicture: File | null;
      resume: File | null;
    };
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
    technicalSkills: {
      role: string;
      experience: string;
      skills: string[];
    };
    workExperience: Array<{
      company: string;
      role: string;
      startDate: string;
      startMonth: string;
      endDate: string;
      endMonth: string;
      stillWorking: boolean;
      description: string;
    }>;
  };
  onEdit: (section: string) => void;
}

const ProfilePreview: React.FC<ProfilePreviewProps> = ({ formData, onEdit }) => {
  const { basic, education, technicalSkills, workExperience } = formData;
  const router = useRouter();

  const handleClick = () => {
    // Save profile logic
    alert("Profile saved successfully!");
    router.push("/DeveloperProfile/DevProfile");
  };

  return (
    <div className="profile-preview max-w-3xl mx-auto">
      <div className="flex flex-col space-y-6">
        {basic && (
          <div className="section p-4 bg-white rounded-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <FaUser className="h-5 w-5 text-black" />
                <h3 className="text-xl font-semibold text-black">Basic Information</h3>
              </div>
              <button
                className="px-4 py-2 bg-transparent border border-blue-600 text-blue-600 rounded-md"
                onClick={() => onEdit('basic')}
              >
                Edit
              </button>
            </div>
            <div className="flex justify-center mb-4">
              {basic.profilePicture ? (
                <img
                  src={URL.createObjectURL(basic.profilePicture)}
                  alt="Profile Image"
                  className="h-24 w-24 rounded-full"
                />
              ) : (
                <img
                  src={"/assets/profile.png"}
                  alt="Profile Image"
                  className="h-24 w-24 rounded-full"
                />
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-black">First Name: {basic.firstName}</p>
              <p className="text-black">Last Name: {basic.lastName}</p>
              <p className="text-black">Country: {basic.country}</p>
              <p className="text-black">Phone: {basic.phone}</p>
              <p className="text-black">Monthly Rate: {basic.rate}</p>
              <div className="flex items-center">
                <FaFilePdf className="h-5 w-5 text-red-600 mr-2" />
                <p className="text-black">
                  {basic.resume ? basic.resume.name : `${basic.firstName}_${basic.lastName}.pdf`}
                </p>
              </div>
            </div>
          </div>
        )}
        {education && education.map((edu, index) => (
          <div key={index} className="section p-4 bg-white rounded-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <FaGraduationCap className="h-5 w-5 text-black" />
                <h3 className="text-xl font-semibold text-black">Education</h3>
              </div>
              <button
                className="px-4 py-2 bg-transparent border border-blue-600 text-blue-600 rounded-md"
                onClick={() => onEdit('education')}
              >
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-black">School: {edu.school}</p>
              <p className="text-black">Degree: {edu.degree}</p>
              <p className="text-black">Country: {edu.country}</p>
              <p className="text-black">Start Date: {edu.startMonth}/{edu.startDate}</p>
              <p className="text-black">End Date: {edu.stillStudying ? "Present" : `${edu.endMonth}/${edu.endDate}`}</p>
              <p className="text-black">About: {edu.about}</p>
            </div>
          </div>
        ))}
        {technicalSkills && (
          <div className="section p-4 bg-white rounded-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <FaTools className="h-5 w-5 text-black" />
                <h3 className="text-xl font-semibold text-black">Technical Skills</h3>
              </div>
              <button
                className="px-4 py-2 bg-transparent border border-blue-600 text-blue-600 rounded-md"
                onClick={() => onEdit('technical-skills')}
              >
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-black">Role: {technicalSkills.role}</p>
              <p className="text-black">Experience: {technicalSkills.experience}</p>
              <p className="text-black">Skills: {technicalSkills.skills.join(", ")}</p>
            </div>
          </div>
        )}
        {workExperience && workExperience.map((work, index) => (
          <div key={index} className="section p-4 bg-white rounded-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <FaBriefcase className="h-5 w-5 text-black" />
                <h3 className="text-xl font-semibold text-black">Work Experience</h3>
              </div>
              <button
                className="px-4 py-2 bg-transparent border border-blue-600 text-blue-600 rounded-md"
                onClick={() => onEdit('work-experience')}
              >
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-black">Company: {work.company}</p>
              <p className="text-black">Role: {work.role}</p>
              <p className="text-black">Start Date: {work.startMonth}/{work.startDate}</p>
              <p className="text-black">End Date: {work.stillWorking ? "Present" : `${work.endMonth}/${work.endDate}`}</p>
              <p className="text-black">Description: {work.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-300" onClick={() => onEdit('work-experience')}>
          Back
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={handleClick}>
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePreview;