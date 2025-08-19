import React, { useEffect } from "react";

interface ToastComponentProps {
  title: string;
  description: string;
}

function ToastComponent({
  title,
  description,
}: ToastComponentProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-0 ms-2">
      <h1 className="text-sm font-semibold">{title}</h1>
      <p className="text-xs">{description}</p>
    </div>
  );
}

export default ToastComponent;
