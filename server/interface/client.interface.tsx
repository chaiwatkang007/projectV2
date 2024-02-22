export interface clients {
    client_id : string,
    user_id : string,
    client_name: string
}

export interface addclient {
    user_id : string,
    client_name : string
}

export interface removeclient {
    user_id : string,
    client_name: string
}