export const dynamic = "force-dynamic";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const UsersServer = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) throw new Error("Faild to fetch users");
  const data: User[] = await response.json();

  console.log(data);

  return (
    <div>
      <h1>Hello World</h1>
      <ul className="space-y-4 p-4">
        {data?.map((user) => {
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

export default UsersServer;
