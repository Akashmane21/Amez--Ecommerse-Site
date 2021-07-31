import react, { useState } from 'react';
import Menu from '../../Component/Menu'
import './AddMovie.scss'

import axios from 'axios';





function AddMovie(){


 const [ img1 , newi] = useState("Image 1");
 const [ img2 , newim] = useState("Image 2");
 const [ img3 , newimg] = useState("Image 3");

    const imgs = []

    window.onload = function () {
      var fileUpload = document.getElementById("fileupload");
      fileUpload.onchange = function () {
          if (typeof (FileReader) != "undefined") {
              var dvPreview = document.getElementById("dvPreview");
              dvPreview.innerHTML = "";
              var regex = /^([a-zA-Z0-9\s_\\.\-:)({})])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
              for (var i = 0; i < fileUpload.files.length; i++) {
                  var file = fileUpload.files[i];
                  if (regex.test(file.name.toLowerCase())) {
                      var reader = new FileReader();
                      reader.onload = function (e) {
                          var img = document.createElement("IMG");
                          img.height = "100";
                          img.width = "100";
                          img.src = e.target.result;
                          dvPreview.appendChild(img);
                      }
                      reader.readAsDataURL(file);
                      imgs.push(file.name);
                      console.log(imgs);


                  } else {
                      alert(file.name + " is not a valid image file.");
                      dvPreview.innerHTML = "";
                      return false;
                  }


                  newi(imgs[0])
                  newim(imgs[1])

                  newimg(imgs[2])

                  

              }
          } else {
              alert("This browser does not support HTML5 FileReader.");
          }
      }



  };


    function save(){

        let data = {
            sname  : document.getElementById('name').value ,
         plot  : document.getElementById('plot').value,
         genre  : document.getElementById('genre').value,
         link  : document.getElementById('link').value ,
         imdb  : document.getElementById('imdb').value ,
         year  : document.getElementById('year').value ,
         img1  : `${img1}` ,
         img2  : `${img2}` ,
         img3  : `${img3}` 


        
        }
    
    
    
        axios.post('http://localhost:8080/new/data',data)
        .then(resp => {
            alert(resp.data.message)
            console.log(resp.data.message);
    
        })
    
        
        
        .catch(err => {
            console.log(err);
        }
        )


        window.location.reload()

    }




return (
    <><Menu />
    <br/><br/><br/><br/>
     <div className="bg">
        <div className="Add_container">
            <title>--- ✨+ Add Movie or Web-Series🎬 ---</title><br />
            <div className="insert_Data">
            <div className="text_field">
            <form>
      <input type="text" name="name" class="question" id="name" required autocomplete="off" />
      <label for="nme"><span>What's Movie name?</span></label>
      <textarea name="message" rows="2" class="question" id="plot" required autocomplete="off"></textarea>
      <label for="msg"><span>What's the Plot </span></label>
    </form>
    </div>


    <div className="tex_field">
    <form>
      <input type="text" name="name" class="question" id="genre" required autocomplete="off" />
      <label for="nme"><span>What's the genre?</span></label>
      <textarea name="message" rows="2" class="question" id="link" required autocomplete="off"></textarea>
      <label for="msg"><span>Trailer link ? </span></label>
    </form>

    </div>
    <div className="text_field">
    <form>
      <input type="text" name="name" class="question" id="imdb" required autocomplete="off" />
      <label for="nme"><span>IMDB?</span></label>
      <textarea name="message" rows="2" class="question" id="year" required autocomplete="off"></textarea>
      <label for="msg"><span>Release Year? </span></label>
    </form>

    </div>
        </div>

            <div className="img_Gallary">
            <h2>Upload Upto 3 Images 🎴👇</h2>
            
    <input id="fileupload" type="file" multiple="multiple" />
    <hr />
    <b>Live Preview</b>
    
    <div id="dvPreview">

    
    </div>


            </div>

            <div className="Submit">
            <button class="btn" onClick={save}>Save Data in Database</button>


            </div>

        </div>
     </div>
    </>
)
   
}

export default AddMovie;