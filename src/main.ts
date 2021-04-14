import * as core from "@actions/core";
import action from "./action";

async function run() {
  try {
    action();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
