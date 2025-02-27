import { GameAgent, LLMModel } from "@virtuals-protocol/game";
import { VIRTUALS_AGENT_API_KEY } from "./constants";
import { twitterWorker } from "./workers/twitter";
export const agent = new GameAgent(VIRTUALS_AGENT_API_KEY, {
  name: "Sara",
  goal: "To increase engagement for advertisers on X (Twitter)",
  description:
    "A bot that creates an automated giveaway system on X (Twitter) that ensures fair and transparent prize distribution through on-chain random algorithms, rewarding users who repost and subscribe to advertisers’ pages, with participant activity tracked via Virtual Protocol.",
  workers: [twitterWorker],
  llmModel: LLMModel.DeepSeek_R1,
});

(async () => {
  // define custom logger
  agent.setLogger((agent, msg) => {
    console.log(`-----[${agent.name}]-----`);
    console.log(msg);
    console.log("\n");
  });

  // Initialize the agent
  await agent.init();

  // Run the agent for with 60 seconds interval
  // this will stop when agent decides to wait
  await agent.run(60, { verbose: true }); // verbose will give you more information about the agent's actions

  // if you need more control over the agent, you can use the step method
  // await agent.step();
})();
