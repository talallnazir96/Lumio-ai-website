"use client"
interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-3 md:px-0">
      <div className="relative w-full max-w-lg rounded-xl bg-gradient-to-b from-purple-100 to-blue-100 p-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-2xl">AI</span>
          <span className="font-medium text-gray-700">recruiter</span>
        </div>
        <p className="mb-4 text-sm text-gray-600">
          Welcome to AI recruiter! I'm here to assist you at hiring top developers from Lumia AI talent network. Let me
          know your requirements and I will take care of the rest.
        </p>
        <div className="relative mb-4">
          <textarea
            className="h-32 w-full rounded-lg border border-gray-200 p-4 text-sm outline-none focus:border-blue-500"
            placeholder="Enter prompt..."
          />
          <button className="absolute bottom-4 right-4 text-gray-400 hover:text-gray-600">
            <span className="text-lg">💡</span>
            <span className="ml-1 text-xs underline">Show me a prompt example</span>
          </button>
        </div>
        <div className="flex gap-2">
          <button className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 py-2 text-sm font-medium text-white transition-all hover:opacity-90">
            ✨ Start
          </button>
          <button
            onClick={onClose}
            className="w-full rounded-lg border border-gray-200 bg-white py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AIAssistant;