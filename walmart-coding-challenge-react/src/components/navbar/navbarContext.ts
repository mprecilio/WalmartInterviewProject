import { createContext } from "react";


//any to prevent messy code in the other components
let imgKey: string | undefined;
let setImgKey: any;
let viewProfile:boolean | undefined;
let setViewProfile:any;
let editProfile:boolean | undefined;
let setEditProfile:any;
let toggleOffcanvas:boolean | undefined;
let setToggleOffcanvas:any;

export const ProfileContext = createContext({viewProfile, setViewProfile});

export const EditProfileContext = createContext({editProfile, setEditProfile, imgKey, setImgKey});

export const OffCanvasContext = createContext({toggleOffcanvas, setToggleOffcanvas});