import { SearchX } from "lucide-react";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="w-full gap-2 text-red-700 p-4 rounded-lg min-h-screen flex items-center justify-center">
      <SearchX />
      <p>{message}</p>
    </div>
  );
}
