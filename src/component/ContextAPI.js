import { createContext } from "react";

const ContextAPI = createContext({
  user: {
    name: "dummy",
    email: "edpierce701@gmail.com",
    description: "usecontextapi",
  },
});
export default ContextAPI;
