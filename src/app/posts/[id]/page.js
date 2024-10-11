const PostShow = props => {
  const { id } = props.params
  const { title, body } = props.searchParams
  return (
    <div>
      <h1>ID: {id}</h1>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
    </div>
  )
}

export default PostShow
