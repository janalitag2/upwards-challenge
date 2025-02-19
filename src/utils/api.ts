import { FeedResponse } from "../types/api";

export function validateResponse(
  response: FeedResponse
): response is FeedResponse {
  return "feed" in response && "entry" in response.feed;
}
