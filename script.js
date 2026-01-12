


let tablinks = document.getElementsByClassName('tab-link');
let tabcontents = document.getElementsByClassName('tab-contents');



window.opentab = function (tabname, event) {
  for (let tablink of tablinks) {
    tablink.classList.remove('active-link')
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab')
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add('active-tab');
}



let serviceslist = document.getElementById('services-list');


Services_Data.forEach(service => {

  serviceslist.innerHTML += `
  <div>
  <h2> ${service.s_name}</h2>
  <p>${service.s_desc}</p>
  </div>`;
});


let work = document.getElementById('work');


mywork_data.forEach(works => {
  work.innerHTML += `
  <div class="work-item">
    <img src="${works.w_img}" alt="${works.w_name}">
    <div class="work-layer">
      <h3>${works.w_name}</h3>
      <p>${works.w_desc}</p>
    </div>
  </div>
  `;
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbyDd7zhPEJqCD8DqJq20cFWKSxqWbtuO8EOVG-H38qJi9RaaQtGcztRr-YuR4HEcd_f/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert("successfully message send")
      console.log('Success!', response)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))

})


let menuicon = document.querySelector('.menu-icon');
let show = document.querySelector('.show');
let closeIcon = document.querySelector('.close-icon');

// Toggle menu open/close
menuicon.addEventListener('click', (e) => {
  e.stopPropagation();
  menuicon.style.display = "none"
  if (show.style.right === '0px') {
    show.style.right = '-200px';
  } else {
    show.style.right = '0px';
  }
});

// Close menu when clicking close icon
if (closeIcon) {
  closeIcon.addEventListener('click', () => {
    show.style.right = '-200px';
  menuicon.style.display = "block"

  });
}

// Close menu when clicking on a link
let navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    show.style.right = '-200px';
  menuicon.style.display = "block"

  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!show.contains(e.target) && !menuicon.contains(e.target)) {
    show.style.right = '-200px';
  menuicon.style.display = "block"

  }
});
