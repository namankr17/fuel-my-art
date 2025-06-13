"use server"
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import { v4 as uuidv4 } from 'uuid';

export async function pay(paymentForm,username){
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        // Create a new payment record
        const payment = await Payment.create({
        name: paymentForm.name,
        amount: paymentForm.amount,
        message: paymentForm.message,
        orderId: uuidv4(), // Generate a unique order ID
        username: username
        });
        
        
        return { success: true, message: 'Payment processed successfully' };
    } catch (error) {
        console.error('Error processing payment:', error);
        return { success: false, message: 'Payment processing failed' };
    }
}

export async function getPaymentHistory(username) {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        // Fetch payment history for the user
        const payments = await Payment.find({ username: username }).sort({ createdAt: -1 }); // Sort by most recent payment
        if (!payments || payments.length === 0) {
            return { success: false, message: 'No payment history found' };
        }
        
        // Format the payment history
        const paymentHistory = payments.map(payment => ({
            name: payment.name,
            amount: payment.amount,
            message: payment.message,
            orderId: payment.orderId,
            createdAt: payment.createdAt.toISOString() // Convert to ISO string for consistency
        }));

        return { success: true, payments: paymentHistory };
    } catch (error) {
        console.error('Error fetching payment history:', error);
        return { success: false, message: 'Failed to fetch payment history' };
    }
}

export async function getUserDetails(username) {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        // Fetch user details by username
        const user = await User.findOne({ username: username });
        if (!user) {
            return { success: false, message: 'User not found' };
        }
        // Format user details
        const userDetails = {
            name: user.name,
            username: user.username,
            paymentCredentials: user.paymentCredentials || '',
            profilePicUrl: user.profilePicUrl || '',
            coverPicUrl: user.coverPicUrl || ''
        };
        return { success: true, user: userDetails };
    } catch (error) {
        console.error('Error fetching user details:', error);
        return { success: false, message: 'Failed to fetch user details' };
    }
}

export async function updateUserDetails(email, EditField,oldValue, newValue) {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        // Update user details based on the field and new value
        const updateData = {};
        updateData[EditField] = newValue;

        //If the field is username, check if it already exists
        if (EditField === 'username' && newValue != oldValue) {
            const existingUser = await User.findOne({ username: newValue });
            if (existingUser) {
                return { success: false, message: 'Username already exists' };
            }
        }

        const updatedUser = await User.findOneAndUpdate(
            { email: email },
            updateData,
            { new: true } // Return the updated document
        );
        if (!updatedUser) {
            return { success: false, message: 'User not found or update failed' };
        }

        if( EditField === 'username'){
            //update all the payments with the new username
            await Payment.updateMany(
                { username: oldValue },
                { $set: { username: newValue } }
            );
        }

        return { success: true, message: 'User details updated successfully' };
    } catch (error) {
        console.error('Error updating user details:', error);
        return { success: false, message: 'Failed to update user details' };
    }
}