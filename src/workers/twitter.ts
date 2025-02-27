import {
  X_ACCESS_TOKEN,
  X_API_KEY,
  X_API_KEY_SECRET,
  X_ACCESS_TOKEN_SECRET,
} from "../constants";

import { TwitterClient } from "@virtuals-protocol/game-twitter-plugin";
import TwitterPlugin from "@virtuals-protocol/game-twitter-plugin";

const twitterClient = new TwitterClient({
  apiKey: X_API_KEY,
  apiSecretKey: X_API_KEY_SECRET,
  accessToken: X_ACCESS_TOKEN,
  accessTokenSecret: X_ACCESS_TOKEN_SECRET,
});

const twitterPlugin = new TwitterPlugin({
  twitterClient,
});

export const twitterWorker = twitterPlugin.getWorker({
  functions: [twitterPlugin.postTweetFunction],
});
