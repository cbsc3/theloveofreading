function RainToys() {
  // Generate 15 toys with random left positions and staggered delays
  const toys = Array.from({ length: 15 }, (_, i) => {
    const emojis = ["🦴", "🎾", "🐕", "🐈"];
    const emoji = emojis[i % emojis.length];
    const delay = i * 800;
    const left = Math.floor(Math.random() * 90) + 5; // 5% to 95%
    return { id: i, emoji, delay, left };
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {toys.map(({ id, emoji, delay, left }) => (
        <span
          key={id}
          className="absolute text-3xl animate-fall"
          style={{ left: `${left}%`, animationDelay: `${delay}ms`, top: "-3rem" }}
          aria-hidden="true"
        >
          {emoji}
        </span>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-3rem) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) rotate(15deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(110vh) rotate(30deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-duration: 6s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}

export default function AnimalAdoptionHeroWithRain() {
  return (
    <div className="hero poppins relative min-h-screen bg-gradient-to-br from-secondary/20 via-base-100 to-primary/20 overflow-hidden">
      <RainToys />

      <div className="hero-content flex-col lg:flex-row gap-12 relative z-10">
        <div className="max-w-lg z-20">
          <h1 className="text-5xl font-bold mb-4 flex items-center gap-3">
            
        Animals; Pets; Love.
          </h1>
          <p className="text-base-content/80 mb-6">
            Every animal deserves love, care, and a safe place to call home. Our
            app connects shelters with caring families, making adoption simple
            and heartwarming.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Browse Pets</button>
            <button className="btn btn-outline">How It Works</button>
          </div>
        </div>

        <div className="relative w-80 h-80 z-10">
           <img
            src="https://images.unsplash.com/photo-1692224749776-c5d7cc9ef7d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwc2hlbHRlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Happy dog"
            className="absolute top-0 left-0 rounded-xl shadow-lg border border-base-200 object-cover w-60 h-60 rotate-[-6deg] z-30"
          />
          <img
            src="https://images.unsplash.com/photo-1553688738-a278b9f063e0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZyUyMHNoZWx0ZXJ8ZW58MHx8MHx8fDA%3D"
            alt="Playful kitten"
            className="absolute top-10 left-24 rounded-xl shadow-lg border border-base-200 object-cover w-60 h-60 rotate-[8deg] z-20"
          />
          <img
            src="https://b3468586.smushcdn.com/3468586/wp-content/uploads/2024/03/animal-shelter-cats-getting-fed.png?lossy=2&strip=1&webp=1"
            alt="Adopted pet snuggling"
            className="absolute top-32 left-10 rounded-xl shadow-lg border border-base-200 object-cover w-60 h-60 rotate-[4deg] z-10"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1679523690066-3a433e6a8ed5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsJTIwc2hlbHRlcnN8ZW58MHx8MHx8fDA%3D"
            alt="Kitten being held"
            className="absolute top-36 left-36 rounded-xl shadow-lg border border-base-200 object-cover w-60 h-60 rotate-[-10deg] z-40"
          />
        </div>
      </div>
    </div>
  );
}
