import { useEffect } from "react";

interface UsePageTitleOptions {
  title: string;
  description?: string;
}

export function usePageTitle({ title, description }: UsePageTitleOptions) {
  useEffect(() => {
    document.title = title;

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');

      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      } else {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        metaDescription.setAttribute("content", description);
        document.head.appendChild(metaDescription);
      }
    }
  }, [title, description]);
}
