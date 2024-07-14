// src/types.ts

export interface Post {
        _id: string;
        title: string;
        body: any;
        imageUrl?: string;
        categories: string[];
        publishedAt: Date;
}
