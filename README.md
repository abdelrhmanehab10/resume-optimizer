# ✨ AI Resume Optimizer

> A modern SaaS tool that uses AI to analyze, enhance, and rewrite resumes to maximize job-hunting success. Built with Next.js, Node.js, and AI integrations.

---

## 🧠 What is AI Resume Optimizer?

AI Resume Optimizer is a smart web platform that helps job seekers:
- 📄 Analyze their uploaded CV/resume (PDF or DOCX)
- 💡 Receive personalized suggestions to improve content, structure, and formatting
- ✅ Ensure ATS (Applicant Tracking System) compatibility
- 🎯 Export a clean, optimized version of their resume
- 🔐 Keep data private — processed securely with AI and deleted after analysis

---

## 🚀 Features

- 🔐 Secure resume upload (PDF/DOCX)
- 🤖 AI-powered analysis using GPT models
- ✅ ATS-compatibility checks
- 🧩 Tips for layout, wording, and impact
- 📥 One-click download of optimized PDF
- 🌐 Built with modern stack (Next.js + Node.js + Tailwind CSS + UploadThing)
- 🔌 Optional: Stripe payment for advanced features

---

## 📸 Screenshots

| Upload Resume | Analysis Result | Download Optimized CV |
|---------------|------------------|------------------------|
| ![upload](./public/screens/upload.png) | ![analyze](./public/screens/analyze.png) | ![result](./public/screens/result.png) |

---

## 🛠️ Tech Stack

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS, Shadcn/UI
- **Backend**: Node.js, Express, UploadThing
- **AI**: OpenAI API (GPT-4), resume parser
- **Storage**: Supabase / Local FileSystem
- **PDF Export**: `pdf-lib`, `react-pdf`, or `jsPDF`
- **Payment (optional)**: Stripe

---

## 🧪 How It Works

1. **Upload**: User uploads a resume (PDF or DOCX)
2. **Parse**: Backend extracts structured data from the document
3. **Analyze**: AI evaluates the content and identifies weak points
4. **Suggest**: The system returns clear suggestions and an ATS score
5. **Export**: User can download an updated, optimized resume
