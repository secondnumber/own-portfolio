import BehanceImageColor from "*.png";
import BehanceImageWhite from "*.svg";

export type TagsDataType = {
    id: number
    name: string
}

export type ProjectsDataType = {
    id: number
    name: string
    image: any
}

export type MenuItemsDataType = {
    id: number
    name: string
    link: string
}

export type SocialItemsDataType = {
    id: number
    name: string
    link: string
    imageColor: any
    imageWhite: any
}