import * as core from "@actions/core";
import action from "./action";
import { splitTag } from "./usecase";

function run() {
  try {
    action(splitTag);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
