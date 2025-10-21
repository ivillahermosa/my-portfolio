import { ReactNode } from "react";

interface IconLabelProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export function IconLabel({ icon, label, className }: IconLabelProps) {
  return (
    <div className={`flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 ${className ?? ""}`}>
      <span className="w-5 h-5 text-gray-500 dark:text-gray-400">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
