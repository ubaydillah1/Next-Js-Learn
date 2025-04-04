"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const UsersClient = () => {
  const [users, setUsers] = useState<User[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>("");

  useEffect(() => {
    async function fetchUsers(): Promise<void> {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) throw new Error("Faild to fetch users");
        const data = await response.json();

        setUsers(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (error) return <div>{(error as Error).message}</div>;

  if (loading) return <div>Loading ...</div>;

  return (
    <div>
      <ul className="space-y-4 p-4">
        {users?.map((user) => {
          return (
            <li
              key={user.id}
              className="p-4 bg-white shadow-md rounded-lg text-gray-700"
            >
              <div className="font-bold">{user.name}</div>
              <div>
                <div>Username: {user.name}</div>
                <div>Email: {user.email}</div>
                <div>Phone: {user.phone}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersClient;
