import httpService from "./httpService";

export function getReviews($params = "") {
  let params = Object.entries($params)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");
  return httpService.get("/itunes/?" + params);
}

export function getReview(id) {
  return httpService.get("/itunes/" + id);
}

export function update(id, data) {
  return httpService.patch("/itunes/" + id, data);
}
