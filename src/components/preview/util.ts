import { MarkupNameSpace, ScriptNameSpace, StyleNameSpace } from "../../type";

export const composeTogether = (
  markup: MarkupNameSpace.MarkupInterface,
  style: StyleNameSpace.StyleInterface,
  script: ScriptNameSpace.StyleInterface
): Promise<string> => {
  return new Promise((resolve) => {
    resolve(template(markup.code, style.code, script.code));
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
    </head>
    <body>
      ${code}

      <script>
        ${script} 
      </script>
    </body>
  </html>
  
  `;
};
