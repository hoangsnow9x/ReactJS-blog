import UserModel from './model';
import mongojs from 'mongojs';
import express from 'express';
import session from 'express-session';
var db = mongojs('news',['users']);
var app = express();

// using session
app.use(session({secret: 'mySession'}));

var admin = (req, res) => {
	db.users.findOne({username: "admin"}, function(err, data){
		session.admin = data;
	});

}
export const showLoginPage = async (req,res) => {
	res.render('admin/login', {title: "Đăng nhập trang quản trị"});
}

export const showAdminPage =  (req, res) => {
	if(session.admin == null){
		res.status(200).render('admin/login', {title: "Trang đăng nhập"});
	}else {
		res.status(200).render('admin/index', {title: "Trang quản trị"});
	}

	// try {
	// 	return res.status(200).render('admin/index', {title: "Trang quản trị"});
	// } catch (e) {
	// 	return res.status(e.status).json({error: true, message: "Error with Meetup"});
	// }
}
