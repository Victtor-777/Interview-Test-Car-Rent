import React from "react";

export function WheelSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.53 2 12 2z"
        fill="#9ca3af"
      />
      <rect x={4} y={4} width={16} height={16} rx={8} fill="#fff" />
      <path
        d="M12 6c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.682-6-6-6z"
        fill="#9ca3af"
      />
      <rect x={8} y={8} width={8} height={8} rx={4} fill="#fff" />
      <path fill="#9ca3af" d="M11 17H13V21H11z" />
      <path fill="#9ca3af" d="M17 11H21V13H17z" />
      <path fill="#9ca3af" d="M3 11H7V13H3z" />
    </svg>
  );
}
