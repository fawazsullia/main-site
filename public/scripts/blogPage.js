const postsDiv = document.getElementById("posts")

async function fetchBlogPosts() {
    const response = await fetch("/api/get-blogs")
    return await response.json() 
}

fetchBlogPosts().then((blogPosts)=>{
    blogPosts.forEach(el => {
        renderBlogPost(el)
    });
})


function renderBlogPost(postData) {
let el =  document.createElement("li")
el.classList.add("post-title")
let link = document.createElement("a")
link.href = `/blog/${postData.slug}`
link.innerText = postData.title
el.appendChild(link)
el.id = postData.id
postsDiv.appendChild(el)

}

