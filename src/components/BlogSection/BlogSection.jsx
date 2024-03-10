import React from 'react'
import "./blogSection.css"

import Bimg1 from "../../assets/img/b1.png"
import Bimg2 from "../../assets/img/b2.png"
import Bimg3 from "../../assets/img/b3.png"
import Bimg4 from "../../assets/img/b4.png"
import Bimg5 from "../../assets/img/b5.png"
import Bimg6 from "../../assets/img/b6.png"

const BlogSection = () => {

    const blogData1 =
    {
        imgs: [Bimg1, Bimg2, Bimg3],
        heading: "Small detail, big impact",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.",
        direction: "row",
        class: "data1"

    }

    const blogData2 =
    {
        imgs: [Bimg4, Bimg5, Bimg6],
        heading: "Rank your website",
        text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temoporibus autem",
        direction: "reverse",
        class: "data2"

    }


    return (
        <>
            <section className='blog-section'>
                <div className="container">

                    <div className={`blog-wrapper row align-items-center ${blogData1.direction == "reverse" ? "flex-row-reverse" : "flex-row"} ${blogData1.class}`}>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="blog-images">
                                {
                                    blogData1?.imgs.map((img, i) => (
                                        <img src={img} alt="" />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="blog-content" >
                                <h3>{blogData1.heading}</h3>
                                <p>{blogData1.text}</p>

                                <a href="" className='sec-link'>Learn more </a>

                            </div>
                        </div>
                    </div>


                    <div className={`blog-wrapper row align-items-center ${blogData2.direction == "reverse" ? "flex-row-reverse" : "flex-row"} ${blogData2.class}`}>
                        <div className="col-md-6" data-aos="fade-up">
                            <div className="blog-images">
                                {
                                    blogData2?.imgs.map((img, i) => (
                                        <img src={img} alt="" />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-down">
                            <div className="blog-content">
                                <h3>{blogData2.heading}</h3>
                                <p>{blogData2.text}</p>

                                <a href="" className='sec-link'>Learn more </a>

                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default BlogSection