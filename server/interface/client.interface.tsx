export interface clients {
    client_id : string,
    user_id : string,
    client_name: string,
    age: string,
    gender: string,
    congenital_disease: string,
    medicine_name: string,
    times: string,
    T1: string,
    T2: string,
    T3: string,
    T4: string,
    CT1: string,
    CT2: string,
    CT3: string,
    CT4: string,
}

export interface addclient {
    user_id : string,
    client_name: string,
    age: string,
    gender: string,
    congenital_disease: string,
    medecine_name: string,
    times: string,
    T1: string,
    T2: string,
    T3: string,
    T4: string,
    CT1: string,
    CT2: string,
    CT3: string,
    CT4: string,
}

export interface removeclient {
    user_id : string,
    client_name: string
}

export interface eatingtime {
    user_id : string,
    client_name: string,
    timeeating: string,
    times: string,
    T1: string,
    T2: string,
    T3: string,
    T4: string,
    CT1: string,
    CT2: string,
    CT3: string,
    CT4: string,

}