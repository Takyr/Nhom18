import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../css/styles.css';
import '../js/slider.js';
import '../js/glide.js';


const index2 = () => {
  return (
    <div>
        <div className="Index2">
            

      
    <header className="header" id="header">
 
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
      <Link to="/login" className="logo">  <h1>Shop Đồ Chơi</h1></Link>

          <ul className="nav-list d-flex">
            <li className="nav-item">
              <a href="/login" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
            <Link to="/product" className="nav-link">Shop</Link>
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
            <a href="index.html" className="icon">
              <i className="bx bx-user"></i>
            </a>
            <div className="icon">
              <i className="bx bx-search"></i>
            </div>
            <div className="icon">
              <i className="bx bx-heart"></i>
              <span className="d-flex">0</span>
            </div>
            <a href="/Cart" className="icon">
              <i className="bx bx-cart"></i>
              <span className="d-flex">0</span>
            </a>
          </li>
          </ul>

        
        
        
        
          <div className="icons d-flex">

            <a href="index.html" className="icon" >
              <i className="bx bx-user"></i>
            </a>
            <div className="icon">
              <i className="bx bx-search"></i>
            </div>
            <div className="icon">
              <i className="bx bx-heart"></i>
              <span className="d-flex">0</span>
            </div>
            <a href="/Cart" className="icon">
              <i className="bx bx-cart"></i>
              <span className="d-flex">0</span>
            </a>
          </div>

          <div className="hamburger">
            <i className="bx bx-menu-alt-left"></i>
          </div>
        </div>
      </div>



      <section className="section banner">
<div className="left">
  <span className="trend">Plush</span>
  <h1>Ace Attorney</h1>
  <p>Sản Phẩm mới <span className="color">Khuyến mãi 20%</span> Trong Thời Gian Có Hạn</p>
  <Link to="/product" className="btn btn-1">Khám Phá Ngay</Link>
</div>
<div className="right">
<img src={require("../images/banner.png")}/>
</div>
    </section>






    </header>

 
    <section className="section category">
      <div className="cat-center">
        <div className="cat">
            
          <img src={require("../images/cat3.jpg")}/>
          <div>
          <Link to="/product" className="btn btn-primary">GẤU BÔNG - PLUSH</Link>
                
          </div>
        </div>
        <div className="cat">
        <img src={require("../images/cat2.jpg")}/>
          <div>
          <Link to="/productb" className="btn btn-primary">BOARD GAMES</Link>
         
          </div>
        </div>
        <div className="cat">
        <img src={require("../images/cat1.jpg")}/>
          <div>
          <Link to="/productd" className="btn btn-primary">XE ĐỒ CHƠI</Link>
          </div>
        </div>
      </div>
    </section>




    <section className="section new-arrival">
      <div className="title">
        <h1>SẢN PHẨM MỚI</h1>
        <p>Những sản phẩm được chọn lựa bởi người dùng</p>
      </div>

      <div className="product-center">
        <div className="product-item">
          <div className="overlay">
            <a href="productKeychain1.html" className="product-thumb">
            <img src={require("../images/product-1.jpg")}/>
            </a>
          </div>
          <div className="product-info">
            <span>GẤU BÔNG - PLUSH</span>
            <a href="/product">Plush Phoenix Wright</a>
            <h4>125.000đ</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        <div className="product-item">
          <div className="overlay">
            <a href="/product" className="product-thumb">
            <img src={require("../images/product-2.jpg")}/>
            </a>
            <span className="discount">20%</span>
          </div>

          <div className="product-info">
            <span>GẤU BÔNG - PLUSH</span>
            <a href="/product">Plush Maya Fey</a>
            <h4>100.000đ</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        <div className="product-item">
          <div className="overlay">
            <a href="" className="product-thumb">
            <img src={require("../images/product-3.jpg")}/>
            </a>
          </div>
          <div className="product-info">
            <span>GẤU BÔNG - PLUSH</span>
            <a href="/product">Plush Mia Fey</a>
            <h4>90.000đ</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        <div className="product-item">
          <div className="overlay">
            <a href="/product" className="product-thumb">
            <img src={require("../images/product-4.jpg")}/>
            </a>
            <span className="discount">20%</span>
          </div>
          <div className="product-info">
            <span>GẤU BÔNG - PLUSH</span>
            <a href="/product">Plush Franziska von Karma</a>
            <h4>110.000đ</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        <div className="product-item">
          <div className="overlay">
            <a href="/productd" className="product-thumb">
            <img src={require("../images/product-5.jpg")}/>
            </a>
          </div>
          <div className="product-info">
            <span>XE ĐỒ CHƠI</span>
            <a href="/productd">Bộ Xe Tải Lắp Ráp Xanh</a>
            <h4>225.000đ</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        <div className="product-item">
          <div className="overlay">
            <a href="" className="product-thumb">
            <img src={require("../images/product-6.jpg")}/>
            </a>
          </div>
          <div className="product-info">
            <span>XE ĐỒ CHƠI</span>
            <a href="/productd">Bộ 2 Xe Địa Hình Đỏ-Xanh</a>
            <h4>150.000đ</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        <div className="product-item">
          <div className="overlay">
            <a href="/productb" className="product-thumb">
            <img src={require("../images/product-7.jpg")}/>
            </a>
            <span className="discount">30%</span>
          </div>
          <div className="product-info">
            <span>BOARD GAMES</span>
            <a href="/productb">Anki Board Game</a>
            <h4>200.000đ</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        <div className="product-item">
          <div className="overlay">
            <a href="/productb" className="product-thumb">
            <img src={require("../images/product-8.jpg")}/>
            </a>
          </div>
          <div className="product-info">
            <span>BOARD GAMES</span>
            <a href="/productb">Aquarius Board Game</a>
            <h4>210.00đ</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
      </div>
    </section>






    <section className="section banner">
<div className="left">
  <span className="trend">Plush</span>
  <h1>Doraemon</h1>
  <p>Sản Phẩm mới <span className="color">Khuyến mãi 10%</span> Trong Thời Gian Có Hạn</p>
  <a href="#" className="btn btn-1">Khám Phá Ngay</a>
</div>
<div className="right">
<img src={require("../images/banner2.png")}/>
</div>
    </section>







    
  
   


    <section className="section contact">
      <div className="row">
        <div className="col">
          <h2>HỖ TRỢ KHÁCH HÀNG</h2>
          <p>Liên hệ với tổng đài để nhận được sự giúp đỡ</p>
          <a href="" className="btn btn-1">Liên Hệ</a>
        </div>
        <div className="col">
          <form action="">
            <div>
              <input type="email" placeholder="Tài khoản Email"/>
            <a href="">Gửi</a>
            </div>
          </form>
        </div>
      </div>
    </section>

    
    
 
    



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

    <script src={require("../js/glide.js")}></script>
  <script src={require("../js/slider.js")}></script>




  <div className="popup hide-popup">
    <div className="popup-content">
      <div className="popup-close">
        <i className='bx bx-x'></i>
      </div>
      <div className="popup-left">
        <div className="popup-img-container">
          <img className="popup-img" src={require("../images/popup.jpg")} alt="popup"/>      
        </div>
      </div>
      <div className="popup-right">
        <div className="right-content">
          <h1>Khuyến Mãi <span>Giảm</span> 20%</h1>
          <p>Đăng kí vào thư tín của chúng tôi để nhận được thông báo mới nhất!
          </p>
          <form action="#">
            <input type="email" placeholder="Nhập tài khoản email..." className="popup-form"/>
            <a href="#">Đăng Kí</a>
          </form>
        </div>
      </div>
    </div>
  </div>






  <div id="root"></div>




        </div>





    </div>
  )
}

export default index2