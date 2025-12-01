// Simple in-memory database for development
let users = [];

export const localDB = {
  findUser: (email) => {
    return users.find(user => user.email === email);
  },
  
  createUser: (userData) => {
    const user = {
      _id: Date.now().toString(),
      ...userData,
      createdAt: new Date()
    };
    users.push(user);
    return user;
  },
  
  getAllUsers: () => users
};