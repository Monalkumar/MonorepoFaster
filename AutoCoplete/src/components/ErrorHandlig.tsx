import React from "react";

type ErrorHandlingProps = {
  error: Error | null;               // Error object ya null
  resetErrorBoundary: () => void;    // Function to reset boundary
};


const ErrorHandlig: React.FC<ErrorHandlingProps> =({error,resetErrorBoundary})=>{
    console.log("error", error)
    return(
        <div>
        <p>Error:{error?.message}</p>
        <button onClick={resetErrorBoundary}>try Again</button>
        </div>
    )
}

export default ErrorHandlig;