import React from "react";

interface AccountActionsProps {
  actions: Array<{
    label: string;
    icon: React.ReactNode;
    onClick?: () => void;
  }>;
}

export const AccountActions: React.FC<AccountActionsProps> = ({ actions }) => {
  return (
    <div className="flex w-full justify-between gap-2">
      {actions.map(action => (
        <div 
          key={action.label} 
          className="flex flex-col items-center text-foreground text-xs font-medium gap-1 w-full"
        >
          <button 
            className="bg-[#E4B33D] w-12 h-12 rounded-lg flex items-center justify-center mb-1"
            onClick={action.onClick}
          >
            <span className="text-lg">{action.icon}</span>
          </button>
          {action.label}
        </div>
      ))}
    </div>
  );
};
