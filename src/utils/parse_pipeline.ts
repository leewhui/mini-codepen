import { MarkupNameSpace, ScriptNameSpace, StyleNameSpace } from "../type";
import { transform } from "@babel/standalone";
import less from "less";

const reactRegx = /import (.*) from ['|"]react['|"]/;
const reactDomRegx = /import (.*) from ['|"]react-dom['|"]/;

export const pipeline = async (
  markup: MarkupNameSpace.MarkupInterface,
  style: StyleNameSpace.StyleInterface,
  script: ScriptNameSpace.StyleInterface
) => {
  const result = await Promise.all([parseStyle(style), parseScript(script)]);
  return result;
};

function parseStyle(style: StyleNameSpace.StyleInterface): Promise<string> {
  return new Promise((res, rej) => {
    if (style.type === StyleNameSpace.StyleType.LESS) {
      less.render(style.code).then((val) => res(val.css));
    } else {
      res(style.code);
    }
  });
}

function parseScript(script: ScriptNameSpace.StyleInterface): Promise<string> {
  return new Promise((res, rej) => {
    if (script.type === ScriptNameSpace.ScriptType.REACT) {
      let output = transform(script.code, { presets: ["react"] }).code;

      if (output.match(reactRegx)) {
        output = output.replace(
          reactRegx,
          'import $1 from "https://pdn.zijieapi.com/esm/bv/react@17";'
        );
      }

      if (output.match(reactDomRegx)) {
        output = output.replace(
          reactDomRegx,
          'import $1 from "https://pdn.zijieapi.com/esm/bv/react-dom@17";'
        );
      }
      res(output);
    } else {
      res(script.code);
    }
  });
}
