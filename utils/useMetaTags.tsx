import { useEffect } from "react";

interface UseMetaTagsOptions {
  title: string;
  description?: string;
}

export function useMetaTags({ title, description }: UseMetaTagsOptions) {
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
