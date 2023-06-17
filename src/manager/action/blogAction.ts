
import database from "../../firebase/firebaseConfig";

export const addBlog = (blog:any) => ({
  type: "ADD_BLOG",
  blog,
});

export const addBlogToDatabase = (blogData = {}) => {
  return (dispatch:any) => {
    const { title = "", desc = "", photo = "", date = "" }:any = blogData;
    const blog = { title, desc, photo, date };

    database
      .ref("blogs")
      .push(blog)
      .then((res:any) => {
        dispatch(
          addBlog({
            id: res.key,
            ...blog,
          })
        );
      });
  };
};

export const removeBlog = (id:number) => ({
  type: "REMOVE_BLOG",
  id: id,
});

export const removeBlogFromDatabase = (id:number) => {
  return (dispatch:any) => {
    return database
      .ref(`blogs/${id}`)
      .remove()
      .then(() => {
        dispatch(removeBlog(id));
      });
  };
};

export const editBlog = (id:number, updates:string) => ({
  type: "EDIT_BLOG",
  id,
  updates,
});

export const editBlogFromDatabase = (id:number, updates:string) => {
  return (dispatch:any) => {
    return database
      .ref(`blogs/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editBlog(id, updates));
      });
  };
};

export const setBlogs = (blogs:any) => ({
  type: "SET_BLOGS",
  blogs,
});

export const getBlogsFromDatabase = () => {
  return (dispatch:any) => {
    return database
      .ref("blogs")
      .once("value")
      .then((snapshot:any) => {
        const blogs :any[]= [];

        snapshot.forEach((blog:any) => {
          blogs.push({
            id: blog.key,
            ...blog.val(),
          });
        });

        dispatch(setBlogs(blogs));
      });
  };
};
