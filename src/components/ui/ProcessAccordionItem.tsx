'use client';

import { colors, typography } from '@/styles/typography';

interface ProcessStepProps {
	id: string;
	number: string;
	title: string;
	description: string;
	isExpanded: boolean;
	onToggle: (id: string) => void;
}

const ProcessAccordionItem = ({
	id,
	number,
	title,
	description,
	isExpanded,
	onToggle
}: ProcessStepProps) => {
	const handleToggle = () => {
		onToggle(id);
	};

	return (
		<div
			className={`
        relative p-[41px_60px] rounded-[45px] border border-[#191A23]
        shadow-[0px_5px_0px_0px_#191A23] transition-all duration-300 overflow-hidden
        ${isExpanded ? colors.bgGreen : 'bg-[#F8F8F8]'}
      `}
		>
			{/* Header - always visible */}
			<div
				className="flex items-center justify-between"
				aria-expanded={isExpanded}
				aria-controls={`content-${id}`}
			>
				<div className="flex items-center">
					<span className={`${typography.h1} mr-8 ${colors.dark}`}>{number}</span>
					<h3 className={`${typography.h3} ${colors.dark}`}>{title}</h3>
				</div>
				<button
					className={`flex h-12 w-12 items-center justify-center rounded-full border border-[#191A23] ${colors.bgWhite} cursor-pointer`}
					onClick={handleToggle}
					onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
					tabIndex={0}
					aria-label={isExpanded ? `Collapse ${title}` : `Expand ${title}`}
				>
					{isExpanded ? (
						<span className="text-2xl font-bold">−</span>
					) : (
						<span className="text-2xl font-bold">+</span>
					)}
				</button>
			</div>

			{/* Divider and Content - conditionally visible */}
			{isExpanded && (
				<>
					{/* Divider line */}
					<hr className="my-6 border-t border-[#191A23] opacity-90" />

					{/* Content */}
					<div
						id={`content-${id}`}
						className=""
					>
						<p className={`${typography.p} leading-relaxed ${colors.dark}`}>{description}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default ProcessAccordionItem; 