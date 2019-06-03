const SignUp = (name, email,phoneNumber,type, username, password) => (
       fetch('http://139.180.216.19:2018/account/register',
       {   
           method: 'POST',
           headers: {
              'Content-Type': 'application/json',
             Accept: 'application/json',
             'x-gigawatts': '1.21'
            },
           body: JSON.stringify({name, email,phoneNumber,type, username, password })
       })
       .then(res => res.json())
   );
   
   module.exports = SignUp;