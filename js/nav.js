let navContainer=document.querySelector("header");
navContainer.innerHTML=`
<nav class="navbar navbar-expand-lg navbar-light nav fixed-top">
<div class="container ">
  <div class="LOGO my-1" >
    <a class="navbar-brand w-25" href="index.html"><img class="" src="image/image.png" alt=""></a>
  </div>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarScroll">
    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
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
    <div class="d-flex justify-content-center align-items-center gap-5">
      <div class="chat dropdown">
        <a class="vector" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
          <i class="fa-solid fa-envelope fs-5"></i>
        </a>
        <div class="dropdown-menu notification" aria-labelledby="dropdownMenuLink">
          <ul class="notification-list border-bottom" data-empty="لا جديد حتى اللحظة!">
              <li class="notification-list-item ">
                <img class="notification-item-img " alt="" src="image/image.png">
                <div class="notification-item-content ms-2 ">
                  <span id="user">User Name:</span>
                  <span id="message">A guide for entrepreneurs to get started with the Independent platform</span>
                  <div class="notification-item-date">
                    <time datetime="2024-04-25 05:12:01" title="2024-04-25 05:12:01"> <i class="fa fa-clock-o"></i>
                      4 أيام و 8 ساعات </time>
                  </div>
                </div>
              </li>
          </ul>
          <div class="notification-link">
            <a href="Messages.html"><i class="fa-regular fa-bell"></i> All Messages </a>
          </div>
        </div>

      </div>
      <div class="chat dropdown ">
        <a class="vector" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
          <i class="fa-solid fa-bell fs-5"></i>
        </a>
        <div class="dropdown-menu notification border-start" aria-labelledby="dropdownMenuLink">
          <ul class="notification-list border-bottom" data-empty="لا جديد حتى اللحظة!">
            <li class="notification-list-item ">
              <img class="notification-item-img " alt="" src="image/image.png">
              <div class="notification-item-content ms-2 ">
                <span id="user">Message:</span>
                <span id="message">A guide for entrepreneurs to get started with the Independent platform</span>
                <div class="notification-item-date">
                  <time datetime="2024-04-25 05:12:01" title="2024-04-25 05:12:01"> <i class="fa fa-clock-o"></i>
                    4 أيام و 8 ساعات </time>
                </div>
              </div>
            </li>
        </ul>
          <div class="notification-link">
            <a href="Notifications.html"><i class="fa-regular fa-bell"></i> All Notifications </a>
          </div>
        </div>

      </div>
      <div class="chat dropdown accunt-content">

        <a class=" dropdown-toggle bg-img" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <span class="rounded-circle p-2 d-flex justify-content-center align-items-center bg-danger text-white " style="width: 38px; height: 38px;" id="UserNameFchar">M</span>
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="Profile.html">
            <i class="fa fa-fw fa-user"></i>
            Mohamed Ahmed
          </a>
          <a class="dropdown-item" href="Account_Balance.html">
            <i class="fa fa-fw fa-usd"></i>
            Balance
          </a>
          <hr>
          <a class="dropdown-item" href="#">
            <i class="fa fa-fw fa-edit"></i>
            Edit Profile
          </a>
          <a class="dropdown-item" href="#">
            <i class="fa fa-fw fa-sign-out"></i>
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

</nav>
`
