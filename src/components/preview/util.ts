import { MarkupNameSpace, ScriptNameSpace, StyleNameSpace } from "../../type";
import { pipeline } from "../../utils/parse_pipeline";
import raw from "./proxy_console?raw";
import { store } from '../../store/index';
import { clearConsoleMessage } from "../../store/edit";

export const composeTogether = (
  markup: MarkupNameSpace.MarkupInterface,
  style: StyleNameSpace.StyleInterface,
  script: ScriptNameSpace.ScriptInterface
): Promise<{ code: string }> => {
  return new Promise((resolve) => {
    store.dispatch(clearConsoleMessage());
    pipeline(markup, style, script).then((values: string[]) => {
      const code = template(markup.code, values[0], values[1]);
      resolve({ code });
    });
  });
};

const template = (code: string, style: string, script: string) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        ${style}
      </style>

      <script defer>${raw}</script>
      <script defer type="module">
        ${script}
      </script>
    </head>
    <body>
      ${code}
    </body>
  </html>

  `;
};
