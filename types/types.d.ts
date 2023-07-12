import React, { MutableRefObject, PropsWithChildren } from "react";

export interface iComponent extends PropsWithChildren {
  sRef?: React.MutableRefObject<HTMLDivElement | null>;
  text?: string;
  last?: boolean;
  button?: boolean;
  title?: string;
  check?: boolean;
}

export interface iButton extends iComponent {
  variant?: string;
  link?: string;
  handleScrollClick?: (
    ref: React.MutableRefObject<HTMLDivElement | null>
  ) => void;
  size?: string;
  onClick?: any;
}

export interface iContext {
  aboutRef: MutableRefObject<HTMLDivElement | null>;
  projectsRef: MutableRefObject<HTMLDivElement | null>;
  contactRef: MutableRefObject<HTMLDivElement | null>;
  handleScrollClick: (
    ref: React.MutableRefObject<HTMLDivElement | null>
  ) => void;
}

export interface iContextProps extends iComponent {}

export interface iSubscription extends iComponent {
  price: string;
  disclaimer: string;
}

export interface iUser {
  _type: string;
  username: string;
  providerId: string;
  email: string;
  picture: string;
}
