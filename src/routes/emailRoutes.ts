import express from "express";
import { sendEmailController, sendMultipleEmailsController, sendPdfController, sendVerificationCodeToOperator, verifyOperatorCodeHandler } from "../controllers/emailController";
import EmailLog from "../models/EmailLog";

const router = express.Router();

router.post("/send", sendEmailController);

router.post("/send-attendance-pdf", sendPdfController);

router.post("/send-multiple", sendMultipleEmailsController);

router.post("/send-code/:operatorId", sendVerificationCodeToOperator);

router.post("/verify-code", verifyOperatorCodeHandler);


router.get('/logs', async (req, res) => {
  const logs = await EmailLog.find().sort({ date: -1 }).lean();
  res.json(logs);
});


export default router;
