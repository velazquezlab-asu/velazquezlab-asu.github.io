function open_sidebar() {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function close_sidebar() {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Automatically insert the links to the different pages of the site
const files = ['index.html', 'labdirector.html', 'labmembers.html', 'research.html', 'projects.html',  'publications.html', 'funding.html', 'studentsuccess.html', 'outreach.html', 'contact.html'];
const names = ['Home', 'Lab Director (PI)', 'Lab Members', 'Research', 'Current Projects', 'Publications', 'Funding', 'Student Success', 'Outreach', 'Contact Us'];

const highlight = "w3-bar-item w3-button w3-padding w3-hover-text-orange w3-text-orange w3-hover-black w3-black".split(' ');
const normal = "w3-bar-item w3-button w3-padding w3-hover-text-orange w3-hover-black w3-dark-grey".split(' ');

let file = document.getElementById('page-id').innerText;
let sidebar = document.getElementById('sidebar');

for (let i = 0; i < files.length; i++) {
  let current_file = files[i];
  let current_name = names[i];

  let a = document.createElement('a');

  if (current_file == file) {
    a.href = "#";
    a.onclick = close_sidebar;
    highlight.forEach(item => a.classList.add(item));
  } else {
    a.href = "./" + current_file;
    normal.forEach(item => a.classList.add(item));
  }

  a.innerText = current_name;

  sidebar.appendChild(a);
}
