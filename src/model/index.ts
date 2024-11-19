export interface TUser {
  name: string
}

export interface TDropDownList {
  list: string[]
}

export interface TDropDown extends TDropDownList {
  placeholder: string
  isOpened: boolean
  alt: string
}
