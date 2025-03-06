import React from 'react';
// Use a hardcoded version for 0.0.6 with a distinct visual appearance
const VERSION = '0.0.9';

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
  showVersion?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className = '',
  footer,
  showVersion = true,
}) => {
  return (
    <div className={`bg-red-50 rounded-lg shadow-md overflow-hidden ${className}`}>
      {title && (
        <div className="px-4 py-3 border-b border-gray-200">
          <h2>Unpublished NPM Change</h2>
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
          {showVersion && (
            <div className="text-xs text-gray-500 mt-1">Component version: {VERSION}</div>
          )}
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">{footer}</div>}
    </div>
  );
};

export default Card;
