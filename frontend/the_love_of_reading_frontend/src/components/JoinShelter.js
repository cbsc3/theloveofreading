export default function ShelterJoin(){

    return(
         <div className="min-h-screen padding-top-bottom flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-2xl shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">
            Partner with Us
          </h2>
          <p className="text-center text-sm opacity-70 mb-4">
            Join our network of shelters and help pets find their forever homes through our transporter system.
          </p>

          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Organization Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Happy Tails Animal Shelter"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Organization Email
                </span>
              </label>
              <input
                type="email"
                placeholder="contact@happytails.org"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Phone Number
                </span>
              </label>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Address
                </span>
              </label>
              <input
                type="text"
                placeholder="123 Main Street, Springfield"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Website 
                </span>
              </label>
              <input
                type="url"
                placeholder="https://www.happytails.org"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  About Your Shelter
                </span>
              </label>
              <textarea
                placeholder="Tell us about your shelter, your mission, and the animals you care for..."
                className="textarea textarea-bordered w-full"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Types of Animals You Post
                </span>
              </label>
              <input
                type="text"
                placeholder="Dogs, Cats, Rabbits, etc."
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Join Our Shelter Network
              </button>
            </div>
          </form>

          <p className="text-center mt-4 text-sm">
            Already registered?
            <a href="/shelter-login" className="link link-primary">
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
    )
}