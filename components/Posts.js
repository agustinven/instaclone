import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'agus_avendano',
    userImg:
      'https://media-exp1.licdn.com/dms/image/C4E03AQH4OJaUnx-MtA/profile-displayphoto-shrink_200_200/0/1578096364085?e=1651104000&v=beta&t=IFDALgIgS0yPUko0GFJMkRN5PeNWP4HdXd-39Lzq48w',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQH4OJaUnx-MtA/profile-displayphoto-shrink_200_200/0/1578096364085?e=1651104000&v=beta&t=IFDALgIgS0yPUko0GFJMkRN5PeNWP4HdXd-39Lzq48w',
    caption: 'SUSCRIBE AND DESTROY THE LIKE BUTTON!',
  },
  {
    id: '123',
    username: 'agus_avendano',
    userImg:
      'https://media-exp1.licdn.com/dms/image/C4E03AQH4OJaUnx-MtA/profile-displayphoto-shrink_200_200/0/1578096364085?e=1651104000&v=beta&t=IFDALgIgS0yPUko0GFJMkRN5PeNWP4HdXd-39Lzq48w',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQH4OJaUnx-MtA/profile-displayphoto-shrink_200_200/0/1578096364085?e=1651104000&v=beta&t=IFDALgIgS0yPUko0GFJMkRN5PeNWP4HdXd-39Lzq48w',
    caption: 'SUSCRIBE AND DESTROY THE LIKE BUTTON!',
  },
]

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    [db]
  )

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
