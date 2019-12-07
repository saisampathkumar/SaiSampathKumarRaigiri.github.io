window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.padding = "0px 0px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.opacity = "none"; 
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function getProjectModule(){
  var PDiv = document.getElementById("PROJECTS");
  document.documentElement.scrollTop = PDiv.offsetTop - 80;
}

function getHomeModule(){
  var HDiv = document.getElementById("HOME");
  document.documentElement.scrollTop = HDiv.offsetTop - 80;
}

function getskillsModule(){
  var SDiv = document.getElementById("SKILLS");
  document.documentElement.scrollTop = SDiv.offsetTop - 80;
}

function getResumeModule(){
  var RDiv = document.getElementById("RESUME");
  document.documentElement.scrollTop = RDiv.offsetTop-80;
}

function getContactModule(){
  var CDiv = document.getElementById("CONTACTS");
  document.documentElement.scrollTop = CDiv.offsetTop - 80;
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}