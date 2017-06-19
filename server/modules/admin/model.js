import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
	fullname: {
		type:String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		required: true
	}
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;
