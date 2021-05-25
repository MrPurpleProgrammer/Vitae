import { useEffect } from 'react';

function ImportScript(resourceUrl, asyncStatus) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = resourceUrl;
        script.async = asyncStatus;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, [resourceUrl]);
    return resourceUrl;
};
export default ImportScript;