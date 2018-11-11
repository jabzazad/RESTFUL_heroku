# Restful_heroku
URL
//product
app.get('/api/products', db.getAllProducts);
app.get('/api/products/:id', db.getProductByID);
app.post('/api/products', db.insertProduct); {product_id, title, price, created_at, tags}
app.put('/api/products/:id', db.updateProduct);{title,price,tags}
app.delete('/api/products/delete/:id', db.deleteProduct); 
//purchase_item
app.get('/api/purchase_item', db.getPurchase_item);
app.get('/api/purchase_item/:id', db.getPurchase_itemByID);
app.post('/api/purchase_item', db.insertPurchase_item); {id, purchase_id, product_id,price,quantity,status}
app.put('/api/purchase_item/:id', db.updatePurchase_item); {purchase_id, product_id,price,quantity,status}
app.delete('/api/purchase_item/delete/:id', db.DeletePurchase_item);
//purchase
app.get('/api/purchase', db.getPurchase);
app.get('/api/purchase/:id', db.getPurchaseByID);
app.post('/api/purchase', db.insertPurchase); {purchase_id,created_at,name,address,state,zipcode,user_id}
app.put('/api/purchase/:id', db.updatePurchase); {created_at,name,address,state,zipcode,user_id}
app.delete('/api/purchase/delete/:id', db.DeletePurchase);
//user
app.get('/api/User', db.getUser);
app.get('/api/User/:id', db.getUserByID);
app.post('/api/User', db.insertUser); {user_id,email,password,details,created_at}
app.put('/api/User/:id', db.updateUser); {email,password,details,created_at}
app.delete('/api/User/delete/:id', db.DeleteUser);
