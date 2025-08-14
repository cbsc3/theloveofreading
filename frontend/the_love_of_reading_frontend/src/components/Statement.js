export default function MissionSection() {
  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        <div className="relative w-full lg:w-1/2">
          <img
            src="https://www.animalhumanesociety.org/sites/default/files/styles/crop_16_9_960x540/public/media/image/2021-08/volunteer-holding-orange-tabby-kitten.jpg?h=56d0ca2e&itok=nI_RX-MB"
            alt="Happy dog with volunteer"
            className="rounded-2xl shadow-xl border border-base-300 object-cover w-full"
          />
          <img
            src="https://cdn.sanity.io/images/ruord509/production/99557dcb62ec6893ed376a0552c1e738dd223a72-2121x1414.jpg?w=3840&q=75&fit=clip&auto=format"
            alt="Kitten snuggling"
            className="absolute -bottom-8 -right-8 rounded-2xl shadow-lg border border-base-300 object-cover w-48 h-48"
          />
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-base-content/80 mb-6">
            The <strong>Love of Animals & Shelter Connect</strong> is dedicated
            to uniting animal shelters, rescues, and compassionate individuals
            into one powerful network to save lives, prevent unnecessary
            euthanasia, and ensure every animal finds safety and love.
          </p>
          <p className="text-lg leading-relaxed text-base-content/80 mb-6">
            Our mission extends beyond rescue — we aim to develop housing and
            foster programs where seniors and veterans can live rent-free in
            exchange for caring for animals in need, creating a mutually
            beneficial bond of companionship, purpose, and healing.
          </p>
          <button className="btn btn-primary">Add Your Organization</button>
        </div>
      </div>
    </section>
  );
}

