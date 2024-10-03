const ImageContent = ({ imageUrl }) => (
    <div className="flex justify-center">
        <img className="max-w-full h-auto" src={imageUrl} alt="Image Content" />
    </div>
);

export default ImageContent