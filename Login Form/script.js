function solve() {
    var password = document.getElementById("password").value;
    //var Criteria = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,}$/; 
    var Criteria = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/;
    if (!Criteria.test(password)) {
        alert("criteria not full filled");
        return false;
    }
    return true;
}
