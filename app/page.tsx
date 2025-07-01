import { Button } from "@/components/ui/button";
import UploadFileInput from "@/components/upload-file-input";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="w-fit">
        <UploadFileInput />
      </div>
    </main>
  );
}
