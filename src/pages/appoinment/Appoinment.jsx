import { useContext } from "react";
import { AuthProvider } from "../../provider/Provider";

const Appoinment = () => {
    const {googleLogin, LoginUser,signUpUser } = useContext(AuthProvider);
    console.log(googleLogin,LoginUser,signUpUser);


    return (
        <div>
            appoinments 
        </div>
    );
};

export default Appoinment;