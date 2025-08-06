import React from 'react'
import Post from '../post/post'

export default function Home() {
  return (
    <>
    <main>
        <section className="hero">
         <div className="container justify-content-center align-items-center">
            <div className="row">
               <div className="text_info col-12">
                  <h1 className="text-center"><strong>Stories</strong> , Blog</h1>
                  <p>Inspirez-vous avec nos derniers articles et histoires</p>
               </div>
            </div>
         </div>
        </section>
        <Post />
    </main>
    </>
  )
}
