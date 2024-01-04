import { useEffect } from "react";


function useClickOutside(ref: any, setIsListOpened: any) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
                setIsListOpened(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref]);
}

export default useClickOutside;