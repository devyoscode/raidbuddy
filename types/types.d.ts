import React, { MutableRefObject, PropsWithChildren } from "react";

export interface iComponent extends PropsWithChildren {
  sRef?: React.MutableRefObject<HTMLDivElement | null>;
  text?: string;
  last?: boolean;
  button?: boolean;
  title?: string;
}

export interface iButton extends iComponent {
  variant?: string;
  link?: string;
  handleScrollClick?: (
    ref: React.MutableRefObject<HTMLDivElement | null>
  ) => void;
  size?: string;
}

export interface IContext {
  aboutRef: MutableRefObject<HTMLDivElement | null>;
  projectsRef: MutableRefObject<HTMLDivElement | null>;
  contactRef: MutableRefObject<HTMLDivElement | null>;
  handleScrollClick: (
    ref: React.MutableRefObject<HTMLDivElement | null>
  ) => void;
}

export interface IContextProps extends iComponent {}
