import axios from "axios";

const http = axios.create({ baseURL: "http://localhost:3000/todos" });

export async function read() {
  //const {data} = await axios.get("http://localhost:3000/todos");
  const { data } = await http.get("");
  return data;
}

export async function create(body) {
  //const {data} = await axios.post("http://localhost:3000/todos", body);
  const { data } = await http.post("", body);
  return data;
}

export async function update(id, body) {
  //const {data} = await axios.patch(`http://localhost:3000/todos/${id}`, body);
  const { data } = await http.patch(`/${id}`, body);
  return data;
}

export async function remove(id) {
  // const {data} = await axios.delete(`http://localhost:3000/todos/${id}`);
  const { data } = await http.delete(`/${id}`);
  return data;
}
