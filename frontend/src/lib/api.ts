const API_URL = import.meta.env.DEV ? "http://localhost:3001" : "";

export async function api<T>(path: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${API_URL}${path}`, {
        headers: { "Content-Type": "application/json" },
        ...options,
    });
    return res.json();
}