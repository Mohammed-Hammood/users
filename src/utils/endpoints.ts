
// the API is from Node.js on the same server. 

const baseURL = "https://free-restapi.vercel.app"

export const Endpoints = {
    getUsers: ({ q }: { q?: string } ): string => `${baseURL}/api/users${q ? `?q=${q}` : ''}`,
}