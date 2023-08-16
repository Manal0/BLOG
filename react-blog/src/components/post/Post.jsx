import "./post.css"

export default function Post() {
  return (
    <div className="post">
    <img className ="postImg" src="https://i.pinimg.com/originals/ff/13/6e/ff136e26bfe4a60ddd54b6de151aeea2.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates expedita quae, provident neque odio exercitationem ea dolores vero dolore rerum! Voluptatum, vel accusantium quae pariatur voluptas voluptate nihil unde nemo.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates expedita quae, provident neque odio exercitationem ea dolores vero dolore rerum! Voluptatum, vel accusantium quae pariatur voluptas voluptate nihil unde nemo.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates expedita quae, provident neque odio exercitationem ea dolores vero dolore rerum! Voluptatum, vel accusantium quae pariatur voluptas voluptate nihil unde nemo.
    </p>
    </div>
  )
}
