document.getElementById("access-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if(name && email) {
        document.getElementById("form-section").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        alert("Please enter both name and email.");
    }
});