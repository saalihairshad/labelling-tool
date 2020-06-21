import httpService from "./httpService";

export function getTweets($params = "") {
  let params = Object.entries($params)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");
  return httpService.get("/tweets/?" + params);
}

export function getTweet(id) {
  return httpService.get("/tweets/" + id);
}

export function update(id, data) {
  return httpService.patch("/tweets/" + id, data);
}
