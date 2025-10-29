const HelpfulImages = () => {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-jlGd-A7kSfCnSzwyOYKC0mLQyhO66H6jA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfgyw65QspHqXhNsnNMjfkj7h9MVBaF-tJQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEYPI2dvE0283QB9x2JewvE1wy35OwvzA0Q&s'
  ];

  return (
    <section className="helpful-images">
      <div className="helpful-images-container">
        <div className="helpful-images-grid">
          {images.map((src, idx) => (
            <div className="helpful-image-card" key={idx}>
              <img src={src} alt={`Helpful visual ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpfulImages;


