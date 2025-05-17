import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required : [true, 'Please provide your first name'],
        minLength :[3, 'First name should be at least 3 characters'],
        maxLength : [30, 'First name should not be more than 30 characters'],
    },
    lastName: {
        type : String,
        required : [true, 'Please provide your last name'],
        minLength :[3, 'Last name should be at least 3 characters'],
        maxLength : [30, 'Last name should not be more than 30 characters'],
    },
    email: {
        type : String,
        required : [true, 'Please provide your email'],
        validate : [validator.isEmail, 'Please provide a valid email'],
        unique : true,
    },  
    phone: {
        type : String,
        required : [true, 'Please provide your phone number'],
        validate : [validator.isMobilePhone, 'Please provide a valid phone number'],
        minLength : [10, 'Phone number must contain 10 digits'],
        maxLength : [10, 'Phone number must contain 10 digits'],

    },
    time : {
       type : String,
       required: true, 
    },
    date: {
      type : String,
       required: true, 
    },

});


 const Reservation = mongoose.model('Reservation', reservationSchema);
 export default Reservation;