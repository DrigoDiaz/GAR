export interface Thread{
    id: number;
    title: string;
    message: string;
    status: string;
    classification?: string;
    protocol?: string;
}