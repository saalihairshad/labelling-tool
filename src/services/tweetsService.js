import httpService from "./httpService";

export function getTweets($params = "") {
  return httpService.get("/tweets/?" + $params);
}

export function getTweet(id) {
  return httpService.get("/tweets/" + id);
}

export function update(id, data) {
  return httpService.patch("/tweets/" + id, data);
}
