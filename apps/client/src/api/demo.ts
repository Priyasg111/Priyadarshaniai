import { apiFetch } from "@/lib/api";

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

// GET 请求示例
export const getUser = async (id: number): Promise<User> => {
  const response = await apiFetch(`/api/users/${id}`, { auth: false });
  return (await response.json()) as User;
};

// POST 请求示例
export const createUser = async (data: CreateUserRequest): Promise<User> => {
  const response = await apiFetch("/api/users", {
    method: "POST",
    auth: false,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return (await response.json()) as User;
};

// supabase 请求示例
// export const getUserById = async (id: number): Promise<User | null> => {
//   const { data, error } = await supabase
//     .from("users")
//     .select("*")
//     .eq("id", id)
//     .single();

//   if (error) return null;
//   return data as User;
// };
