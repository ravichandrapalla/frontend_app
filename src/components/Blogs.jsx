import axios from "axios";
import React, { useEffect } from "react";
import config from "../../config";
import api from "../../axiosInstance";
import Chat from "./Chat";

const Blogs = () => {
  useEffect(() => {
    async function getData() {
      const resp = await api.get("/blogs");
    }
    getData();
  }, []);
  return (
    <div>
      Blogs<button> Log out</button>
      {/* <Chat /> */}
    </div>
  );
};

export default Blogs;
