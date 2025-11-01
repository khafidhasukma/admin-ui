export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users.map((user) => ({
      name: user.name,
      email: user.email,
      street: user.address.street,
      city: user.address.city,
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
