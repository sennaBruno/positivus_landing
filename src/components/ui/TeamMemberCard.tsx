import { colors, typography } from '@/styles/typography';
import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  position: string;
  experience: string;
  skills: string;
  image: string;
}

const TeamMemberCard = ({ name, position, experience, skills, image }: TeamMemberCardProps) => {
  return (
    <div className="flex flex-col rounded-[20px] border border-[#F3F3F3] p-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 bg-[#B9FF66] rounded-full w-20 h-20"></div>
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="absolute inset-0 object-cover rounded-full z-10"
          />
        </div>
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#191A23]"
          aria-label={`View ${name}'s LinkedIn profile`}
          tabIndex={0}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33325 5.33334H0.666585V16H3.33325V5.33334Z" fill="white" />
            <path d="M2.00008 3.99999C2.9205 3.99999 3.66675 3.10451 3.66675 1.99999C3.66675 0.895477 2.9205 0 2.00008 0C1.07966 0 0.333418 0.895477 0.333418 1.99999C0.333418 3.10451 1.07966 3.99999 2.00008 3.99999Z" fill="white" />
            <path d="M11.9999 16H15.3333V10C15.3333 8.56 13.9599 7.33334 12.6666 7.33334C12.0159 7.33334 11.2266 7.73334 10.6666 8.33334V7.33334H7.99992V16H10.6666V11.3333C10.6666 10.6 11.2666 10 11.9999 10C12.7333 10 13.3333 10.6 13.3333 11.3333V16H11.9999Z" fill="white" />
          </svg>
        </button>
      </div>
      <h3 className={`${typography.h4} ${colors.dark} mb-1`}>{name}</h3>
      <p className={`${typography.p} ${colors.dark} mb-6`}>{position}</p>
      <p className={`${typography.p} ${colors.dark}`}>{experience}</p>
      <p className={`${typography.p} ${colors.dark} mt-1`}>{skills}</p>
    </div>
  );
};

export default TeamMemberCard; 