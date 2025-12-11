import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({}, { timestamps: true });

export const MedicalRecord = mongoose.Schema.Types.ObjectId("MedicalRecord", medicalRecordSchema);
