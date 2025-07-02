import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  resumeUploader: f({
    pdf: {
      maxFileCount: 1,
      maxFileSize: "4MB",
    },
  }).onUploadComplete(async ({ file }) => {
    console.log("file url", file.ufsUrl);
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
