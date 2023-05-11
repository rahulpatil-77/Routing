
export interface Iproducts {
    pName: string,
    pid: number,
    pStatus: IpStatus
}

export type IpStatus = "InProgress" | "Dispatched" | "Delivered"