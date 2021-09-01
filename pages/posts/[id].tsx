import Link from "next/link"
import Layout from "../../components/Layout "
import {getAllPostsIds,getAllPostData, getPostData} from "../../lib/fetch"
import {POST} from "../../types/Types"
import {GetStaticProps,GetStaticPaths} from "next"
import { async } from "rxjs"

const PostDetail:React.FC<POST> = ({id,title,body}) =>{
    console.log(title)
    return(
        <Layout title={title}>
            <p className="m-4 text-center">
                {"ID:"}
                {id}
            </p>
            <p className="mb-4 text-xl font-bold text-center">{title}</p>
            <p className="mx-10 mb-12 text-xl font-bold">{body}</p>
            <Link href="/blog-page">
                <div className="flex cursor-pointer mt-12 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    <a data-testid="back-blog">Back to blog-page</a>
                </div>
            </Link>
        </Layout>
    )
}

export default PostDetail

export const getStaticPaths:GetStaticPaths = async()=>{
    const paths = await getAllPostsIds()
    return{
        paths,
        fallback:false,
    }
}

export const getStaticProps:GetStaticProps = async(ctx)=>{
    const {post:post} = await getPostData(ctx.params.id as string)
    return{
        props:{
            ...post,
        },
    }
}
