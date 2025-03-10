import { colors, typography } from '@/styles/typography';
import Image from 'next/image';

const CallToAction = () => {
    return (
        <section className="w-full py-16 px-6 md:px-16 lg:px-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                {/* Main content container with gray background */}
                <div className="bg-[#F5F5F5] rounded-[45px] flex flex-col lg:flex-row items-center lg:items-start justify-between px-8 md:px-16 lg:px-[60px] py-16 relative">
                    {/* Left content */}
                    <div className="max-w-lg z-10">
                        <h2 className={`${typography.h2} mb-4 font-medium`}>Let's make things happen</h2>
                        <p className={`${typography.pLarge} ${colors.dark} mb-8`}>
                            Contact us today to learn more about how our digital
                            marketing services can help your business grow and
                            succeed online.
                        </p>
                        <button
                            className="bg-[#191A23] text-white py-4 px-8 rounded-md hover:bg-opacity-90 transition-all flex items-center"
                            tabIndex={0}
                            aria-label="Get your free proposal"
                        >
                            <span>Get your free proposal</span>
                        </button>
                    </div>

                    {/* Right illustration - positioned to overflow container */}
                    <div className="relative mt-12 lg:mt-0 lg:absolute lg:right-[-20px] lg:top-1/2 lg:-translate-y-1/2">
                        <Image
                            src="/Frame 19.svg"
                            alt="Abstract illustration"
                            width={494}
                            height={394}
                            className="relative z-10"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction; 