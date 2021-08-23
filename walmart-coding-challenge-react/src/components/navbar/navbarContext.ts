import { createContext } from 'react'

// any to prevent messy code in the other components
let imgKey: string | undefined
let setImgKey: any
let viewProfile: boolean | undefined
let setViewProfile: any
let editProfile: boolean | undefined
let setEditProfile: any
let toggleOffcanvas: boolean | undefined
let setToggleOffcanvas: any

// Context state for view profile component
export const ProfileContext = createContext({ viewProfile, setViewProfile })

// Context state for edit profile state
export const EditProfileContext = createContext({ editProfile, setEditProfile, imgKey, setImgKey })

// Context state for side navbar
export const OffCanvasContext = createContext({ toggleOffcanvas, setToggleOffcanvas })
