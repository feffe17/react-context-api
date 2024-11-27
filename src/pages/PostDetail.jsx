import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:3003/posts/id/${id}`);
                setPost(response.data);
            } catch (err) {
                console.error("Errore durante il caricamento del post:", err);
                setError("Errore durante il caricamento del post.");
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) return <p>Caricamento in corso...</p>;
    if (error) return <p>{error}</p>;

    return (
        <main>
            <h2>{post.title}</h2>
            <img src={post.image || "https://placehold.co/600x400"} alt={post.title} />
            <p>{post.content}</p>
            <div>
                {post.tags?.map((tag, index) => (
                    <span key={index} style={{ marginRight: "8px" }}>
                        #{tag}
                    </span>
                ))}
            </div>
        </main>
    );
}
