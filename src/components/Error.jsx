import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex items-center justify-center min-h-[calc(90vh-232px)]">
           <div>
           <h3 className="text-xl font-medium mb-3">404 Page Not Found!!!</h3>
           <Link className="btn btn-success font-medium"> Go Back</Link>
           </div>
        </div>
    );
};

export default Error;