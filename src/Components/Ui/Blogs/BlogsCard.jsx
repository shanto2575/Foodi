import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
    const {id, title, author, date, tags, rating, image, excerpt } = blog
    // console.log(blog)
    return (
        <>
            <div className="border flex gap-10 items-center justify-between rounded-2xl p-10">
                <div className="card h-[450px] w-[400px]">
                    <Image
                    src={image}
                    alt={title}
                    fill
                    sizes='(max-width:746px) 100vw,33vw'
                    className="contain-content rounded-2xl"
                    ></Image>
                </div>
                <div >
                    <h2>Title : {title}</h2>
                    <p>Author : {author}</p>
                    <p>Date : {date}</p>
                </div>
                <Link href={`/blogs/${id}`} className="btn btn-info">Show Details</Link>
            </div>
        </>
    );
};

export default BlogCard;