import { useEffect, useState } from "react"

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const onlineEventListener = () => setIsOnline(true);
    const offlineEventListener = () => setIsOnline(false);

    window.addEventListener('online', onlineEventListener);
    window.addEventListener('offline', offlineEventListener);

    return () => {
      window.removeEventListener('online', onlineEventListener);
      window.removeEventListener('offline', offlineEventListener);
    };
  }, []);

  return isOnline;
}

export default useOnline;