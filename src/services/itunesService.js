import httpService from "./httpService";

export function getReviews($params = "") {
  return httpService.get("/itunes/?" + $params);
}

export function getReview(id) {
  return httpService.get("/itunes/" + id);
}

export function update(id, data) {
  return httpService.patch("/itunes/" + id, data);
}
