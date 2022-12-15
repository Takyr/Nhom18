import React from  'react'
import Navbar from './Navbar'
import '../css/styles.css';
import '../js/slider.js';
import '../js/glide.js';




const Home = () => {
    return (

        <div>
<div className='head'>
<meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
    <link
      href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      rel="stylesheet"
    />
 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.4.1/css/glide.core.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.4.1/css/glide.theme.css"/>

    <link rel="stylesheet" href="./Home.css" />
    <title>Nhom18LTWeb</title>
    

</div>

<div className='body'>


    <header class="header" id="header">


      <div className="top-nav">
        <div className="container d-flex">
          <p>Đặt hàng Online hoặc liên hệ số: 1800-1008</p>
          <ul class="d-flex">
            <li><a href="">Thông Tin Nhóm</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Liên Hệ</a></li>
          </ul>
        </div>
      </div>
      <div class="navigation">
        <div class="nav-center container d-flex">
        <a href="/" class="logo"><h1>Merchandise Shop</h1></a>

          <ul class="nav-list d-flex">
            <li class="nav-item">
              <a href="/" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="product.html" class="nav-link">Shop</a>
            </li>
            <li class="nav-item">
            <a href="#terms" class="nav-link">Terms</a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link">About</a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link">Contact</a>
            </li>
            <li class="icons d-flex">
            <a href="index.html" class="icon">
              <i class="bx bx-user"></i>
            </a>
            <div class="icon">
              <i class="bx bx-search"></i>
            </div>
            <div class="icon">
              <i class="bx bx-heart"></i>
              <span class="d-flex">0</span>
            </div>
            <a href="cart.html" class="icon">
              <i class="bx bx-cart"></i>
              <span class="d-flex">0</span>
            </a>
          </li>
          </ul>

        
        
        
        
          <div class="icons d-flex">

            <a href="index.html" class="icon" >
              <i class="bx bx-user"></i>
            </a>
            <div class="icon">
              <i class="bx bx-search"></i>
            </div>
            <div class="icon">
              <i class="bx bx-heart"></i>
              <span class="d-flex">0</span>
            </div>
            <a href="cart.html" class="icon">
              <i class="bx bx-cart"></i>
              <span class="d-flex">0</span>
            </a>
          </div>

          <div class="hamburger">
            <i class="bx bx-menu-alt-left"></i>
          </div>
        </div>
      </div>

    <div class="hero">
      <div class="glide" id="glide_1">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <div class="center">
                <div class="left">
             <img src="./images/objection.png" alt="" />
                    <h1 class=""></h1>
                  <span class="">Cảm hứng mới 2022</span>

                  <p>Sản phẩm lưu niệm của tựa game Luật Sư Tài Ba!</p>
                  <a href="#" class="hero-btn">ĐẶT HÀNG NGAY</a>
                </div>
                <div class="right">
                    <img class="img1" src="./images/hero-1.jpg" alt=""/>
                </div>
              </div>
            </li>
            <li class="glide__slide">
              <div class="center">
                <div class="left">
               <img src="./images/takethat.png" alt="" />
                                 <h1></h1>
                  <span>Cảm hứng mới 2022</span>
                  <p>Sản phẩm lưu niệm của tựa game Luật Sư Tài Ba!</p>
                  <a href="#" class="hero-btn">ĐẶT HÀNG NGAY</a>
                </div>
                <div class="right">
                  <img class="img2" src="./images/hero-2.jpg" alt=""/>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </header>




    <section class="section category">
      <div class="cat-center">
        <div class="cat">
          <img src="./images/cat3.jpg" alt="" />
          <div>
                            <a href="product.html" class="nav-link"><p>MÓC KHÓA</p></a>
          </div>
        </div>
        <div class="cat">
          <img src="./images/cat2.jpg" alt="" />
          <div>
                            <a href="product2.html" class="nav-link"><p>THẺ-STICKER</p></a>              
          </div>
        </div>
        <div class="cat">
          <img src="./images/cat1.jpg" alt="" />
          <div>
                            <a href="product3.html" class="nav-link"><p>TRANG PHỤC</p></a>              
          </div>
        </div>
      </div>
    </section>





    <section class="section new-arrival">
      <div class="title">
        <h1>SẢN PHẨM MỚI</h1>
        <p>Những sản phẩm được chọn lựa bởi nhà thiết kế</p>
      </div>

      <div class="product-center">
        <div class="product-item">
          <div class="overlay">
            <a href="productKeychain1.html" class="product-thumb">
              <img src="./images/product-1.jpg" alt="" />
            </a>
          </div>
          <div class="product-info">
            <span>TRANG PHỤC</span>
            <a href="productKeychain1.html">Áo Phoenix Wright Đen</a>
            <h4>$700</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-2.jpg" alt="" />
            </a>
            <span class="discount">50%</span>
          </div>

          <div class="product-info">
            <span>TRANG PHỤC</span>
            <a href="">Áo Phoenix + Edgeworth Nâu</a>
            <h4>$800</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-3.jpg" alt="" />
            </a>
          </div>
          <div class="product-info">
            <span>TRANG PHỤC</span>
            <a href="">Áo Phoenix Wright Xanh</a>
            <h4>$150</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-4.jpg" alt="" />
            </a>
            <span class="discount">50%</span>
          </div>
          <div class="product-info">
            <span>TRANG PHỤC</span>
            <a href="">Áo Objection Trắng</a>
            <h4>$900</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-5.jpg" alt="" />
            </a>
          </div>
          <div class="product-info">
            <span>THẺ-STICKER</span>
            <a href="">Sticker Nhân Vật</a>
            <h4>$100</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-6.jpg" alt="" />
            </a>
          </div>
          <div class="product-info">
            <span>THẺ-STICKER</span>
            <a href="">Sticker Nhân Vật 2</a>
            <h4>$500</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-7.jpg" alt="" />
            </a>
            <span class="discount">50%</span>
          </div>
          <div class="product-info">
            <span>MÓC KHÓA</span>
            <a href="">Móc Khóa Phoenix 3</a>
            <h4>$200</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-8.jpg" alt="" />
            </a>
          </div>
          <div class="product-info">
            <span>MÓC KHÓA</span>
            <a href="">Móc Khóa Godot 2</a>
            <h4>$560</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
      </div>
    </section>





    <section class="section banner">
<div class="left">
  <span class="trend">Mẫu Thời Trang</span>
  <h1>Apollo Justice</h1>
  <p>Sản Phẩm mới <span class="color">Khuyến mãi 20%</span> Trong Thời Gian Có Hạn</p>
  <a href="#" class="btn btn-1">Khám Phá Ngay</a>
</div>
<div class="right">
  <img src="./images/banner.png" alt=""/>
</div>
    </section>




    <section class="section new-arrival">
      <div class="title">
        <h1>SẢN PHẨM MỚI</h1>
        <p>Những sản phẩm được chọn lựa bởi nhà thiết kế</p>
      </div>

      <div class="product-center">

        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-7.jpg" alt="" />
            </a>
            <span class="discount">50%</span>
          </div>
          <div class="product-info">
            <span>MÓC KHÓA</span>
            <a href="">Móc Khóa Phoenix Xanh</a>
            <h4>$700</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-4.jpg" alt="" />
            </a>
          </div>
          </div>



          <div class="product-info">
            <span>TRANG PHỤC</span>
            <a href="">Áo Objection Trắng</a>
            <h4>$800</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>




        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-1.jpg" alt="" />
            </a>
            <span class="discount">40%</span>
          </div>
          <div class="product-info">
            <span>TRANG PHỤC</span>
            <a href="">Áo Objection Đen</a>
            <h4>$150</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <a href="" class="product-thumb">
              <img src="./images/product-6.jpg" alt="" />
            </a>
          </div>
          <div class="product-info">
            <span>THẺ-STICKER</span>
            <a href="">Sticker Nhân Vật 2</a>
            <h4>$900</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>

    </section>

    
  
    

    <section class="section contact">
      <div class="row">
        <div class="col">
          <h2>HỖ TRỢ KHÁCH HÀNG</h2>
          <p>Liên hệ với tổng đài để nhận được sự giúp đỡ</p>
          <a href="" class="btn btn-1">Liên Hệ</a>
        </div>
        <div class="col">
          <form action="">
            <div>
              <input type="email" placeholder="Tài khoản Email"/>
            <a href="">Gửi</a>
            </div>
          </form>
        </div>
      </div>
    </section>

    
    
 
    
    <footer class="footer">
      <div class="row">
        <div class="col d-flex">
          <h4>THÔNG TIN</h4>
          <a href="">Thành Viên</a>
          <a href="">Liên Hệ</a>
          <a href="">Điều Khoản</a>
          <a href="">Thông Tin Vận Chuyển</a>
        </div>
        <div class="col d-flex">
          <h4>TÌM KIẾM</h4>
          <a href="">Cửa Hàng Online</a>
          <a href="">Dịch Vụ Khách Hàng</a>
          <a href="">Quảng Cáo</a>
          <a href="">Mẫu Hàng Hot</a>
        </div>
        <div class="col d-flex">
          <span><i class='bx bxl-facebook-square'></i></span>
          <span><i class='bx bxl-instagram-alt' ></i></span>
          <span><i class='bx bxl-github' ></i></span>
          <span><i class='bx bxl-twitter' ></i></span>
          <span><i class='bx bxl-pinterest' ></i></span>
        </div>
      </div>
    </footer>



  <div class="popup hide-popup">
    <div class="popup-content">
      <div class="popup-close">
        <i class='bx bx-x'></i>
      </div>
      <div class="popup-left">
        <div class="popup-img-container">
          <img class="popup-img" src="./images/popup.jpg" alt="popup"/>
        </div>
      </div>
      <div class="popup-right">
        <div class="right-content">
          <h1>Khuyến Mãi <span>Giảm</span> 20%</h1>
          <p>Đăng kí vào thư tín của chúng tôi để nhận được thông báo mới nhất!
          </p>
          <form action="#">
            <input type="email" placeholder="Nhập tài khoản email..." class="popup-form"/>
            <a href="#">Đăng Kí</a>
          </form>
        </div>
      </div>
    </div>
  </div>




</div>




<Navbar />
        </div>








    )
}

export default Home