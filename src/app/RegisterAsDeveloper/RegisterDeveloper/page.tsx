"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import BasicForm from '../components/BasicForm';
import EducationForm from '../components/EducationForm';
import TechnicalSkillForm from '../components/TechnicalSkillForm';
import WorkExperienceForm from '../components/WorkExperienceForm';
import ProfilePreview from '../components/ProfilePreview';

interface FormStatus {
  isCompleted: boolean;
  hasError: boolean;
}

interface FormData {
  basic: {
    firstName: string;
    lastName: string;
    country: string;
    discovery: string;
    rate: string;
    phone: string;
    profilePicture: File | null;
    resume: File | null;
  };
  education: {
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
  technicalSkills: {
    role: string;
    experience: string;
    skills: string[];
  };
  workExperience: {
    company: string;
    role: string;
    startDate: string;
    startMonth: string;
    endDate: string;
    endMonth: string;
    stillWorking: boolean;
    description: string;
  };
}

export default function RegisterDeveloper() {
  const [activeStep, setActiveStep] = useState<string>('basic');
  const [formStatus, setFormStatus] = useState<Record<string, FormStatus>>({
    basic: { isCompleted: false, hasError: false },
    education: { isCompleted: false, hasError: false },
    'technical-skills': { isCompleted: false, hasError: false },
    'work-experience': { isCompleted: false, hasError: false },
  });
  const [formData, setFormData] = useState<FormData>({
    basic: {
      firstName: '',
      lastName: '',
      country: '',
      discovery: '',
      rate: '',
      phone: '',
      profilePicture: null,
      resume: null
    },
    education: {
      school: '',
      degree: '',
      country: '',
      startDate: '',
      startMonth: '',
      endDate: '',
      endMonth: '',
      stillStudying: false,
      about: ''
    },
    technicalSkills: {
      role: '',
      experience: '',
      skills: []
    },
    workExperience: {
      company: '',
      role: '',
      startDate: '',
      startMonth: '',
      endDate: '',
      endMonth: '',
      stillWorking: false,
      description: ''
    }
  });

  const handleNext = (currentStep: string, nextStep: string) => {
    const isValid = validateForm(currentStep);
    setFormStatus((prevStatus) => ({
      ...prevStatus,
      [currentStep]: { isCompleted: isValid, hasError: !isValid },
    }));

    if (isValid) {
      setActiveStep(nextStep);
    }
  };

  const handleBack = (previousStep: string) => {
    setActiveStep(previousStep);
  };

  const validateForm = (step: string) => {
    // Implement form validation logic here
    return true; // For now, assuming the form is always valid
  };

  const handleEdit = (section: string) => {
    setActiveStep(section);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="mx-36 my-10 flex items-center justify-center md:block flex-col">
        <h1 className="text-2xl font-semibold mb-4 text-black w-[300px] md:w-[990px]">My Profile</h1>
        <p className="text-gray-600 w-[300px] md:w-[990px] text-left">
          The information that you provide helps us gain a clear understanding of your profile, enabling us to connect you with the right opportunities and companies that match your expertise.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row px-6 md:px-36">
        <Sidebar activeStep={activeStep} formStatus={formStatus} />
        <div className="flex-1 p-6">
          {activeStep === 'basic' && <BasicForm formData={formData.basic} setFormData={setFormData} onNext={() => handleNext('basic', 'education')} />}
          {activeStep === 'education' && <EducationForm formData={formData.education} setFormData={setFormData} onBack={() => handleBack('basic')} onNext={() => handleNext('education', 'technical-skills')} />}
          {activeStep === 'technical-skills' && <TechnicalSkillForm formData={formData.technicalSkills} setFormData={setFormData} onBack={() => handleBack('education')} onNext={() => handleNext('technical-skills', 'work-experience')} />}
          {activeStep === 'work-experience' && <WorkExperienceForm formData={formData.workExperience} setFormData={setFormData} onBack={() => handleBack('technical-skills')} onNext={() => handleNext('work-experience', 'profile-preview')} />}
          {activeStep === 'profile-preview' && <ProfilePreview formData={formData} onEdit={handleEdit} />}
        </div>
      </div>
    </div>
  );
}