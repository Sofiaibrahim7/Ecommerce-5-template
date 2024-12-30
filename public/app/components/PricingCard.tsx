export default function PricingCards() {
    return (
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Pricing</h2>
        <p className="text-gray-600 mb-6">
          Problems trying to resolve the conflict between classical physics and quantum mechanics.
        </p>
        <div className="flex justify-center gap-6">
          <div className="border rounded-lg shadow-lg p-6 max-w-xs">
            <h3 className="text-xl font-bold">Free</h3>
            <p className="text-gray-600 mt-2 mb-4">$0 per month</p>
            <ul className="text-gray-600 space-y-2">
              <li>✅ Unlimited product updates</li>
            </ul>
          </div>
          <div className="border rounded-lg shadow-lg p-6 max-w-xs bg-blue-50">
            <h3 className="text-xl font-bold">Standard</h3>
            <p className="text-gray-600 mt-2 mb-4">$9.99 per month</p>
            <ul className="text-gray-600 space-y-2">
              <li>✅ Unlimited product updates</li>
              <li>✅ Advanced features</li>
            </ul>
          </div>
          <div className="border rounded-lg shadow-lg p-6 max-w-xs">
            <h3 className="text-xl font-bold">Premium</h3>
            <p className="text-gray-600 mt-2 mb-4">$19.99 per month</p>
            <ul className="text-gray-600 space-y-2">
              <li>✅ Unlimited product updates</li>
              <li>✅ Advanced features</li>
              <li>✅ Priority support</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  