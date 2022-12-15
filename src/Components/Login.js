import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import '../css/styles.css';
import '../js/slider.js';
import '../js/glide.js';
import Navbar from './Navbar'











const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const auth = getAuth()
    const [successMSG, setSuccessMSG] = useState("")
    const [errorMSG, setErrorMSG] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
                setSuccessMSG('Đăng nhập thành công!')
                setEmail('')
                setPassword('')
                setErrorMSG('')
                setTimeout(()=>{
                    setSuccessMSG('');
            

                  navigate('/index2')

                }, 2000);
            })

            .catch((error) => {
                const errorCode = error.code;
                console.log(error.message)
                if (error.message == 'Firebase: Error (auth/invalid-email).')
                {
                    setErrorMSG('Hãy nhập đủ thông tin.')

                }
                if (error.message == 'Firebase: Error (auth/user-not-found).')
                {
                    setErrorMSG('Không tìm thấy người dùng.')
                }

                if (error.message == 'Firebase: Error (auth/wrong-password).')
                {
                    setErrorMSG('Nhập sai thông tin tài khoản.')
                }

                })

            

    }




  return (

    <div>

        
    <div className="top-nav">
      <div className="container d-flex">
    <p>Đặt hàng Online hoặc liên hệ số: 1800-1008</p>
          <ul className="d-flex">
            <li><a href="">Thông Tin Nhóm</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Liên Hệ</a></li>
        </ul>
      </div>
    </div>
    <div className="navigation">
      <div className="nav-center container d-flex">
      <Link to="" className="logo">  <h1>Shop Đồ Chơi</h1></Link>

<ul className="nav-list d-flex">
  <li className="nav-item">
    <a href="" className="nav-link">Home</a>
  </li>
  <li className="nav-item">
  <Link to="" className="nav-link">Shop</Link>
          </li>
          <li className="nav-item">
            <a href="#terms" className="nav-link">Terms</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
          <li className="icons d-flex">
            <a href="login.html" className="icon">
              <i className="bx bx-user"></i>
            </a>
            <div className="icon">
              <i className="bx bx-search"></i>
            </div>
            <div className="icon">
              <i className="bx bx-heart"></i>
              <span className="d-flex">0</span>
            </div>
            <a href="cart.html" className="icon">
              <i className="bx bx-cart"></i>
              <span className="d-flex">0</span>
            </a>
          </li>
        </ul>

        <div className="icons d-flex">
          <a href="login.html" className="icon">
            <i className="bx bx-user"></i>
          </a>
          <div className="icon">
            <i className="bx bx-search"></i>
          </div>
          <div className="icon">
            <i className="bx bx-heart"></i>
            <span className="d-flex">0</span>
          </div>
          <a href="cart.html" className="icon">
            <i className="bx bx-cart"></i>
            <span className="d-flex">0</span>
          </a>
        </div>

        <div className="hamburger">
          <i className="bx bx-menu-alt-left"></i>
        </div>
      </div>
    </div>


 





            <div className='login-container'>
        <form className='login-form'>
            <p>Đăng nhập</p>



            {successMSG&&<>
            <div className = 'success-MSG'> 
            {successMSG}
            </div></>}

            {errorMSG&&<>
            <div className = 'error-MSG'> 
            {errorMSG}
            </div></>}




            <label>Email</label>
            <p></p>
            <input onChange={(e)=>setEmail(e.target.value)} 
            type='text' placeholder='Nhập Email' />
<p></p>
            <label>Password</label>
            <p></p>
            <input onChange={(e)=>setPassword(e.target.value)} 
            type='text' placeholder='Nhập Mật Khẩu' />
<p></p>
            <button onClick={handleLogin}>Đăng nhập</button>
            <div>
    
                <Link to='/signup'>Chưa có tài khoản? Đăng Kí</Link>
            </div>

        </form>



        <footer className="footer">
      <div className="row">
        <div className="col d-flex">
          <h4>THÔNG TIN</h4>
          <a href="">Thành Viên</a>
          <a href="">Liên Hệ</a>
          <a href="">Điều Khoản</a>
          <a href="">Thông Tin Vận Chuyển</a>
        </div>
        <div className="col d-flex">
          <h4>TÌM KIẾM</h4>
          <a href="">Cửa Hàng Online</a>
          <a href="">Dịch Vụ Khách Hàng</a>
          <a href="">Quảng Cáo</a>
          <a href="">Mẫu Hàng Hot</a>
        </div>
        <div className="col d-flex">
          <span><i className='bx bxl-facebook-square'></i></span>
          <span><i className='bx bxl-instagram-alt' ></i></span>
          <span><i className='bx bxl-github' ></i></span>
          <span><i className='bx bxl-twitter' ></i></span>
          <span><i className='bx bxl-pinterest' ></i></span>
        </div>
      </div>
    </footer>
    
    
  


    </div>







    </div>


  )
}

export default Login