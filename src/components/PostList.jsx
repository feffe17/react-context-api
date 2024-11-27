import { useContext } from "react";
import { PostsContext } from "../contexts/PostContext";
import Card from "./Card";

export default function PostsList() {
    const { posts, loading, error } = useContext(PostsContext);

    if (loading) return <p>Caricamento in corso...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            {posts.map((post) => (
                <Card
                    key={post.id}
                    title={post.title}
                    description={post.content}
                    image={post.image || "https://placehold.co/600x400"}
                    tags={post.tags}
                    link={`/blog/${post.id}`}
                />
            ))}
        </div>
    );
}
