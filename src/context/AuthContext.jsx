import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {

  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("reg users")) || []
  );

  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("log user")) || null
  );


  const register = (data) => {
    const userExists = registeredUsers.find(
      (user) => user.email === data.email
    );

    if (userExists) {
      return { success: false, message: "User already exists" };
    }

    const updatedUsers = [...registeredUsers, data];

    setRegisteredUsers(updatedUsers);
    localStorage.setItem("reg users", JSON.stringify(updatedUsers));

    return { success: true, message: "Registered successfully" };
  };

  const login = (data) => {
    const user = registeredUsers.find(
      (u) =>
        u.email === data.email &&
        u.password === data.password
    );

    if (!user) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    setLoggedInUser(user);
    localStorage.setItem("log user", JSON.stringify(user));

    return { success: true, user };
  };


  const logout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("log user");
  };

  return (
    <Auth.Provider
      value={{
        setRegisteredUsers,
       setLoggedInUser,
        registeredUsers,
        loggedInUser,
        register,
        login,
        logout,
      }}
    >
      {children}
    </Auth.Provider>
  );
};