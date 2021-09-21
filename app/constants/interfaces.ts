import { ReactElement } from "react";

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
    name?: string
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
export interface _ThemeIllustrationCard{
    isDark?: boolean,
    onChoose:(type:string)=>void
}

export interface _App{
  readonly init?: string,
  readonly check?:string
}

export interface _CompanyConfig {
  name:string;
  address :string;
  mail?:string;
  owner?:string;
  phone:string;
}

export interface _MenuItem {
  router: string;
  name: string;
  icon?:ReactElement
}