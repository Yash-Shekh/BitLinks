export default function Contact() {
  return (
    <section className="bg-blue-50 py-6 px-6 h-[92vh]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-3">
          Contact Us
        </h2>
        <p className="text-lg text-blue-900 text-center mb-3">
          Have questions, feedback, or need support? We’d love to hear from you.
          Fill out the form below or reach us directly.
        </p>

        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-lg p-8 space-y-3">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-blue-700 mb-3"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full border border-blue-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-blue-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-blue-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-blue-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-6 text-center">
          <p className="text-blue-800">
            📧 Email: <span className="font-medium">yashshekh71@gmail.com</span>
          </p>
          <p className="text-blue-800 mt-2">
            📍 Location: <span className="font-medium">Beawar, Rajasthan, India</span>
          </p>
        </div>
      </div>
    </section>
  );
}