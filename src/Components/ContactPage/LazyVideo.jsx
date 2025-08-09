import React, { memo } from 'react';

const LazyVideo = memo(({ shouldLoad, videoSrc, className }) => {
    if (!shouldLoad) {
        return <div className="absolute inset-0 bg-gray-800 animate-pulse" />;
    }

    return (
        <video
            className={className}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
        >
            <source src={videoSrc} type="video/mp4" />
        </video>
    );
});

LazyVideo.displayName = 'LazyVideo';
export default LazyVideo;