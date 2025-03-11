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
    <div className="flex flex-col rounded-[45px] border border-[#191A23] px-8 py-10 h-full bg-white shadow-[0px_5px_0px_0px_#191A23]">
      <div className="flex justify-between items-start mb-8">
        <div className="relative w-[105px] h-[102px]">
          <Image
            src={image}
            alt={name}
            width={105}
            height={102}
            className="object-contain z-10"
          />
        </div>
        <div className="flex flex-col justify-end h-full">
          <h3 className={`${typography.h4} ${colors.dark} mb-1 text-[24px] font-semibold`}>{name}</h3>
          <p className={`${typography.p} ${colors.dark} text-[16px]`}>{position}</p>
        </div>
        <a
          href="#"
          className="flex items-center justify-center"
          aria-label={`View ${name}'s LinkedIn profile`}
          tabIndex={0}
        >
          <Image
            src="/logos/Social icon in.svg"
            alt="LinkedIn"
            width={34}
            height={34}
            className="object-contain"
          />
        </a>
      </div>

      <div className="border-t border-[#DADADA] pt-8">
        <p className={`${typography.p} ${colors.dark} text-[16px]`}>{experience}</p>
        <p className={`${typography.p} ${colors.dark} mt-1 text-[16px]`}>{skills}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard; 