
const VideoPlayer = ({ videoSrc }) => {
  return (
    <div className="w-full h-full">
      <iframe
        src={videoSrc}
        title="Study program search interface"
        className="w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};