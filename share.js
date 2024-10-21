// A function to share content using the Web Share API
const shareContent = () => {
    // Check if the browser supports the Web Share API
    if (navigator.share) {
      // If supported, invoke the share method with the given data
      navigator.share({
        title: "The Native Share API", // The title of the content being shared
        text: "It works like a pro. I'll let @richaadgigi know",   // A short message or description of the content
        // url: "https://instagram.com/richaadgigi",     // The URL to be shared (e.g., a webpage link)
        // files: []   An array containing the file(s) to share
      })
        .then(() => {
          // If the user shares successfully, log a success message
          console.log('Content shared successfully! 🚀');
        })
        .catch((error) => {
          // Handle errors (e.g., if the user cancels or an issue occurs)
          console.error('Error sharing:', error);
        });
    } else {
      // If the Web Share API isn't supported, warn the user or take fallback action
      console.warn('Web Share API not supported on this browser.');
    }
}