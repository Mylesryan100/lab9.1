
import React from "react";

export type AlertType = 'success' | 'error' | 'warning' | 'info';
 
export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

  const alertStyles: Record<string, string> = {
  success: "bg-green-100 border-green-500 text-green-700",
  error: "bg-red-100 border-red-500 text-red-700",
  warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
  info: "bg-blue-100 border-blue-500 text-blue-700",
};

export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children,
}) => {
  const style = alertStyles[type];

   return (
    <div
      className={`border-l-4 p-4 rounded-md mb-4 flex justify-between items-start ${style}`}
      role="alert"
      aria-live="assertive"
    >
      <div>
        <strong className="block capitalize">{type}:</strong>
        <span>{message}</span>
        {children && <div className="mt-2">{children}</div>}
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-lg font-bold leading-none"
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  );
};