export namespace MarkupNameSpace {
  export enum MarkupType {
    HTML = "HTML",
  }

  export interface MarkupInterface {
    type: MarkupType;
    code: string;
  }
}

export namespace StyleNameSpace {
  export enum StyleType {
    CSS = "CSS",
    LESS = "Less",
  }

  export interface StyleInterface {
    type: StyleType;
    code: string;
  }
}

export namespace ScriptNameSpace {
  export enum ScriptType {
    JAVSCRIPT = "JavaScript",
    REACT = "React",
  }

  export interface ScriptInterface {
    type: ScriptType;
    code: string;
  }
}

export type CodeType =
  | MarkupNameSpace.MarkupType
  | StyleNameSpace.StyleType
  | ScriptNameSpace.ScriptType;

export namespace PanelNameSpace {
  export enum LayoutType {
    TOP = "top",
    LEFT = "left",
    RIGHT = "right",
  }

  export interface PanelInterface {
    layout: LayoutType;
  }
}

export namespace ConsoleNameSpace {
  export enum MessageType {
    LOG = "log",
    ERROR = "error",
    WARNING = "warning",
  }

  export interface ConsoleMessageInterface {
    type: MessageType;
    message: string | boolean | number;
  }
}

export interface EditInterface {
  panel: PanelNameSpace.PanelInterface;
  console: ConsoleNameSpace.ConsoleMessageInterface[];
}

export interface ProjectInterface {
  markup: MarkupNameSpace.MarkupInterface;
  style: StyleNameSpace.StyleInterface;
  script: ScriptNameSpace.ScriptInterface;
}

export interface PenInterface {
  edit: EditInterface;
  project: ProjectInterface;
}
