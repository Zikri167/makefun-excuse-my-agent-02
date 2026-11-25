import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I missed your deadline because I kept rewriting this excuse until it was perfect, which, if you think about it, is the only thing I actually finished on time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
