const SignIn = (username, password) => (
       fetch('http://139.180.216.19:2018/auth/signIn',
       {   
           method: 'POST',
           headers: {
              'Content-Type': 'application/json',
             Accept: 'application/json',
             'x-gigawatts': '1.21'
            },
           body: JSON.stringify({ username, password })
       })
       .then(res => res.json())
   );
   
   module.exports = SignIn;