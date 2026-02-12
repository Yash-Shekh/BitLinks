export default function About() {
  return (
    <section className="bg-blue-50 py-16 px-6 h-screen justify-center items-center">
      <div className="max-w-4xl mx-auto md:my-20 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          About BitLinks
        </h2>
        <p className="text-lg text-blue-900 leading-relaxed mb-8">
          BitLinks is a simple yet powerful URL shortener that lets you create
          custom short names for your links. Whether you’re sharing on social
          media, sending in emails, or organizing resources, BitLinks makes it
          easy to shorten, brand, and redirect your URLs with style.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              🔗 Custom Short Names
            </h3>
            <p className="text-blue-800">
              Choose your own short name to make links memorable and easy to
              share.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              ⚡ Fast Redirects
            </h3>
            <p className="text-blue-800">
              Experience instant redirection with optimized performance and
              reliability.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              📊 Simple & Scalable
            </h3>
            <p className="text-blue-800">
              Built for individuals and businesses, BitLinks grows with your
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}