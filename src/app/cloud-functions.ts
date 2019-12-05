admin.inittilaizeApp();

exports.addAdmin = functions.https.onCall((data, context)=>{
    return admin.auth().getUserByEmail(data.email).then(user=>{
        return admin.auth().setCustomUserClaims(user.uid,{
            admin: true
        })
    }).then(()=>{
        return {
            message: `Success! ${data.email} has been made an admin`
        }
    }).catch(err =>{
        return err;
    });
});
//email var
const function = firebase.functions();
const adminRole = functions.httpsCallable('addAdmin');
adminRole({email: email}).then(result =>{
    console.log(result)
})


//user logged in
URLSearchParams.getIdTokenResult().then(idTokenResult =>{
    console.log(idTokenResult.claims.admin)
})