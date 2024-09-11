// SearchForm Section code
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
}

$(document).ready(function(){

    $(window).scroll(function(){
        //Navbar-bottom scrolling
        if(this.scrollY > 5){
            $('.navbar-bottom').addClass("sticky");
        }else{
            $('.navbar-bottom').removeClass("sticky");
        }

        //Scrolling Button Btn
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

        //slide up script
        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop:0});
        });
        
    //owl owlCarousel
    $('.owl-carousel').owlCarousel({
        margin: 5,
        mavigation: true,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});


const swiper1 = new Swiper(".slider-1", {
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');

    // Add event listener for login button
    loginBtn.addEventListener('click', function() {
        // Redirect to login page or show a login modal
        window.location.href = '/login'; // Replace with your login page URL
    });

    // Add event listener for signup button
    signupBtn.addEventListener('click', function() {
        // Redirect to signup page or show a signup modal
        window.location.href = '/signup'; // Replace with your signup page URL
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const createGroupForm = document.getElementById('create-group-form');
    const joinGroupForm = document.getElementById('join-group-form');

    createGroupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const groupName = document.getElementById('group-name').value;
        
        if (groupName.trim() === '') {
            alert('Group name cannot be empty.');
            return;
        }
        
        try {
            // Replace with your actual server endpoint and logic
            const response = await fetch('/api/create-group', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: groupName }),
            });
            const data = await response.json();
            
            if (response.ok) {
                alert(`Group Created Successfully! Group ID: ${data.groupId}`);
                // Optionally clear the form
                createGroupForm.reset();
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error creating group:', error);
            alert('An error occurred while creating the group.');
        }
    });

    joinGroupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const groupId = document.getElementById('join-group-id').value;

        if (groupId.trim() === '') {
            alert('Group ID cannot be empty.');
            return;
        }

        try {
            // Replace with your actual server endpoint and logic
            const response = await fetch('/api/join-group', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ groupId }),
            });
            const data = await response.json();
            
            if (response.ok) {
                alert(`Successfully joined Group ID: ${groupId}`);
                // Optionally clear the form
                joinGroupForm.reset();
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error joining group:', error);
            alert('An error occurred while joining the group.');
        }
    });
});


