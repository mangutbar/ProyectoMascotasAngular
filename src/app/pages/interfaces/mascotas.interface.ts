export interface Mascota {
    id:        number;
    category?: Category;
    name:      string;
    photoUrls: string[];
    tags?:     Category[];
    status:    Status;
}

export interface Category {
    id:   number;
    name: string;
}

export enum Status {
    Available = "available",
    Pending = "pending",
    Sold = "sold"
}
