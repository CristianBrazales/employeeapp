import axios from "axios";
import { User } from "../entities/User.tsx";

const instance = axios.create({
  baseURL: " http://localhost:3000/",
  timeout: 1000,
});

const loginUser = async function (correo, password) {
  let response = await instance.post("/login", {
    email: correo,
    password: password,
  });

  return response;
};
async function getUsers() {
  try {
    let response = await instance.get("/users");
    return response.data;
  } catch (error) {
    return [];
  }
}

async function createUser(props) {
  let user = new User(props);
  try {
    let response = await instance.post("/register", user);
    return response;
  } catch (error) {
    return error;
  }
}
async function updateUser(id, updates) {
  try {
    let response = await instance.patch("/users/" + id, updates);
    return response;
  } catch (error) {
    return error;
  }
}

async function getUserInfo(id) {
  try {
    let response = await instance.get("/users/" + id);
    return response.data;
  } catch (error) {
    return error;
  }
}

async function deleteUser(id) {
  try {
    let response = await instance.delete("/users/" + id);
    return response.data;
  } catch (error) {
    return error;
  }
}

export { loginUser, getUsers, createUser, updateUser, getUserInfo, deleteUser };
