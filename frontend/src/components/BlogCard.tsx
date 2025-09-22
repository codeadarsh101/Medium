import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({id,authorName,title,content,publishedDate}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div
        className="p-6 mb-6 w-screen max-w-screen-md 
                   border border-slate-200 rounded-2xl 
                   shadow-sm hover:shadow-md transition-shadow 
                   bg-white cursor-pointer mt-3"
      >
        {/* Author + Date */}
        <div className="flex items-center text-sm text-slate-500">
          <Avatar name={authorName} />
          <span className="pl-2 font-medium text-gray-800">{authorName}</span>
          <Circle />
          <span className="pl-2 font-light">{publishedDate}</span>
        </div>

        {/* Title */}
        <div className="text-2xl font-bold text-gray-900 pt-3">
          {title}
        </div>

        {/* Content Preview */}
        <div className="text-base text-gray-700 leading-relaxed pt-2">
          {content.slice(0, 300) + "..."}
        </div>

        {/* Footer (Read time) */}
        <div className="text-slate-500 text-sm font-light pt-4">
          {`${Math.ceil(content.length / 100)} min read`}
        </div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-400 mx-2"></div>;
}

export function Avatar({name,size = "small"}: {name: string,size?: "small" | "big"}) {
  return (
    <div className={`relative inline-flex items-center justify-center 
                  overflow-hidden bg-gray-200 rounded-full 
                  ${size === "small" ? "w-7 h-7" : "w-12 h-12"}`}>
      <span className={`${
          size === "small" ? "text-sm" : "text-lg"
        } font-semibold text-gray-700`}>
          {name[0].toUpperCase()}
      </span>
    </div>
  );
}
