export namespace MarkupNameSpace {
  export enum MarkupType {
    HTML = "html",
  }

  export interface MarkupInterface {
    type: MarkupType;
    code: string;
  }
}

export namespace StyleNameSpace {
  export enum StyleType {
    CSS = "css",
    SCSS = "scss",
    LESS = "less",
  }

  export interface StyleInterface {
    type: StyleType;
    code: string;
  }
}

export namespace ScriptNameSpace {
  export enum ScriptType {
    JAVSCRIPT = "javascript",
    TYPESCRIPT = "typescript",
    REACT = "react",
    REACT_TS = "react_ts",
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

  export interface PanelInterface {
    layout: LayoutType;
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
