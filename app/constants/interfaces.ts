export interface _Header {
    title: string,
    keywords?: string,
    description?:string
}
export interface _Theme {
  readonly light: {
    readonly border: {
      primary: string;
      secondary: string;
      common: string;
    };
    readonly text: {
      primary: string;
      secondary: string;
      common: string;
    };
    readonly background: {
      primary: string;
      secondary: string;
    };
  };
  readonly dark: {
    readonly border: {
      primary: string;
      secondary: string;
      common: string;
    };
    readonly text: {
      primary: string;
      secondary: string;
      common: string;
    };
    readonly background: {
      primary: string;
      secondary: string;
    };
  };
}

export interface _Textbox{
    label: string;
    event: (e) => void;
    design?: string;
    type?: string;
    designParent?: string;
    value: string;
    readOnly?: boolean,
    name?:string
}

export interface _Button {
    data?: any;
    design?: string;
    children: any;
    event: (e) => void;
    outlines?:boolean 
    
}
export interface _Checkbox{
    item?: any,
    onChangeValue?: (value:boolean) => {},
    label?:string
    
}