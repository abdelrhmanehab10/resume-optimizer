"use client";

import { Loader2, PaperclipIcon, UploadIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useDropzone } from "@uploadthing/react";
import { useUploadThing } from "@/utils/uploadthing";
import { useCallback, useState } from "react";
import {
  generateClientDropzoneAccept,
  generatePermittedFileTypes,
} from "uploadthing/client";
import { toast } from "sonner";
import { unstable_ViewTransition as ViewTransition } from "react";
import { useRouter } from "next/navigation";
import { ClientUploadedFileData } from "uploadthing/types";
import { useHotkeys } from "react-hotkeys-hook";

export default function UploadFileInput() {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  useHotkeys("enter", () => startUpload(files));

  const { startUpload, routeConfig, isUploading } = useUploadThing(
    "resumeUploader",
    {
      onClientUploadComplete: (res: ClientUploadedFileData<null>[]) => {
        toast.success("Uploaded Successfully!");
        console.log(res);

        setFiles([]);
        router.push("/analyze");
      },
      onUploadError: (e) => {
        console.log("ERROR_UPLOAD_FILE: ", e.message);
        toast.error("Error occurred while uploading");
      },
    }
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(
      generatePermittedFileTypes(routeConfig).fileTypes
    ),
  });

  return (
    <div className="flex flex-col gap-2">
      <div
        role="button"
        className="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 flex min-h-40 flex-col items-center justify-center rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[input:focus]:ring-[3px]"
        {...getRootProps()}
      >
        <input
          className="sr-only"
          aria-label="Upload file"
          disabled={Boolean(files[0])}
          {...getInputProps()}
        />

        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <UploadIcon className="size-4 opacity-60" />
          </div>
          <p className="mb-1.5 text-sm font-medium">Upload Your Resume</p>
          <p className="text-muted-foreground text-xs">
            Drag & drop PDF or DOCX files or click to browse (max. 4MB)
          </p>
        </div>
      </div>
      <div>
        {files.length > 0 && (
          <div className="space-y-2">
            <div
              key={files[0].name}
              className="flex items-center justify-between gap-2 rounded-xl border px-4 py-2"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <PaperclipIcon
                  className="size-4 shrink-0 opacity-60"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-medium">
                    {files[0].name}
                  </p>
                </div>
              </div>

              <Button
                size="icon"
                variant="ghost"
                className="text-muted-foreground/80 hover:text-foreground -me-2 size-8 hover:bg-transparent"
                onClick={() => setFiles([])}
                aria-label="Remove file"
              >
                <XIcon className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        )}
      </div>
      <ViewTransition name="loading-indicator">
        <Button
          className="w-full"
          disabled={!files[0]}
          onClick={() => startUpload(files)}
        >
          {isUploading ? <Loader2 className="animate-spin" /> : "Analyze ✨"}
        </Button>
      </ViewTransition>
      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground text-center text-xs"
      >
        Upload your resume, then click &apos;Analyze&apos; or press Enter to
        begin the analysis.
      </p>
    </div>
  );
}
