import { useContext } from "react";
import { AuthProvider } from "../../provider/Provider";

const Modal = () => {
    const { user } = useContext(AuthProvider)

    const makeAppoinments = (e) => {
        e.preventDefault()
        const firstName = e.target.firstname.value;
        const lastName = e.target.lastname.value;
        const number = e.target.number.value;
        const address = e.target.address.value;
        const email = e.target.email.value;
       

        const info = {
            email, firstName, lastName, number, address
        };
     
        let data = [];
        const getLocalData = localStorage.getItem('appoinment');
        if (getLocalData) {
            data = JSON.parse(getLocalData)
        }
        data.push(info);
        localStorage.setItem('appoinment', JSON.stringify(data))

    }

    return (

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form onSubmit={makeAppoinments}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input name="firstname" type="text" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input name="lastname" type="text" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" value={user.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input name="number" type="number" placeholder="Phone Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Appoinment Date</span>
                        </label>
                        <input type="date" placeholder="Appoinment Date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input name="address" type="text" placeholder="address" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent">Make Appoinment</button>
                    </div>

                </form>
                <div className="modal-action justify-center">
                    <form method="dialog">
                        <button className="btn ">close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;