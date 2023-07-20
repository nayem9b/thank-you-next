import React from "react";
import DashBoardLayout from "../../components/Layouts/DashboardLayout";
import RootLayout from "../../components/Layouts/RootLayout";

const Admin = () => {
  return (
    <div>
      <h1>This is admin page</h1>
    </div>
  );
};

export default Admin;

Admin.getLayout = function getLayout(page: any) {
  return (
    <DashBoardLayout>
      <RootLayout>{page}</RootLayout>
    </DashBoardLayout>
  );
};
