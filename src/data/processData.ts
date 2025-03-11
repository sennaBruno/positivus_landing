export interface ProcessStep {
	id: string;
	number: string;
	title: string;
	description: string;
}

export const processSteps: ProcessStep[] = [
	{
		id: '01',
		number: '01',
		title: 'Consultation',
		description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
	},
	{
		id: '02',
		number: '02',
		title: 'Research and Strategy Development',
		description: 'Our team conducts thorough research on your industry, competitors, and target market to develop a comprehensive digital marketing strategy tailored to your unique business needs and goals.',
	},
	{
		id: '03',
		number: '03',
		title: 'Implementation',
		description: 'Once the strategy is approved, our team begins implementing the various components of the marketing plan, from setting up campaigns to creating content and establishing tracking mechanisms.',
	},
	{
		id: '04',
		number: '04',
		title: 'Monitoring and Optimization',
		description: 'We continuously monitor the performance of your marketing campaigns and make data-driven optimizations to improve results, maximize ROI, and ensure we\'re meeting the established KPIs and objectives.',
	},
	{
		id: '05',
		number: '05',
		title: 'Reporting and Communication',
		description: 'Regular detailed reports are provided to keep you informed about the performance of your campaigns. We maintain open communication channels to discuss results, insights, and any adjustments needed to the strategy.',
	},
	{
		id: '06',
		number: '06',
		title: 'Continual Improvement',
		description: 'Based on accumulated data and performance insights, we refine our approach over time to ensure long-term success. We identify new opportunities and implement innovative solutions to stay ahead of market trends and competition.',
	},
]; 