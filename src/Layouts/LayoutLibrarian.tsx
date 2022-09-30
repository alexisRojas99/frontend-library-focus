import React, { FC } from "react";
import NavBar from "../components/global/NavBar/NavBar";

interface Props {
  children: React.ReactNode;
}

const LayoutLibrarian: FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar
        options={[
          {
            title: "Users",
            link: "/librarian",
          },
          {
            title: "Books",
            link: "/librarian/books",
          },
          {
            title: "Records",
            link: "/librarian/records",
          },
          {
            title: "Profile",
            link: "/librarian/profile",
          },
        ]}
      />
      {children}
    </>
  );
};

export default LayoutLibrarian;
