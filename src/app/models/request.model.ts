import { User } from "./user.model";

export interface Request {
    data: User[]
    page: number;
    per_page: number;
    support?: any;
    total: number;
    total_pages: number;
}