import fs from "fs";
import parser from "@babel/parser";
import traverse from "@babel/traverse";
import generator from "@babel/generator";

const content = JSON.parse(
  fs.readFileSync("stats.json", { encoding: "utf-8" })
);

(content.modules as any[]).forEach((element: { identifier: string, usedExports: string[], providedExports: string[] }) => {
  const targetPath = element.identifier;
  const usedExports = new Set(element.usedExports);
  const providedExports = new Set(element.providedExports);
  const unusedExports = new Set([...providedExports].filter(provided => !usedExports.has(provided)))
  const targetContent = fs.readFileSync(targetPath, { encoding: "utf-8" })
  const parsed = parser.parse(targetContent);
  traverse(parsed, {
    ExportNamedDeclaration: (path) => {
      // if unusedExports incldue this node name, then remove
      console.log(path.node)
    },
    ExportDefaultDeclaration: (path) => {
      // if unusedExports incldue this node name, then remove
      console.log(path.node)
    }
  })
  const generated = generator(parsed).code;
  fs.writeFileSync(targetPath, generated);
});
