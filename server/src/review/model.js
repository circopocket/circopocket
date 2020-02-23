import mongoose from 'mongoose';
import {progressStatus} from './progress';

const payloadSchema = new mongoose.Schema({
	viewed: {
		type: Number,
		default: 1
	},
	visited: {
		at: Date,
		last: Date
	},
	ordered: {
		at: Date,
		screenshot: String,
		orderNumber: String
	},
	reviewed: {
		at: Date
	},
	payouted: {
		at: Date,
		venmoId: String
	},
	finished: {
		at: Date,
		feedback: Number
	}
})

// Define the model
const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    },
    payload: payloadSchema,
    progress: {
        type : String,
        required: true, 
        default: 'viewed',
        enum : Object.values(progressStatus)
        // ["viewed", "visited", "ordered", "reviewed", "payouted", "finished"]
    }
},{
    timestamps: true
})

// Export the model
export default mongoose.model('Review', reviewSchema);
