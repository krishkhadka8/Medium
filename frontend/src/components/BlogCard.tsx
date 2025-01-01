interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate:string
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <div className=" p-4 border-b border-slate-400 pb-4">
        <div className="flex">
            <Avatar size="small" name={authorName} />
            <div className="font-extraligh pl-2 text-sm">{authorName}</div>
            <div className="flex justify-center flex-col pl-2">
                <Circle />
            </div>
            <div className="pl-2 font-thin text-slate-500 test-sm"> {publishedDate} </div>
        </div>
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100) + `${content.length > 100 ? '...' : ""}`}
        </div>
        <div className="text-slate-400 text-sm font-thin pt-4">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
    </div>
}

function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-500 ">
    </div>
}

export function Avatar({name, size = "small"} : {name:string, size:"small" | "big"}){
    return <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden rounded-full text-slate-100 dark:bg-gray-600 "`}>
        <span className={`${size === "big" ? "text-md" : "text-xs"} font-extralight text-slate-100 dark:bg-gray-600 "`}>{name[0]}</span>
    </div>
    
} 