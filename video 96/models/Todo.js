import mongoose from "mongoose";

import { stringify } from "querystring";
import { boolean } from "webidl-conversions";

const Todoschema = new mongoose.Schema({
    name: String,
    desc: String,
    isDone: Boolean,
})

export const Todo = mongoose.model('todos', Todoschema)

