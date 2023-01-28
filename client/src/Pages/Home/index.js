import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
// Import Swiper styles
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Index() {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [order, setorder] = useState("a")
    const [query, setquery] = useState("")
    const sorting = (col) => {
        if (order === "a") {
            const sorted = [...data].sort((a, b) => b[col] - a[col])
            setdata(sorted)
            setorder("b")
        }
        if (order === "b") {
            const sorted = [...data].sort((a, b) => a[col] - b[col])
            setdata(sorted)
            setorder("a")
        }

    }
    const getdata = async () => {
        try {
            setloading(true)
            let res = await axios.get("http://localhost:7070/product")
            setloading(false)
            setdata(await res.data)
        } catch (error) {
            console.log(error);

        }
    }
    const handledel = (id) => {
        console.log(id);
        axios.delete(`http://localhost:7070/product/${id}`).then(() => getdata())
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <>
            <div className='section1'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => swiper}
                >
                    <SwiperSlide className='imgdiv'><h1>Get your <span>Education</span>  today!
                    </h1>
                    </SwiperSlide>
                    <SwiperSlide className='imgdiv'><h1>Get your <span>Education</span>  today!
                    </h1></SwiperSlide>
                    <SwiperSlide className='imgdiv'><h1>Get your <span>Education</span>today!
                    </h1></SwiperSlide>

                </Swiper>

            </div>
            <div className='section2'>
                <div className='sechead'>
                    <div>  <hr className='hr22' />
                        <h3 className='h322'>Popular Courses</h3></div>
                </div>
                <div className='container'>
                    <button className='btn btn-warning' onClick={() => sorting("mark")}>Filter</button><br />
                    Search <input type="text" onChange={(e) => { setquery(e.target.value) }} />
                    <div className='divcart'>
                        {
                            loading ? ("Loading...") : (
                                data.filter(item => item.name.toLowerCase().includes(query.toLocaleLowerCase())).map((item, index) => (
                                    <div class="card" key={index}>
                                        <img src={item.img} class="card-img-top" alt="..." />
                                        <div class="card-body">

                                            <h5 class="card-title">{item.name}</h5>
                                            <p class="card-text">{item.about}</p>
                                            <div className='row row2'>
                                                <div className='col-1'>  <img className='icon' src={item.icon} alt="sekil" /></div>
                                                <div className='col-8'> <span>{item.name2}</span></div>
                                                <div className='col-3'><i>${item.mark}</i></div>
                                                <button className="btn btn-danger" onClick={() => handledel(item._id)}>Delete</button>
                                            </div>

                                        </div>
                                    </div>

                                ))
                            )
                        }
                    </div>
                </div>

            </div>
            <div className='section3'>
                <div className='row'>
                    <div className='col-62 col-6'>
                        <div>
                            <h3>
                                Register now and get a discount <span className='text-dark '>50% </span>discount until 1 January
                            </h3>
                            <p>
                                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.
                            </p>

                        </div>
                    </div>
                    <div className='col-6 col61'>
                        <div>
                            <h3>
                                Search for your course
                            </h3>
                            <input type="text" placeholder='COURSE NAME' /><br />
                            <input type="text" placeholder='CATEGORY' /><br />
                            <input type="text" placeholder='DEGREE' /><br />
                            <input type="submit" value=" SEARCH COURSE" className='btn11' /><br />
                        </div>
                    </div>

                </div>

            </div>
            <div className='section4'>
                <div className='sechead'>
                    <div>  <hr className='hr22' />
                        <h3 className='h322'>Our Services</h3></div></div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <img src='https://preview.colorlib.com/theme/course/images/exam.svg' />
                            <h4>Online Courses</h4>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>
                        <div className='col-4'>
                            <img src='https://preview.colorlib.com/theme/course/images/exam.svg' />
                            <h4>Online Courses</h4>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>
                        <div className='col-4'>
                            <img src='https://preview.colorlib.com/theme/course/images/exam.svg' />
                            <h4>Online Courses</h4>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <img src='https://preview.colorlib.com/theme/course/images/exam.svg' />
                            <h4>Online Courses</h4>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>
                        <div className='col-4'>
                            <img src='https://preview.colorlib.com/theme/course/images/exam.svg' />
                            <h4>Online Courses</h4>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>
                        <div className='col-4'>
                            <img src='https://preview.colorlib.com/theme/course/images/exam.svg' />
                            <h4>Online Courses</h4>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className='section5'>
                <div className='sechead'>
                    <div>  <hr className='hr22' />
                        <h3 className='h322'>Our Services</h3></div></div>
                <div className='container'>
                    <div className='row'>

                        <div className='col-2'>
                            <h2>07</h2>
                            <p>January</p>
                        </div>
                        <div className='col-7'>
                            <h3>Student Festival</h3>
                            <h4>Grand Central Park</h4>
                            <p>
                                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.
                            </p>
                        </div>
                        <div className='col-3'>
                            <img src="https://preview.colorlib.com/theme/course/images/event_1.jpg" />
                        </div>

                    </div>
                    <div className='row'>

                        <div className='col-2'>
                            <h2>07</h2>
                            <p>January</p>
                        </div>
                        <div className='col-7'>
                            <h3>Student Festival</h3>
                            <h4>Grand Central Park</h4>
                            <p>
                                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.
                            </p>
                        </div>
                        <div className='col-3'>
                            <img src="https://preview.colorlib.com/theme/course/images/event_2.jpg" />
                        </div>

                    </div>
                    <div className='row'>

                        <div className='col-2'>
                            <h2>07</h2>
                            <p>January</p>
                        </div>
                        <div className='col-7'>
                            <h3>Student Festival</h3>
                            <h4>Grand Central Park</h4>
                            <p>
                                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.
                            </p>
                        </div>
                        <div className='col-3'>
                            <img src="https://preview.colorlib.com/theme/course/images/event_3.jpg" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Index