export interface Thread{
    id: number;
    title: string;
    file_title: string;
    message: string;
    status: string;
    date?: string;
    classification?: string;
    protocol?: string;
}