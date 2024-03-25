import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Error 404: Page Not Found</h1>
          <p className="py-6">
            We are sorry, but the page you are looking for cannot be found. It
            may have been moved, renamed, or is temporarily unavailable.
          </p>
          <Link to="/"><button className="btn text-white bg-[#23BE0A] hover:bg-transparent hover:btn-success">
          Return to Home
          </button></Link>
        </div>
      </div>
    </div>
  );
};
