import React, {
  Dispatch,
  MutableRefObject,
  PropsWithChildren,
  SetStateAction,
} from "react";

export interface iComponent extends PropsWithChildren {
  sRef?: React.MutableRefObject<HTMLDivElement | null>;
  text?: string;
  last?: boolean;
  button?: boolean;
  title?: string;
  check?: boolean;
  setBooleanState?: Dispatch<SetStateAction<boolean>>;
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
  raidCreation: boolean;
  roamCreation: boolean;
  setRaidCreation: Dispatch<SetStateAction<boolean>>;
  setRoamCreation: Dispatch<SetStateAction<boolean>>;
}

export interface iContextProps extends iComponent {}

export interface iSubscription extends iComponent {
  price: string;
  disclaimer: string;
}

export interface iInput extends iComponent {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

export interface iUser {
  _type: string;
  username: string;
  providerId: string;
  email: string;
  picture: string;
}
