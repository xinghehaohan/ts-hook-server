import React from "react";
import { useState, useEffect } from "react";
import { SearchPanel } from "./serch-panel";
import { List } from "./list";
import { cleanObject, useMount, useDebounce } from "../../utils";
import qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, SetUsers] = useState([]);
  const [list, setList] = useState([]);
  const debouncedParam = useDebounce(param, 500);
  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debouncedParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        SetUsers(await res.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </div>
  );
};
