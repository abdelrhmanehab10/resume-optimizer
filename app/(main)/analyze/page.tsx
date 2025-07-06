"use client";

import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { useState, unstable_ViewTransition as ViewTransition } from "react";

const AnalyzePage = () => {
  //TODO: will update this state based on file status
  const [isAnalyze, setIsAnlyze] = useState<boolean>(true);
  0;
  return (
    <>
      <ViewTransition name="loading-indicator">
        <Badge className="absolute top-3 right-3">
          {isAnalyze && (
            <>
              <Loader2 className="animate-spin" /> Analyzing..
            </>
          )}
        </Badge>
      </ViewTransition>
    </>
  );
};

export default AnalyzePage;
