import React from "react";
import { UserAuth } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
	const {user }= UserAuth();
    console.log(user)
	if (!user) {
        console.log("hi")
		return <Navigate to="/" />;
	}
	return children;
}

export default ProtectedRoute;
