import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PostsContext = createContext();

export function PostsProvider({ children }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:3003/posts/");
                setPosts(response.data.lista);
            } catch (err) {
                console.error("Errore durante il caricamento dei dati:", err);
                setError("Errore durante il caricamento dei dati.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <PostsContext.Provider value={{ posts, loading, error }}>
            {children}
        </PostsContext.Provider>
    );
}
