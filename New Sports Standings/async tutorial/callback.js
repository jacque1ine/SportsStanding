const post = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post One', body: 'This is post one'}
];

function getPost(){
    setTimeout(() => {
        let output = ''; 
        post.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        }); 
        document.body.innerHTML = output;
    }, 1000); 

}

function createPost(post) {
    setTimeout
}

getPosts(); 

