export default function Page() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Kelly Kuhlmeyer</h1>
        <p className="text-lg">Scandinavian-American Handyman | Temporary Housing Exchange</p>
      </div>

      <div className="mb-6">
        <p>
          Hello! My name is Kelly Kuhlmeyer. I'm a half-American, half-Norwegian handyman currently on a short assignment
          as a substitute teacher in the Bay Area. I’ve lived in Oslo for over 25 years with my wife and three kids, and
          I’m now back in California for a few months.
        </p>
        <p className="mt-2">
          While I have family nearby, I’m looking for a neutral, quiet space to stay temporarily. In exchange for room
          or guest accommodation, I’m offering my skills and labor.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Services Offered</h2>
        <ul className="list-disc list-inside">
          <li>General Handyman Services</li>
          <li>Landscaping & Yard Work</li>
          <li>Light Construction & Repairs</li>
          <li>Pool & Spa Setup & Maintenance</li>
          <li>Planter Box Building & Garden Projects</li>
          <li>Historic Home Renovation Experience (1894 home restored)</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>Email: <a href="mailto:kellykuhlmeyer@gmail.com" className="text-blue-600">kellykuhlmeyer@gmail.com</a></p>
        <p>Phone: <a href="tel:+17608012735" className="text-blue-600">760-801-2735</a></p>
      </div>

      <div className="text-sm text-gray-500 text-center mt-10">
        <p>Let’s support each other. I’ll work hard for a simple place to rest. Thank you for considering!</p>
      </div>
    </div>
  );
}
