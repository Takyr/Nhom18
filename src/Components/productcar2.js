import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../css/styles.css';
import '../js/slider.js';
import '../js/glide.js';


const productcar2 = () => {
  return (
    <div>
        <div className="ProductCar2">
            
      


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
      <Link to="/index2" className="logo">  <h1>Shop Đồ Chơi</h1></Link>

<ul className="nav-list d-flex">
  <li className="nav-item">
    <a href="/index2" className="nav-link">Home</a>
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


    <section className="section product-detail">
      <div className="details container">
        <div className="left image-container">
          <div className="main">
          <img src={require("../images/clothes/clothes2.jpg")} id="zoom"/>
          </div>
        </div>
        <div className="right">
          <span>Home/Xe Đồ Chơi</span>
          <h1>Xe Mô Hình Xanh Model Alloy S</h1>
          <div className="price">370.000đ</div>
          <form>
            <div>
              <select>
                <option value="Select Size" selected disabled>
                  Chọn Kích Cỡ
                </option>
                <option value="1">32</option>
                <option value="2">42</option>
                <option value="3">52</option>
                <option value="4">62</option>
              </select>
              <span><i className="bx bx-chevron-down"></i></span>
            </div>
          </form>
          <form className="form">
            <input type="text" placeholder="1" />
            <a href="/Cart" className="addCart">Thêm vào Giỏ hàng</a>
          </form>
          <h3>Thông Tin Sản Phẩm</h3>
          <p>
            Xe được thiết kế theo mô hình xe nguyên bản,
            giúp cho trẻ thỏa sức sáng tạo và tận hưởng niềm vui.    
          </p>
        </div>
      </div>
    </section>


    <section className="section featured">
      <div className="top container">
        <h1>Các Sản Phẩm Liên Quan</h1>
        <a href="#" className="view-more">Xem Thêm</a>
      </div>
      <div className="product-center container">
        <div className="product-item">
          <div className="overlay">
            <a href="" className="product-thumb">
            <img src={require("../images/product-5.jpg")}/>
            </a>
          </div>
          <div className="product-info">
            <span>XE ĐỒ CHƠI</span>
            <a href="">Bộ Xe Tải Đồ Chơi Xanh</a>
            <h4>300.000đ</h4>
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
            <img src={require("../images/product-2.jpg")}/>
            </a>
            <span className="discount">40%</span>
          </div>
          <div className="product-info">
            <span>PLUSH - GẤU BÔNG</span>
            <a href="">Plush Maya Fey</a>
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
            <img src={require("../images/product-7.jpg")}/>
            </a>
          </div>
          <div className="product-info">
            <span>BOARD GAMES</span>
            <a href="">Board Game Ankh</a>
            <h4>700.000đ</h4>
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
            <img src={require("../images/product-4.jpg")}/>
            </a>
            <span className="discount">20%</span>
          </div>
          <div className="product-info">
            <span>PLUSH - GẤU BÔNG</span>
            <a href="">Plush Franziska von Karma</a>
            <h4>100.000đ</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
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
    
    
  

  <div id="root"></div>




        </div>





    </div>
  )
}

export default productcar2