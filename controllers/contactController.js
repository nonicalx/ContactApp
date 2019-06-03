const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const mongoose = require('mongoose');


//Connect to database
mongoose.connect('mongodb://nonso:winner@localhost:27017/contacts',{useNewUrlParser: true});



//Create a schema 
let contactSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String

});

//create Model
let Contact = mongoose.model('Contacts',contactSchema,'contacts');
module.exports = (app)=>{
    app.get('/',(req,res)=>{
        res.render('index');
    });

    app.get('/contacts',(req,res)=>{
        Contact.find({},(err,data)=>{
            if(err)throw err;
            res.render('contacts',{contacts:data});
        }).sort({name: 1});
    });

    app.get('/contacts/:name',(req,res)=>{
        Contact.find({name: req.params.name},(err,data)=>{
            if(err){throw err}
            else{
                res.render('contacts',{contacts:data});
            }
            
        })
    });
app.post('/contacts/search',urlencodedParser,(req,res,next)=>{
    let name = req.body.searchName;
    console.log(name);
    res.redirect('/contacts/'+name);
});

    app.get('/addContact',(req,res)=>{
        res.render('addContact');
    });

    app.post('/addContact',urlencodedParser,(req,res)=>{
        let newContact = Contact(req.body).save((err,data)=>{
            if(err) throw err;
        });
        res.redirect('/contacts');
    });

    

    app.delete('/contacts/:id',(req,res)=>{
        // to delete items from mongodb
        console.log('id',req.params.id);
        Contact.deleteOne({_id: req.params.id},(err)=>{
            if(err){
                return res.status(404).json({err:err});
            }
            res.redirect('/contacts');
        });

    });

}