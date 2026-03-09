// Utility functions for image handling

export const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop"
];

let currentFallbackIndex = 0;

export const getNextFallbackImage = (): string => {
  const image = FALLBACK_IMAGES[currentFallbackIndex];
  currentFallbackIndex = (currentFallbackIndex + 1) % FALLBACK_IMAGES.length;
  return image;
};

export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const img = event.currentTarget;
  const currentSrc = img.src;
  
  // Try different fallback images
  if (!currentSrc.includes('fallback')) {
    img.src = getNextFallbackImage();
    img.dataset.fallback = 'true';
  }
};

export const validateImageUrl = (url: string): boolean => {
  try {
    new URL(url);
    return url.startsWith('https://images.unsplash.com/') && url.includes('?');
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
  return getNextFallbackImage();
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};
