import { supabase } from "@/lib/supabase/client-db";

export default async function AdminPage() {
  // Fetch all users from the public users table
  const { data: users, error } = await supabase
    .from("users")
    .select("id, email, role");

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-medium">Welcome admin!</h1>
      <h2>User List:</h2>
      {error ? (
        <p>Error loading users: {error.message}</p>
      ) : (
        <ul className="text-muted-foreground text-sm">
          {users.map(({ id, email, role }) => (
            <li key={id}>
              Email: {email}, Role: {role}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
