import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input } from "@/components/ui"

export default function ComponentsDemo() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Klikkit UI Components
          </h1>
          <p className="text-lg text-gray-600">
            shadcn-style components with your custom color palette
          </p>
        </div>

        {/* Button Variants */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Button Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Button Sizes</h3>
            <div className="flex items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🚀</Button>
            </div>
          </div>
        </section>

        {/* Card Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Card Components</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tier 1: Digital Launchpad</CardTitle>
                <CardDescription>
                  Perfect for startups and solo traders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Get your business online with a professional 5-page website, 
                  AI-powered content, and essential SEO setup.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 5-page PWA website</li>
                  <li>• AI-assisted content & imagery</li>
                  <li>• Basic AI chatbot</li>
                  <li>• SEO setup + Google Business</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tier 2: Business Growth Engine</CardTitle>
                <CardDescription>
                  Ideal for established small businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Scale your business with advanced features, e-commerce capabilities, 
                  and personalized AI experiences.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Up to 10 pages + e-commerce</li>
                  <li>• Advanced AI personalization</li>
                  <li>• Booking systems & forms</li>
                  <li>• Priority support</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="accent" className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Input Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Input Components</h2>
          <div className="max-w-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <Input placeholder="Enter your full name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input type="email" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <Input placeholder="Your company name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <Input type="tel" placeholder="+44 123 456 7890" />
            </div>
            <Button className="w-full">Get Started</Button>
          </div>
        </section>

        {/* Color Palette Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Color Palette</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Primary (Golden Yellow)</h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="flex items-center gap-4">
                    <div 
                      className={`w-12 h-8 rounded border border-gray-200 bg-primary-${shade}`}
                    ></div>
                    <span className="text-sm font-mono">primary-{shade}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Accent (Blue)</h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="flex items-center gap-4">
                    <div 
                      className={`w-12 h-8 rounded border border-gray-200 bg-accent-${shade}`}
                    ></div>
                    <span className="text-sm font-mono">accent-{shade}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
