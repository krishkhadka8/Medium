import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = ()=>{
    const {loading, blogs} = useBlogs();
    if(loading){
        return <div>
            loading...
        </div>
    }
    
    return <div >
        <Appbar />
        <div className="flex justify-center">
        <div className="max-w-xl">
            <BlogCard authorName={"Krish"} title={"First blog on react and how it is going till now"} content={"This is my first blog n react and how it is going till now n react and how it is going till now.n react and how it is going till now.n react and how it is going till now. "} publishedDate={"10th June 2024"} />
            <BlogCard authorName={"Krish"} title={"First blog on react and how it is going till now"} content={"This is my first blog n react and how it is going till now n react and how it is going till now.n react and how it is going till now.n react and how it is going till now. "} publishedDate={"10th June 2024"} />
            <BlogCard authorName={"Krish"} title={"First blog on react and how it is going till now"} content={"This is my first blog n react and how it is going till now n react and how it is going till now.n react and how it is going till now.n react and how it is going till now. "} publishedDate={"10th June 2024"} />
            <BlogCard authorName={"Krish"} title={"First blog on react and how it is going till now"} content={"This is my first blog n react and how it is going till now n react and how it is going till now.n react and how it is going till now.n react and how it is going till now. "} publishedDate={"10th June 2024"} />
        </div>
        </div>
    </div>
    
}