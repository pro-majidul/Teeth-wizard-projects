import { useContext } from "react";
import { AuthProvider } from "../../provider/Provider";

const Appoinment = () => {
    const {user } = useContext(AuthProvider);
    console.log(user);
    


    return (
        <div>
            appoinments 
        </div>
    );
};

export default Appoinment;