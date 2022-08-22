import { FC } from "react";
import Editor, { Monaco } from "@monaco-editor/react";

interface CodeEditorInterface {
  value: string;
  language: string;
  onChange: (value: string) => void;
}

export const CodeEditor: FC<CodeEditorInterface> = (props) => {
  const { value, language } = props;

  const beforeMountEditor = (monaco: Monaco) => {
    import("monaco-themes/themes/Dracula.json").then((data: any) => {
      monaco.editor.defineTheme("monokai", data);
      monaco.editor.setTheme("monokai");
    });
  };

  return (
    <Editor
      height={"100%"}
      theme="vs-dark"
      defaultLanguage={language}
      defaultValue={value}
      beforeMount={beforeMountEditor}
      onChange={(value) => props.onChange(value || "")}
    ></Editor>
  );
};
