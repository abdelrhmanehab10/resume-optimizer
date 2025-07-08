import UploadFileInput from "@/components/upload-file-input";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center ">
      <div className="w-fit px-3 md:px-0">
        <UploadFileInput />
      </div>
    </main>
  );
}
