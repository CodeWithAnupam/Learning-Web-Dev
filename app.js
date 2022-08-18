console.log('hare krishna');
document.getElementsByTagName("body")[0].className = "light";
document.getElementsByTagName("button")[0].addEventListener('click', () => {
  if (document.getElementsByTagName("body")[0].className == "light") {
    document.getElementsByTagName("body")[0].className = "dark";
    document.getElementsByTagName("button")[0].innerHTML = "<img src=icon/sunny.png />";
    document.getElementsByClassName("container")[0].style.backgroundColor = "rgb(27, 34, 33)";
  } else {
    document.getElementsByTagName("body")[0].className = "light";
    document.getElementsByTagName("button")[0].innerHTML = "<img src=icon/moon.png />";
    document.getElementsByClassName("container")[0].style.backgroundColor = "rgb(16, 69, 86)";
  }
})
