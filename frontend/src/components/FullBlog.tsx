import type { Blog } from "../hook/hook";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const FullBlog = ({ blog }: { blog: Blog }) => {

  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  const handleUpdate = async () => {
    try {
      await axios.put(
        `${BACKEND_URL}/api/v1/blog`,
        {
          id: blog.id, // important, backend needs this
          title,
          content,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      alert("Blog updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update blog");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 gap-8 px-6 md:px-10 w-full max-w-screen-xl pt-12">
          {/* Blog Content */}
          <div className="col-span-12 md:col-span-8">
            {/* Title */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-1xl md:text-5xl font-md text-gray-900 leading-snug border-b border-gray-300 mb-4"
            />

            {/* Date */}
            <p className="text-slate-500 pt-3 text-sm">
              Posted on 2nd December 2023
            </p>

            {/* Content */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="pt-6 text-lg text-gray-800 leading-relaxed tracking-wide w-full h-64 border border-gray-300 rounded p-2"
            />

            {/* Update Button */}
            <button
              onClick={handleUpdate}
              className="mt-4 bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800"
            >
              Update Blog
            </button>
          </div>

          {/* Sidebar Author Info */}
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-slate-700 text-lg font-semibold mb-3">
              About the Author
            </h2>
            <div className="flex items-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="pr-4 flex-shrink-0">
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">
                  {blog.author.name || "Anonymous"}
                </div>
                <p className="pt-1 text-sm text-slate-500 italic">
                  “Random catch phrase about the author's ability to grab
                  attention.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
