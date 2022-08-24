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
    SCSS = "Scss",
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
    TYPESCRIPT = "TypeScript",
    REACT = "React",
    REACT_TS = "React(ts)",
  }

  export interface StyleInterface {
    type: ScriptType;
    code: string;
  }
}

export namespace PanelNameSpace {
  export enum LayoutType {
    TOP = "top",
    LEFT = "left",
    RIGHT = "right",
  }

  export enum MessageType {
    LOG = "log",
    ERROR = "error",
    WARNING = "warning",
  }

  export interface ConsoleMessageInterface {
    type: MessageType;
    message: string;
  }

  export interface PanelInterface {
    layout: LayoutType;
    consoleMessages: Array<ConsoleMessageInterface>;
  }
}

export interface EditInterface {
  panel: PanelNameSpace.PanelInterface;
}

export interface ProjectInterface {
  markup: MarkupNameSpace.MarkupInterface;
  style: StyleNameSpace.StyleInterface;
  script: ScriptNameSpace.StyleInterface;
  depend: string[];
}

export interface PenInterface {
  edit: EditInterface;
  project: ProjectInterface;
}
