import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../css/styles.css';
import '../js/slider.js';
import '../js/glide.js';


const producta= () => {
  return (
    <div>
        <div className="Producta">
            
      


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
        <h1>GẤU BÔNG - PLUSH</h1>
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
            <img src={require("../images/keychain/keychain9.jpg")}/>
            </a>
            <span className="discount">20%</span>
          </div>
          <div className="product-info">
            <span>GẤU BÔNG - PLUSH</span>
            <a href="productKeychain1.html">Gấu Bông Baby Yoda</a>
            <h4>135.000đ</h4>
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
            <img src={require("../images/keychain/keychain10.jpg")}/>
            </a>
            <span className="discount">20%</span>
          </div>
          <div className="product-info">
            <span>GẤU BÔNG - PLUSH</span>
            <a href="productKeychain2.html">Plush Doraemon</a>
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
            <a href="productKeychain3.html" className="product-thumb">
            <img src={require("../images/keychain/keychain11.jpg")}/>
            </a>
            <span className="discount">20%</span>
          </div>
          <div className="product-info">
            <span>GẤU BÔNG - PLUSH</span>
            <a href="productKeychain3.html">Plush Dora The Kid</a>
            <h4>135.000đ</h4>
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
            <img src={require("../images/keychain/keychain12.jpg")}/>
            </a>
          </div>
          <div className="product-info">
            <span>GẤU BÔNG - PLUSH</span>
            <a href="">Plush Nobita</a>
            <h4>140.000đ</h4>
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
            <img src={require("../images/keychain/keychain13.jpg")}/>
            </a>
            <span className="discount">20%</span>
          </div>
          <div className="product-info">
            <span>GẤU BÔNG - PLUSH</span>
            <a href="">Plush Suneo</a>
            <h4>140.000đ</h4>
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
            <img src={require("../images/keychain/keychain14.jpg")}/>
            </a>
          </div>
          <div className="product-info">
            <span>GẤU BÔNG - PLUSH</span>
            <a href="">Plush Jaian</a>
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
            <a href="" className="product-thumb">
            <img src={require("../images/keychain/keychain15.jpg")}/>
            </a>
            <span className="discount">20%</span>
          </div>
          <div className="product-info">
            <span>GẤU BÔNG - PLUSH</span>
            <a href="">Plush Dora Med III</a>
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
            <img src={require("../images/keychain/keychain16.jpg")}/>
            </a>
          </div>
          <div className="product-info">
            <span>GẤU BÔNG - PLUSH</span>
            <a href="">Plush DoraNichov</a>
            <h4>130.000đ</h4>
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
      <a href="/product"><span>1</span></a>
    <a href="/producta"><span>2</span></a>
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

export default producta