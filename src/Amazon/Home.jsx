
import { Component } from "react";
// import Menu from './Component/Menu'
import Card from './Component/Cards'
import Slider1 from './Component/Slider1'

import SingleImgCard from './Component/Singleimgcard'
import Upper from './Component/Upper'
import Header from "../header/Header";
import './CSS/product_card.scss'




class Fav extends Component {


render() {
  return (
      
     <>

  <Header />
     <Upper />

<div className="fullbody">

    <div className="first_row">
     <Card
     title="Everyday essentials"
      name1="Immunity & healthcare" img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_1._SY116_CB431329533_.jpg"
      name2="Women's personal care" img2 ="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_2._SY116_CB431329535_.jpg"
      name3="Men's grooming"  img3="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_3._SY116_CB431329535_.jpg"
      name4="Cleaning essentials"  img4="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_4._SY116_CB431329535_.jpg"
     />
     <Card 
     title="Top picks for your home"
       name1="AC's" img1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg"
       name2="Washing Machine" img2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_372x232_2._SY116_CB414480869_.jpg"
       name3="Televsions" img3="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_3._SY116_CB414480869_.jpg"
       name4="Refrigerators" img4="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_4._SY116_CB414480869_.jpg"
     />


<SingleImgCard 
       title="Amazon Pay | Buy Google Play recharge code now" link="Buy More"  img = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/GPRC/GPRC_Desktop_CC_379x304._SY304_CB659214458_.jpg"

       />


     <Card
     title="Cookware & dining"
       name1="Gas Stoves" img1="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__1_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg"
       name2="Cookware" img2="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__2_1573567224_jpg_LOWER_QL85_._SY116_CB448746415_.jpg"
       name3="Kitchen storage" img3="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_3_copyx400x2C5x_1573713358_jpg_LOWER_QL85_._SY116_CB448746425_.jpg"
       name4="TableWare" img4="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__4_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg" />

<SingleImgCard 
         title="Electronics & more Under ₹1,499" link="See More"  img = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/2021/1499_store/hindi/1x_2x_1x._SY304_CB657649450_.jpg"
       />
     <Card
     title="Styles for Men | Up to 70% off"
      name1="Clothing" img1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/1._SY116_CB413570652_.jpg"
       name2="Footware" img2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/2._SY116_CB413570652_.jpg"
       name3="Watches" img3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/3._SY116_CB413570652_.jpg"
       name4="Gags & Luggage" img4="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/5._SY116_CB413570652_.jpg" />
     
    
      
       <SingleImgCard 
         title="For a productive home office" link="See More"  img = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/GW/Dashboard/WFH2_GW_DC_379x304._SY304_CB661185471_.jpg"  
       />
      
      <Card 
      title="Professional tools, testing & more"
      name1 ="Professional tools" img1="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg"
      name2="Measuring instruments" img2="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/GW/Testing_186x116._SY116_CB406506816_.jpg"
      name3="Cleanign supplies" img3="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Jan_san1_186x116._SY116_CB406505878_.jpg"
      name4="Medical supplies" img4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg"
      
    />    
      

     </div>
    



     <div class="app">
  <h1>Today’s Deals </h1><h6>see all offers</h6>
  
  <ul class="hs">
    <li class="item"><Slider1 rate="Rs.69.00 - Rs.16,142.00" img="https://m.media-amazon.com/images/I/51DWYbH1M5L.__AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 rate="Rs.699.00 - Rs.9,695.00" img="https://m.media-amazon.com/images/I/31ywK7gF8iL.__AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 rate="Rs.189.00 - Rs.10,919.00" img="https://m.media-amazon.com/images/I/51JU8ZlLATL.__AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 rate="Rs.99.00 - Rs.16,499.00" img="https://m.media-amazon.com/images/I/41rmggBW1ML.__AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 rate="Rs.99.00 - Rs.3,199.00" img="https://m.media-amazon.com/images/I/51ivRBHcH6L.__AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 rate="Rs.120.00 - Rs.15,190.00" img="https://m.media-amazon.com/images/I/51Qe2hIbgLL.__AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 rate="Rs.199.00 - Rs.299.00" img="https://m.media-amazon.com/images/I/41VDAAe67HL.__AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 rate="Rs.29,999.00" img="https://m.media-amazon.com/images/I/41kdXh6O3rL.__AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 rate="Rs.Rs.63,900.00 - Rs.84,900.00" img="https://m.media-amazon.com/images/I/31348z5DSJL.__AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 rate="Rs.9,859.00" img="https://m.media-amazon.com/images/I/41GzEXVzLLL.__AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 rate="Rs.Rs.195.00 - Rs.699.00" img="https://m.media-amazon.com/images/I/31iEJq8mpzL.__AC_SY200_.jpg" /></li>
  </ul>
  
  
</div>


<div className="first_rw">
      <h1>Top Programing Languages Books📗 </h1>
    <img alt="product_img"  id="books" src="https://images-na.ssl-images-amazon.com/images/I/513vVH%2BxV%2BL.jpg" />
    <img alt="product_img"  id="books" src="https://careerkarma.com/blog/wp-content/uploads/2019/07/best-python-books.jpg" />
    <img alt="product_img"  id="books" src="https://www.edureka.co/blog/wp-content/uploads/2019/11/Top-10-Java-Books-to-Learn-Java.jpg" />

    <img alt="product_img"  id="books" src="https://miro.medium.com/max/2560/1*R4vZiipvoxscDCJ0DKUe4A.png" />

</div>





<div class="app">
  <h1>Up to 60% off | Products from Indian startups <h2>see all offers</h2></h1>
  
  <ul class="hs">
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/41jzjo0hDwL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/41v3fipFgzL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/411TutKw2HL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/51dbxoPDSLL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/41dd0+SPuTL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/51b-5QnRoZL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/41-NHvbntJL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/518mp0sRt+L._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/41vGh9lb9WL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/51BMJdMRomL._AC_SY200_.jpg" /></li>

    
  </ul>
  
  
</div>
     {/* <center><img src ="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" /></center> */}
    
     

     <div className="first_row">
     <Card
     title="Birthday store"
      name1="Gift for men" img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/PC_QC_men_1x._SY116_CB660462415_.jpg"
      name2="Gift for women" img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/PC_QC_women_1x._SY116_CB660462414_.jpg"
      name3="Gift for girls" img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/PC_QC_girls_1xA._SY116_CB658837358_.jpg"
      name4="Gift for Boys" img4 = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/PC_QC_boys_1xN._SY116_CB660459133_.jpg"
     />

<Card 
      title="For your pets"
      name1=" Dog supplies"  img1="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Dogs_1X._SY116_CB448750761_.jpg"
      name2=" Cat supplies"  img2="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Cats_1X._SY116_CB448750761_.jpg"
      name3=" Aquatics supplies"  img3="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Aquatics_1X._SY116_CB448750761_.jpg"
      name4=" Bird supplies"  img4="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Birds_1X._SY116_CB448750760_.jpg"

    />   
 
 
 
     <SingleImgCard 
         title="For efficient home working" link="See More"  img = "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"
       />
 
    <Card 
      title="Voice control your lights & appliances | Ask Alexa"
      name1="Smart bulb"  img1="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroMarch21/QC-01_1X._SY116_CB659218446_.jpg"
      name2="Echo devices"  img2="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroMarch21/QC-02_1X._SY116_CB659218446_.jpg"
      name3=" Fire TV stick"  img3="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroMarch21/QC-03_1X._SY116_CB659218446_.jpg"
      name4="Smart Plug "  img4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroMarch21/QC-04_1X._SY116_CB659218446_.jpg"

    />  



   
     </div>


     {/* <center><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" /></center> */}
     



     

<div class="app">
  <h1>Best Sellers in Sports, Fitness & Outdoors <h2>see more</h2></h1>
  
  <ul class="hs">
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/41TXCe7NGML._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/41YRuJRHybL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/41PT7j8vQeL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/41qvcxLP3uL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/51inhClfoLL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/41U0GlFYydL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/31VPDN+9BiL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/418h5rn6bPL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/31oFxypWeEL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/41JL8rlKeuL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/51kyYWvUMqL._AC_SY200_.jpg" /></li>
    <li class="item"><Slider1 img="https://m.media-amazon.com/images/I/51l3zcSn7+L._AC_SY200_.jpg" /></li>
    

    

    
  </ul>
  
  
</div>
     
          
</div>
      
      <div className="first_rw">
      <h1>Some Interesting / Motivational Books📗📖 </h1>
      <div className="bookimgs">
    <img alt="product_img"  id="books" src="http://kristiecook.com/wp-content/uploads/2016/10/Desktop-wallpaper-Books-are-proof.jpg" />
    <img alt="product_img" id="books" src="https://i.ytimg.com/vi/gVZk-29pjdQ/maxresdefault.jpg" />
    <img alt="product_img" id="books" src="https://lh3.googleusercontent.com/proxy/JreOuWu8sl30Z39udTLQZiwQElwo_vCaS5qvBXC4Jtz6n9jdppp76ohmny2kE4HFdUadzxbAfqTWi8hUrkCTAUhlnR_erIeI-6YdoSXIvnc" />

    <img alt="product_img" id="books" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4-lO3U6LM29wXXyaLPVYWdOxidMgtb4hHg&usqp=CAU" />
    </div>
</div>




{/* <Footer /> */}


        
     </>
   )
}
}


export default Fav 