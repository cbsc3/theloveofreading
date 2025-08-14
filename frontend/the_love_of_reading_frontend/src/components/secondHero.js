import { useEffect } from "react";
import axios from "axios";

export default function CustomHero() {
  return (
         <div className="hero poppins min-h-screen bg-gradient-to-br from-secondary/20 via-base-100 to-primary/20">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-4 flex items-center gap-3">
            <span role="img" aria-label="paw"></span>The Love of Animals
          </h1>
          <p className="text-base-content/80 mb-6">
            Every animal deserves love, care, and a safe place to call home.  
            Our app connects shelters with caring families, making adoption simple and heartwarming.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-secondary">Browse Pets</button>
            <button className="btn btn-outline">How It Works</button>
          </div>
        </div>

        <div className="relative w-80 h-80">
          <img
            src="https://images.unsplash.com/photo-1692224749776-c5d7cc9ef7d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwc2hlbHRlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Happy dog"
            className="absolute top-0 left-0 rounded-xl shadow-lg border border-base-200 object-cover w-40 h-40 rotate-[-6deg] z-30"
          />
          <img
            src="https://images.unsplash.com/photo-1553688738-a278b9f063e0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZyUyMHNoZWx0ZXJ8ZW58MHx8MHx8fDA%3D"
            alt="Playful kitten"
            className="absolute top-10 left-24 rounded-xl shadow-lg border border-base-200 object-cover w-40 h-40 rotate-[8deg] z-20"
          />
          <img
            src="https://b3468586.smushcdn.com/3468586/wp-content/uploads/2024/03/animal-shelter-cats-getting-fed.png?lossy=2&strip=1&webp=1"
            alt="Adopted pet snuggling"
            className="absolute top-32 left-10 rounded-xl shadow-lg border border-base-200 object-cover w-40 h-40 rotate-[4deg] z-10"
          />
          <img
            src="https://images.unsplash.com/photo-1737137917800-bca6fe489f78?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Kitten being held"
            className="absolute top-36 left-36 rounded-xl shadow-lg border border-base-200 object-cover w-40 h-40 rotate-[-10deg] z-40"
          />
        </div>
      </div>
    </div>
  );
}
