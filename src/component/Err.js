import { useRouteError } from "react-router-dom";

export const Err = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#EDF6F9] text-[#006D77]">
      <h1 className="text-4xl font-bold mb-4">Something Went Wrong</h1>
      <h2 className="text-xl mb-2">Please Reload the Page</h2>
      {error && (
        <h3 className="text-lg text-red-500">
          Error: {error.message}
        </h3>
      )}
      <p className="mt-4">Thank you for your patience!</p>
    </div>
  );
};
