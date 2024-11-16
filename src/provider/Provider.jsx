import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthProvider = createContext()
// eslint-disable-next-line react/prop-types
const Provider = ({children}) => {


const ObjInfo = {
    name : 'majidul',
}

    return (

        <AuthProvider.Provider value={ObjInfo}>
            {children}
        </AuthProvider.Provider>
        // <div>
        //     {children}
        // </div>
    );
};

export default Provider;