let navContainer = document.querySelector("header");

navContainer.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img class=""style="width: 50%;" src="image/image.png" alt="">
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
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-envelope fs-5"></i>
              </a>

              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
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


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-bell fs-5"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
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
                <img class="img-navb" src="https://avatars.hsoubcdn.com/ec365cbde984baac6669282ae0242d02?s=128">
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="./Profile.html">
                    <i class="fa fa-fw fa-user"></i>
                    Mohamed Ahmed
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="./Account_Balance.html">
                      <i class="fa fa-fw fa-usd"></i>
                      Balance
                  </a>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="./Edit_Profile.html">
                  <i class="fa fa-fw fa-edit"></i>
                  Edit Profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  <i class="fa fa-fw fa-sign-out"></i>
                  Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
`
