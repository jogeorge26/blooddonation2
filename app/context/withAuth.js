// import React, { useContext } from "react";
// import { useRouter } from "next/router";
// import { AuthContext } from "./AuthContext"; // Import AuthContext

// const withAuthRender = (Component) => {
//   return (props) => {
//     const { user, loading } = useContext(AuthContext);
//     const router = useRouter();

//     if (loading) {
//       return <p>Loading...</p>; // Handle loading state (optional)
//     }

//     if (!user) {
//       router.push("/login"); // Redirect to login page if not authenticated
//       return null;
//     }

//     return <Component {...props} />; // Render the component if authenticated
//   };
// };

// export default withAuthRender;
