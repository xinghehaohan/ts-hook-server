import React, { FormEvent, FormEventHandler } from "react";
const apiUrl = process.env.REACT_APP_API_URL;

export const Login = () => {
  const loginPost = (param: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then((res) => {
      if (res.ok) {
        console.log(res.json());
      }
    });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    loginPost({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">login</button>
    </form>
  );
};
