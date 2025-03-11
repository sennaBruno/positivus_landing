export interface TeamMember {
  id: string;
  name: string;
  position: string;
  experience: string;
  skills: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Smith',
    position: 'CEO and Founder',
    experience: '10+ years of experience in digital marketing.',
    skills: 'Expertise in SEO, PPC, and content strategy',
    image: '/images/team/Picture John Smith.svg',
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