import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center space-y-4">
            <h2 className="text-5xl font-bold text-orange-400">Error</h2>
            <p className="text-2xl">Page not Found</p>
            <Link className="btn btn-neutral" to="/">Home</Link>
        </div>
    );
};

export default ErrorPage;