import Image from "next/image";
import { ExpertiseBadge } from "./ExpertiseBadge";
import VerifiedBadge from "./VerifiedBadge";

interface Expertise {
  icon: string;
  label: string;
}

interface DevCardProps {
  name: string;
  title: string;
  experience: string;
  location: string;
  rate: string;
  verified?: boolean;
  expertise: Expertise[];
  avatarUrl?: string;
}

export const DevCard: React.FC<DevCardProps> = ({
  name,
  title,
  experience,
  location,
  rate,
  verified = false,
  expertise,
  avatarUrl,
}) => {
  return (
    <div className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="relative h-28 w-28 overflow-hidden rounded-full">
            <Image
              src={avatarUrl || "/placeholder.svg"}
              alt={`${name}'s profile picture`}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
              {verified && <VerifiedBadge />}Lumio certified
            </div>
            <div className="flex flex-col gap-1 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <code className="text-xs">&lt;/&gt;</code>
                {title}
              </div>
              <div className="flex items-center gap-2">
                <span>📅</span>
                {experience}
              </div>
              <div className="flex items-center gap-2">
                <span>🇺🇸</span>
                {location}
              </div>
              <div className="mt-2">
                <p className="mb-1 text-sm font-medium text-gray-600">Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((item, index) => (
                    <ExpertiseBadge key={index} icon={item.icon} label={item.label} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-900">{rate}</p>
        </div>
      </div>
    </div>
  );
};