const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         reps:
 *           type: integer
 *         load:
 *           type: integer
 *       required:
 *         - title
 *         - reps
 *         - load
 *       example:
 *         title: Push ups
 *         reps: 40
 *         load: 5
 */

/**
 * Workout Schema
 * @type {Schema}
 */
const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true });

workoutSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Workout', workoutSchema);
