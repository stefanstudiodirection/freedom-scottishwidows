import React, { useState } from 'react';

interface PromotionCardProps {
  title: string;
  backgroundImage: string;
  isWide?: boolean;
}

export const PromotionCard: React.FC<PromotionCardProps> = ({
  title,
  backgroundImage,
  isWide = true
}) => {
  const [isInterested, setIsInterested] = useState(false);

  const handleInterestClick = () => {
    setIsInterested(!isInterested);
  };

 const cardClasses = isWide 
  ? "flex flex-col relative aspect-[1.335] min-w-60 min-h-[200px] w-[267px] my-auto pt-[111px] pb-4 px-4 rounded-lg items-start"
  : "flex flex-col relative aspect-[0.47] min-h-[200px] w-[94px] my-auto pl-4 pt-[111px] pb-4 rounded-lg items-start";

  return (
    <article className={cardClasses}>
      <img
        src={backgroundImage}
        className="absolute h-full w-full object-cover inset-0 rounded-lg"
        alt=""
      />
      <button 
        className={`relative items-center bg-[#E4B33D] flex gap-1.5 text-sm text-black leading-none px-2.5 py-1.5 rounded-[30.472px] hover:bg-[#d4a332] transition-colors ${isInterested ? 'bg-green-500 hover:bg-green-600' : ''}`}
        onClick={handleInterestClick}
      >
        <span className="self-stretch my-auto">
          {isInterested ? 'Interested!' : 'Limited offer'}
        </span>
      </button>
      <h3 className="relative text-white text-xl leading-[22px] mt-2">
        {title}
      </h3>
    </article>
  );
};
