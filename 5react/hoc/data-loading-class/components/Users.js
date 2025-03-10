import Data from "./Data.js";
import List from "./List.js";

const Users = Data(List, "https://randomuser.me/api/?results=10");

export default Users;