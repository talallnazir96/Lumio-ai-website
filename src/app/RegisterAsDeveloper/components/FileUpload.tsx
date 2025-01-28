"use client"
import React, { useState } from "react";

interface FileUploadProps {
  onComplete?: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onComplete }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="w-full flex flex-col justify-between h-full">
      <h3 className="text-lg font-medium mb-2 text-black">
        Upload your CV, we will fill the information for you.
      </h3>
      <div className="w-full border-2 border-dashed border-gray-300 bg-blue-100 rounded-lg p-6 text-center flex-1 flex flex-col justify-center">
        <label htmlFor="file-input" className="cursor-pointer">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <p className="mt-2 text-sm text-black">Click to upload your file</p>
          <input
            id="file-input"
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
        </label>
      </div>
      {fileName && (
        <p className="mt-2 text-sm text-black">Uploaded file: {fileName}</p>
      )}
      <p className="mt-2 text-sm text-black">
        If you skip this step now you can still upload your CV later.
      </p>
    </div>
  );
};

export default FileUpload;