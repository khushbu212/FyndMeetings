
var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
    // this.querySelector("fix-div-bg").style.display='none';
    
  });
}
function openCreateTeamForm() {
    document.getElementById("create-teamform1").style.display = "block";
    // document.getElementById("fix-div-bg").style.display = "block";

  }