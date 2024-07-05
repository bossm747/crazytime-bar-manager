import React from 'react';

const FullscreenIframe = ({ src }) => {
  return (
    <div className="w-screen h-screen m-0 p-0 overflow-hidden">
      <iframe
        src={src}
        className="w-full h-full border-none"
        title="Fullscreen Iframe"
      ></iframe>
    </div>
  );
};

export default FullscreenIframe;