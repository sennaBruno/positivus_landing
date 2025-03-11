'use client';

import { teamMembers } from '@/data/teamData';
import { colors } from '@/styles/typography';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import TeamMemberCard from '../ui/TeamMemberCard';

const Team = () => {
  return (
    <section className={`w-full ${colors.bgWhite} px-6 py-16 md:px-16 lg:px-20`}>
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <SectionTitle
          title="Team"
          description="Meet the skilled and experienced team behind our successful digital marketing strategies"
          className="mb-16"
        />

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              position={member.position}
              experience={member.experience}
              skills={member.skills}
              image={member.image}
            />
          ))}
        </div>

        {/* See All Team Button */}
        <div className="flex justify-end mt-4">
          <Button
            variant="primary"
            size="medium"
            className="px-10 py-4 rounded-full bg-[#191A23] text-white font-normal"
          >
            See all team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team; 