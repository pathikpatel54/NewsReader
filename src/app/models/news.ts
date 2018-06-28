export interface News {
    articles?: News[]
    source: {
        id?: string,
        name?: string
    },
    author?: string,
    title?: string,
    description?: string,
    url?: string,
    urlToImage?: string,
    publishedAt?: string
}