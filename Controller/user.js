
const fs=require('fs');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const users=data.users;

exports.createProduct= (req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.status(201).json(req.body);
}

exports.getAllProducts= (req,res)=>{
    //console.log(req.params);
    res.json(users);
}


exports.getProductByID= (req,res)=>{
    const id=req.params.id;
    const user=users.find(p=>p.id==id)
    res.json(user);
}

exports.replaceProduct= (req,res)=>{
    const id=+req.params.id;
    const userIndex=users.findIndex(p=>p.id===id);
    users.splice(userIndex, 1,{id:id,...req.body} )
    res.status(201).json();
}

exports.updateProduct= (req,res)=>{
    const id=+req.params.id;
    const userIndex=users.findIndex(p=>p.id===id);
    const user=users[userIndex];
    users.splice(productIndex, 1,{...user,...req.body} );
    res.status(201).json();
}

exports.deleteProduct = (req,res)=>{
    const id=+req.params.id;
    const userIndex=users.findIndex(p=>p.id===id);
    const user=users[userIndex];
    users.splice(userIndex, 1);
    res.json(user);
}