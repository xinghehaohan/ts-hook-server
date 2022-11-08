import React, { FormEvent } from "react";
import { Form, Input, Button } from "antd";

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
    <Form onFinish={handleSubmit}>
      <Form.Item name="username">
        <Input type="text" name="username" />
      </Form.Item>
      <Form.Item name="password">
        <label htmlFor="password"></label>
        <Input type="password" name="password" id="password" />
      </Form.Item>
      <Form.Item>
        <Button type={"primary"} htmlType={"submit"}>
          login
        </Button>
      </Form.Item>
    </Form>
  );
};
