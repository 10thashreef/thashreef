function sendMail(){
    var params={
        name: document.getElementById("name").Value,
        email:document.getElementById("email").Value,
        subject:document.getElementById("Message").value
    }

const serviceID="service_1m1cezv";
const templateID="template_hw58gvn";
emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("Message").value="";
        console.log(res);
        alert("Message send")
    }
)
.catch(err=>console.log(err));
}