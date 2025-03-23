import React from "react";

const LayoutDashboard = ({
  children,
  notifications,
  revenue,
  users,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div className="max-w-6xl mx-auto p-4 min-w-fit text-center">
      <div className="mb-6">{children}</div>

      <div className="grid grid-cols-2 gap-4 text-black font-bold mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">{users}</div>

        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 row-span-2 flex items-center justify-center">
          {revenue}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md col-span-1">
          {notifications}
        </div>
      </div>
    </div>
  ) : (
    <div className="max-w-6xl mx-auto p-4 min-w-fit text-center bg-white text-black">
      {login}
    </div>
  );
};

export default LayoutDashboard;
