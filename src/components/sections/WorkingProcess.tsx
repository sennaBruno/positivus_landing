'use client';

import { processSteps } from '@/data/processData';
import { colors } from '@/styles/typography';
import { useState } from 'react';
import ProcessAccordionItem from '../ui/ProcessAccordionItem';
import SectionTitle from '../ui/SectionTitle';

const WorkingProcess = () => {
	// State to track which step is expanded (default to first step)
	const [expandedStep, setExpandedStep] = useState<string>('01');

	// Handle toggle step
	const handleToggleStep = (stepId: string) => {
		setExpandedStep(expandedStep === stepId ? '' : stepId);
	};

	return (
		<section className={`w-full ${colors.bgWhite} px-6 py-16 md:px-16 lg:px-20`}>
			<div className="mx-auto max-w-7xl">
				{/* Title Section */}
				<SectionTitle
					title="Our Working Process"
					description="Step-by-Step Guide to Achieving Your Business Goals"
					className="mb-10"
				/>

				{/* Process Steps */}
				<div className="mt-10 space-y-6">
					{processSteps.map((step) => (
						<ProcessAccordionItem
							key={step.id}
							id={step.id}
							number={step.number}
							title={step.title}
							description={step.description}
							isExpanded={expandedStep === step.id}
							onToggle={handleToggleStep}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default WorkingProcess; 