// client/src/api/auth.js
export const login = async (email, password) => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    credentials: "include", // important for cookies
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};
