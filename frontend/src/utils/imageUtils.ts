// Utility functions for image handling

export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop";

export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const img = event.currentTarget;
  if (img.src !== FALLBACK_IMAGE) {
    img.src = FALLBACK_IMAGE;
  }
};

export const validateImageUrl = (url: string): boolean => {
  try {
    new URL(url);
    return url.startsWith('https://images.unsplash.com/');
  } catch {
    return false;
  }
};

export const getValidImageUrl = (urls: string[]): string => {
  // Return the first valid URL, or fallback
  for (const url of urls) {
    if (validateImageUrl(url)) {
      return url;
    }
  }
  return FALLBACK_IMAGE;
};
