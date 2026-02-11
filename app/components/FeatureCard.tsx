import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color }) => {
  return (
    <div className={`p-8 rounded-[1.5rem] ${color} shadow-xl transition-all hover:-translate-y-2 group relative overflow-hidden`}>
      {/* Decorative element for depth */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 blur-xl group-hover:bg-white/20 transition-all"></div>
      
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
        {icon ? (
          <img src={icon} alt={title} className="w-full h-full object-contain group-hover:opacity-100 transition-opacity" />
        ) : (
          <div className="w-10 h-10 bg-white/20 rounded-lg animate-pulse"></div>
        )}
      </div>
      <h3 className="text-2xl font-black mb-3 text-white leading-tight">{title}</h3>
      <p className="text-white/90 text-base leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
