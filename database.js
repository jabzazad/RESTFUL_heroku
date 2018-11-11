var pgp = require('pg-promise')();
var access = process.env.getDb + "?ssl=true";
console.log(access);
var db = pgp(access);
function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deleteProduct(req, res) {
    db.any('DELETE from products where product_id=' + req.params.id)
        .then(function (data) {})
        .catch(function (error) {
            console.log('ERROR:', error)
        })
    db.any('select * from products').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Delete Product id=' + req.params.id
            });
    })
}

function updateProduct(req, res) {
    db.any('update products set title=${title},price=${price},tags=${tags} where product_id =' + req.params.id,
        req.body)
        .then(function (data) {
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
        db.any('select * from products where product_id='+req.params.id).then(function(data){
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Update product id='+req.params.id
            });
        })
}

function insertProduct(req, res) {
    db.any('insert into products(product_id, title, price, created_at, tags)' +
        'values(${product_id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) { })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
    db.any('select * from products').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'insert one Products'
            });
    })
}



function getProductByID(req, res) {
    db.any('select * from products where product_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({ status: "fail", message: "Mission Fail get back" })
            console.log('ERROR:', error)
        })
}
//Purchase_item
function getPurchase_item(req, res) {
    db.any('select * from purchase_items')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Purchase_item'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function DeletePurchase_item(req, res) {
    db.any('DELETE from purchase_items where id=' + req.params.id)
        .then(function (data) {})
        .catch(function (error) {
            console.log('ERROR:', error)
        })
    db.any('select * from purchase_items').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Delete Purchase_item id=' + req.params.id
            });
    })
}


function updatePurchase_item(req, res) {
    db.any('update purchase_items set purchase_id=${purchase_id},product_id=${product_id},price=${price},quantity=${quantity},status=${status} where id =' + req.params.id,
        req.body)
        .then(function (data) {})
        .catch(function (error) {
            console.log('ERROR:', error)
        })
        db.any('select * from purchase_items where id='+req.params.id).then(function(data){
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Update Purchase_item id='+req.params.id
            });
        })
}

function insertPurchase_item(req, res) {
    db.any('insert into purchase_items(id, purchase_id, product_id,price,quantity,status)' +
        'values(${id}, ${purchase_id}, ${product_id}, ${price}, ${quantity}, ${status})',
        req.body)
        .then(function (data) {})
        .catch(function (error) {
            console.log('ERROR:', error)
        })

    db.any('select * from purchase_items').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Inser one Purchase_item'
            });
    })
}



function getPurchase_itemByID(req, res) {
    db.any('select * from purchase_items where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase_items id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({ status: "fail", message: "Mission Fail get back" })
            console.log('ERROR:', error)
        })
}
//Purchase
function getPurchase(req, res) {
    db.any('select * from purchases')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function DeletePurchase(req, res) {
    db.any('DELETE from purchases where purchase_id=' + req.params.id)
        .then(function (data) {})
        .catch(function (error) {
            console.log('ERROR:', error)
        })
    db.any('select * from purchases').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Delete Purchase id=' + req.params.id
            });
    })
}


function updatePurchase(req, res) {
    db.any('update purchases set created_at=${created_at},name=${name},address=${address},state=${state},zipcode=${zipcode},user_id=${user_id} where purchase_id =' + req.params.id,
        req.body)
        .then(function (data) {
           
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
        db.any('select * from purchases where purchase_id='+req.params.id).then(function(data){
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Update Purchase id='+req.params.id
            });
        })
}

function insertPurchase(req, res) {
    db.any('insert into purchases(purchase_id,created_at,name,address,state,zipcode,user_id)' +
        'values(${purchase_id}, ${created_at}, ${name}, ${address}, ${status}, ${state},${zipcode},${user_id})',
        req.body)
        .then(function (data) {
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

    db.any('select * from purchases').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Insert one Purchases'
            });
    })
}



function getPurchaseByID(req, res) {
    db.any('select * from purchases where purchase_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({ status: "fail", message: "Mission Fail get back" })
            console.log('ERROR:', error)
        })
}
//user
function getUser(req, res) {
    db.any('select * from users')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL User'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function DeleteUser(req, res) {
    db.any('DELETE from users where user_id=' + req.params.id)
        .then(function (data) {})
        .catch(function (error) {
            console.log('ERROR:', error)
        })
    db.any('select * from users').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Delete user id=' + req.params.id
            });
    })
}


function updateUser(req, res) {
    db.any('update users set email=${email},password=${password},details=${details},created_at=${created_at} where user_id =' + req.params.id,
        req.body)
        .then(function (data) {
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
        db.any('select * from users where user_id='+req.params.id).then(function(data){
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Update user id='+req.params.id
            });
        })
}

function insertUser(req, res) {
    db.any('insert into users(user_id,email,password,details,created_at)' +
        'values(${user_id}, ${email}, ${password}, ${details}, ${created_at}',
        req.body)
        .then(function (data) {
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

    db.any('select * from users').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Insert one Users'
            });
    })
}



function getUserByID(req, res) {
    db.any('select * from users where user_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase_items id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({ status: "fail", message: "Mission Fail get back" })
            console.log('ERROR:', error)
        })
}

module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct,
    getPurchase_item,
    getPurchase_itemByID,
    insertPurchase_item,
    updatePurchase_item,
    DeletePurchase_item,
    getPurchase,
    getPurchaseByID,
    insertPurchase,
    updatePurchase,
    DeletePurchase,
    getUser,
    getUserByID,
    insertUser,
    updateUser,
    DeleteUser
};