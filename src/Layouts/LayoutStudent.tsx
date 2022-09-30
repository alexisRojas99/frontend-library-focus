import React, { FC } from "react";
import NavBar from "../components/global/NavBar/NavBar";

interface Props {
  children: React.ReactNode;
}

const LayoutStudent: FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar
        options={[
          {
            title: "Home",
            link: "/",
          },
          {
            title: "History",
            link: "/history",
          },
          {
            title: "Profile",
            link: "/profile",
          },
        ]}
      />
      {children}
    </>
  );
};

export default LayoutStudent;
