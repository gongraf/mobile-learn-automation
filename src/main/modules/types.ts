import { ImageSourcePropType } from "react-native"

interface IUser  {
    firstName :string
    lastName :string
    email :string
    id :string
    password :string
    address? :string
    dob? :Date
}

type ItemProps = {
    title: string, 
    image: ImageSourcePropType,
    price?: string,
    inStock?: boolean,
    id: string
}


export type {
    IUser,
    ItemProps
}