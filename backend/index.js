const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./config/dbConnect');
const { notFound, errorHandler } = require('./middlewares/errorHandler');

const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const categoryRouter = require('./routes/categoryRoute');
const brandRouter = require('./routes/brandRoute');
const colorRouter = require('./routes/colorRoute');
const inquiryRouter = require('./routes/inqRoute');
const cookieParser = require('cookie-parser');	

const morgan = require('morgan');
const cors = require('cors');
app.use(express.static('public'));


dbConnect();

app.use(
    cors({
        origin: '*',
    })
);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/category', categoryRouter);
app.use('/api/brand', brandRouter);
app.use('/api/color', colorRouter);
app.use('/api/inquiry', inquiryRouter);

app.use(notFound);
app.use(errorHandler);



app.listen(PORT, () => {    
    console.log(`Server is running on port ${PORT}`);
}          
);