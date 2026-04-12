const db = require("../config/db");

exports.createItem = async (req,res)=>{

const {title,description,status} = req.body;

await db.query(
"INSERT INTO items (user_id,title,description,status) VALUES (?,?,?,?)",
[req.user.id,title,description,status]
);

res.json({msg:"Item added"});

};
exports.getItems = async (req,res)=>{

const [items] = await db.query(
"SELECT * FROM items WHERE user_id=?",
[req.user.id]
);

res.json(items);

};
exports.updateItem = async (req,res)=>{

const {title,description,status} = req.body;

await db.query(
"UPDATE items SET title=?,description=?,status=? WHERE id=?",
[title,description,status,req.params.id]
);

res.json({msg:"Updated"});

};
exports.deleteItem = async (req,res)=>{

await db.query(
"DELETE FROM items WHERE id=?",
[req.params.id]
);

res.json({msg:"Deleted"});

};