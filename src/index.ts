import * as fs from "fs";
export default function rollupPluginInputThrough({ input = (val) => val }) {
  return {
    name: "input-through",
    resolveId(id) {
      return input(id);
    },
    load(id) {
      return fs.readFileSync(id).toString();
    },
  };
}