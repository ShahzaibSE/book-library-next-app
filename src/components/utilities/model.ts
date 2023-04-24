interface Book {
    id: number;
    name: string;
    type: string;
    available: boolean;
    price?: number;
    currentStock?:number;
    ibn?:string;
    author?:string;
}