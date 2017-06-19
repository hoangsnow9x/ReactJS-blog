import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import { AdminRoutes } from './modules';
const app = express();

// dbConfig
dbConfig();

// middlewaresConfig
middlewaresConfig(app);

// use Public folder
app.use(express.static(__dirname + '/public'));

// Set Views and view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// use routes
app.use('/admin', [AdminRoutes]);

const PORT = process.env.PORT ||  3000;

app.listen(PORT, err => {
	if(err) {
		console.error(err);
	}else{
		console.log('App listen to port: ' + PORT );
	}
});
