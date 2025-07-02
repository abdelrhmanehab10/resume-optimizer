import UploadFileInput from "@/components/upload-file-input";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center px-3 md:px-0">
      <div className="w-fit">
        <UploadFileInput />
      </div>
    </main>
  );
}
