
const express=require('express')
const app=express();

const cookieparser=require('cookie-parser')

app.use(cookieparser('Heychammm'))

app.get('/',(req,res)=>{
   res.send('root connected')
})

// app.get('/setcookies',(req,res)=>{
//     res.cookie('Mode','Dark')
//     res.cookie('Location','Mathura')
//     res.cookie('Username','Priyanshu')
//     res.send("Server sent u cookies maje lo jaao")
// })
// app.get('/getcookies',(req,res)=>{
//     // let{mode,location,username}=req.cookies;  it will give us undefined kyuki same way m destructure hota hainnnnn
//        let {Mode,Location,Username}=req.cookies;
//     res.send(`name is ${Username} stay in ur location ${Location} and ur theme is${Mode}`)
// })

// cookies is not secured but signed cookies is secured in signed cookies we send a string (secret string with that) in the middleaware..

app.get('/' , (req,res)=>{
    console.log(req.cookies);
    // res.send(req.cookies); //all easy cookies
    res.send(req.signedCookies); //all signed cookies

})
// signed cookie
app.get('/getsignedcookies' , (req,res)=>{
    res.cookie('bindaas' , 'priyanshu' , {signed:true} )
    res.send('cokkies sent successfully');
})


app.listen(8080,()=>{
    console.log("server connected succesfully....")
})













