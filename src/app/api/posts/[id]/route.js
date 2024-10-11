import find from 'lodash.find'

export async function GET(request) {
  const idArray = request.url.split('/')

  const id = Number(idArray[idArray.length - 1])

  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  const posts = await response.json()

  console.log('posts', posts)

  const post = find(posts, { id })

  console.log('post', post)

  return Response.json({ post })
}
