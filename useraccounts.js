function newRegistration()
{
    var emailAdress=document.getElementById('uname').value;
    var userPassword=document.getElementById('pswd').value;
    var userMail=document.getElementById('umail').value;


    let userData=
    {
        email:emailAdress,
        username:userPassword,
        password:userPassword
    }

    if(!userData.email || !userData.username || !userData.password)
    {
        alert("Please fill out all the details")
    
    }
    else if(userMail in localStorage)
    {
        alert("User already registered")
    }

    else
    {
        localStorage.setItem(userMail,JSON.stringify(userData));
        alert("Account Created successfully")
        window.location='./login.html';
    }


   
    


}

function newAccount()
{
    window.location.href="register.html"
}

function redirectTo()
{
    window.location='./login.html'
}

function validate()
{
    var userName=document.getElementById('uname').value;
    var password=document.getElementById('pswd').value;

    var storedData=localStorage.getItem(userName);
    if(!storedData)
    {
        alert("No users found");
        window.location='./register.html'
        return;

    }

    var userData=JSON.parse(storedData);
    if(userData.username==userName && userData.password==password)
    {
        alert("Login successfull");
        window.location='./home.html'
        return;
    }
    else
    {
        alert("Username or Password Incorrect");
    }
}