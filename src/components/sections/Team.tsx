'use client';

import { colors } from '@/styles/typography';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import TeamMemberCard from '../ui/TeamMemberCard';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  experience: string;
  skills: string;
  image: string;
}

const Team = () => {
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'John Smith',
      position: 'CEO and Founder',
      experience: '10+ years of experience in digital marketing.',
      skills: 'Expertise in SEO, PPC, and content strategy',
      image: '/images/team/placeholder.svg',
    },
    {
      id: '2',
      name: 'Jane Doe',
      position: 'Director of Operations',
      experience: '7+ years of experience in project management and team leadership.',
      skills: 'Strong organizational and communication skills',
      image: '/images/team/placeholder.svg',
    },
    {
      id: '3',
      name: 'Michael Brown',
      position: 'Senior SEO Specialist',
      experience: '5+ years of experience in SEO and content creation.',
      skills: 'Proficient in keyword research and on-page optimization',
      image: '/images/team/placeholder.svg',
    },
    {
      id: '4',
      name: 'Emily Johnson',
      position: 'PPC Manager',
      experience: '3+ years of experience in paid search advertising.',
      skills: 'Skilled in campaign management and performance analysis',
      image: '/images/team/placeholder.svg',
    },
    {
      id: '5',
      name: 'Brian Williams',
      position: 'Social Media Specialist',
      experience: '4+ years of experience in social media marketing.',
      skills: 'Proficient in creating and scheduling content, analyzing metrics, and building engagement',
      image: '/images/team/placeholder.svg',
    },
    {
      id: '6',
      name: 'Sarah Kim',
      position: 'Content Creator',
      experience: '2+ years of experience in writing and editing',
      skills: 'Skilled in creating compelling, SEO-optimized content for various industries',
      image: '/images/team/placeholder.svg',
    },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="mt-10 flex justify-center">
          <Button variant="secondary" size="medium">
            See all team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team; 