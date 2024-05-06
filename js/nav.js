let navContainer=document.querySelector("header");
console.log(navContainer);
navContainer.innerHTML=`
<nav style="background-color: #1E88E5 !important;" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img class=""style="width: 65%;" src="image/image.png" alt="">

        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="overflow: hidden;">
            <li class="nav-item">
              <a class="nav-link fs-5  text-white" aria-current="page" href="Find_Assistant.html">
                 <i class="fa-solid fa-message text-white"></i> 
                  Find Assistant
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-5 text-white" href="./Offer_Help.html">
                <i class="fa-solid fa-plus text-white"></i>
                  Offer Help
              </a>
            </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
            <li class="nav-item dropdown ">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-envelope fs-5"></i>
              </a>

              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li style="width: 400px; text-wrap:wrap;" class="notification-list-item dropdown-item border-bottom ">
                  <div  class="notification-item-content ms-2 ">
                    <div class="me-2">

                      <img class="notification-item-img " alt="" src="image/image.png">
                    </div>
                    <div class="">
                      <span id="user">User Name:</span>
                      <span id="message">A guide for entrepreneurs to get started with the Independent platform</span>
                      <div class="notification-item-date">
                        <time datetime="2024-04-25 05:12:01" title="2024-04-25 05:12:01"> <i class="fa fa-clock-o"></i>
                          4 أيام و 8 ساعات </time>
                      </div>
                    </div>
                    
                  </div>
                </li>
                <div class="notification-link">
                  <a style="text-decoration: none; font-size: 1.2rem; color: #1E88E5;" href="Messages.html"><i class="fa-regular fa-bell"></i> All Messages </a>
                </div>
              </ul>
            </li>


            <li class="nav-item dropdown ms-auto">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-bell fs-5"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li style="width: 400px; text-wrap:wrap;" class="notification-list-item dropdown-item border-bottom ">
                  <div  class="notification-item-content ms-2 ">
                    <div class="me-2">

                      <img class="notification-item-img " alt="" src="image/image.png">
                    </div>
                    <div class="">
                      <span id="user">Message:</span>
                      <span id="message">A guide for entrepreneurs to get started with the Independent platform</span>
                      <div class="notification-item-date">
                        <time datetime="2024-04-25 05:12:01" title="2024-04-25 05:12:01"> <i class="fa fa-clock-o"></i>
                          4 أيام و 8 ساعات </time>
                      </div>
                    </div>
                    
                  </div>
                </li>
                <div class="notification-link">
                  <a style="text-decoration: none; font-size: 1.2rem; color: #1E88E5;"href="Notifications.html"><i class="fa-regular fa-bell"></i> All Notifications </a>
                </div>
              </ul>
            </li>


            <li class="nav-item dropdown ">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="rounded-circle p-2 d-flex justify-content-center align-items-center bg-danger text-white " style="width: 25px; height: 25px;" id="UserNameFchar">M</span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>


          </ul>
        </div>
      </div>
    </nav>
`
