import qs from "qs";
const api_url = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  token: string;
  data?: object;
}
export const http = async (
  path: string,
  { data, token, headers, ...customConfig }: Config
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    path += `${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window.fetch(`${api_url}/${path}`, config).then(async (res) => {
    if (res.status === 401) {
    }

    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
  //TODO WUYGUIY
};
