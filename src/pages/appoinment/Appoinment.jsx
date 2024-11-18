import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../provider/Provider";

const Appoinment = () => {
    const { user } = useContext(AuthProvider);
    const [savedata, setSavedata] = useState([])



    useEffect(() => {
        const storageItems = localStorage.getItem('appoinment');
        const data = JSON.parse(storageItems);
        const items = data.filter(item => item.email === user.email);
        setSavedata(items)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])







    return (
        <div>
           {
            savedata.map( (item, i) => <div key={i}>
                <p>{item.email}</p>
            </div>)
           }
        </div>
    );
};

export default Appoinment;