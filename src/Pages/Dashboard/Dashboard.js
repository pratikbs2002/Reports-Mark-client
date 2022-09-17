import React from "react";
import "../../App.css";
import AddNewStudentForm from "../StudentManagement/AddNewStudentForm";
import Sidebar from "../../components/Sidebar.js";
function Dashboard(props) {
    const onLogOut = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        props.setAuth(false);
        props.setAdmin(false);
    };
    return (
        <>
            <div className="Flex">
                <Sidebar />
                <div className="Content-container form">
                    <button onClick={onLogOut} className="btn-sub">
                        Log Out
                    </button>
                    <AddNewStudentForm />
                    {/* <div className="container">Dashboard</div> */}
                </div>
            </div>
        </>
    );
}
export default Dashboard;
