import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../css/styles.css';
import '../js/slider.js';
import '../js/glide.js';


const producte= () => {
  return (
    <div>
        <div className="Producte">
            
      


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



 


    <section className="section all-products" id="products">
      <div className="top container">
        <h1>XE ĐỒ CHƠI</h1>
        <form>
          <select>
          <option value="1">Sắp Xếp Theo: Mặc Định</option>
            <option value="2">Theo Giá Tiền</option>
            <option value="3">Theo Độ Phổ Biến</option>
            <option value="4">Theo Khuyến Mãi</option>
            <option value="5">Theo Đánh Giá</option>
          </select>
          <span><i className="bx bx-chevron-down"></i></span>
        </form>
      </div>
      <div className="product-center container">
        <div className="product-item">
          <div className="overlay">
            <a href="productKeychain1.html" className="product-thumb">
            <img src={require("../images/clothes/clothes9.jpg")}/>
            </a>
            <span className="discount">10%</span>
          </div>
          <div className="product-info">
            <span>XE ĐỒ CHƠI</span>
            <a href="productKeychain1.html">Xe Tải Địa Hình Đồ Chơi</a>
            <h4>250.000đ</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        <div className="product-item">
          <div className="overlay">
            <a href="productKeychain2.html" className="product-thumb">
            <img src={require("../images/clothes/clothes10.jpg")}/>
            </a>
            <span className="discount">10%</span>
          </div>
          <div className="product-info">
            <span>XE ĐỒ CHƠI</span>
            <a href="productKeychain2.html">Xe Đồ Chơi Cảnh Sát</a>
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
            <a href="productKeychain3.html" className="product-thumb">
            <img src={require("../images/clothes/clothes11.jpg")}/>
            </a>
            <span className="discount">10%</span>
          </div>
          <div className="product-info">
            <span>XE ĐỒ CHƠI</span>
            <a href="productKeychain3.html">Xe Đồ Chơi Bám Địa Hình Xanh</a>
            <h4>1.100.000đ</h4>
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
            <img src={require("../images/clothes/clothes12.jpg")}/>
            </a>
          </div>
          <div className="product-info">
            <span>XE ĐỒ CHƠI</span>
            <a href="">Xe Lắp Ráp Giấy Màu Vàng</a>
            <h4>30.000đ</h4>
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
            <img src={require("../images/clothes/clothes13.jpg")}/>
            </a>
            <span className="discount">10%</span>
          </div>
          <div className="product-info">
            <span>XE ĐỒ CHƠI</span>
            <a href="">Bộ Đồ Chơi Xe Trẻ Em 2</a>
            <h4>130.000đ</h4>
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
            <img src={require("../images/clothes/clothes14.jpg")}/>
            </a>
          </div>
          <div className="product-info">
            <span>XE ĐỒ CHƠI</span>
            <a href="">Bộ Xe Đua Công Thức 1</a>
            <h4>170.000đ</h4>
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
            <img src={require("../images/clothes/clothes15.jpg")}/>
            </a>
            <span className="discount">10%</span>
          </div>
          <div className="product-info">
            <span>XE ĐỒ CHƠI</span>
            <a href="">Bộ Xe Mô Hình Đỏ</a>
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
            <a href="" className="product-thumb">
            <img src={require("../images/clothes/clothes16.jpg")}/>
            </a>
          </div>
          <div className="product-info">
            <span>XE ĐỒ CHƠI</span>
            <a href="">Xe Tải Địa Hình Đồ Chơi Xanh Lá</a>
            <h4>210.000đ</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
          
          
          
  
                    
                    
                    
      </div>
    </section>
    <section className="pagination">
      <div className="container">
      <a href="/productd"><span>1</span></a>
    <a href="producte"><span>2</span></a>
        <span><i className="bx bx-right-arrow-alt"></i></span>
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

export default producte