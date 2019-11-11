// add the following id's
// usernameid -> text box which inputs e-mail (i am not using the username as when user logs in through login, he only enters e-mail)
//                 (both in login as well as sign up page)
//sign -> for signup link on top-bar
//login -> for login link on top-bar 


//cookieEntry function must be setup for 'onclick' to the registser as well as signup button in the respective pages
//signFunc must be setup for onLoad on all pages.
//the following can be added as script for all the pages
function cookieEntry()
{
    if(document.cookie=="")
    {
        var user=document.getElementById('usernameid');
        var date=new Date;
        date.setHours(date.getHours+1);
        document.cookie="name="+user.value()+";expires="+date.toUTCString()+";";
    }
}
function signFunc()
{
    var sign=document.getElementById('sign');
    var login=document.getElementById('login');
    var userspace=document.getElementById('userspace');
    if(document.cookie!="")
    {
        sign.innerHTML="Sign Out";
        sign.href="index.html";
        login.innerHTML="";
        login.href="";
        var cook=document.cookie.split['='];
        userspace.innerHTML="Welcome "+cook[1]+" !!!";
    }
    else
    {
        sign.innerHTML="Sign Up";
        login.innerHTML="Login";
        sign.href="signup.html";
        login.href="login.html"
        userspace.innerHTML="Create an account for Free!!!"
    }
}