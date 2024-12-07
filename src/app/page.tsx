import Image from "next/image";
import { Check } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-32 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-transparent bg-clip-text">
            Automate Your Instagram Engagement
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
            AutoChat uses AI to instantly respond to your Instagram DMs and
            comments, keeping your audience engaged 24/7 while saving you time.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <ProfileBlock
              imageSrc="/profile-1.jpg?height=150&width=150"
              name="Sarah Johnson"
              role="Fashion Influencer"
            />
            <ProfileBlock
              imageSrc="/profile-2.webp?height=150&width=150"
              name="Mike Chen"
              role="E-commerce Brand Owner"
            />
            <ProfileBlock
              imageSrc="/profile-3.jpg?height=150&width=150"
              name="Emily Rodriguez"
              role="Lifestyle Blogger"
            />
            <ProfileBlock
              imageSrc="/profile-4.jpg?height=150&width=150"
              name="David Kim"
              role="Social Media Manager"
            />
          </div>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of influencers and brands boosting their Instagram
            engagement with smart, automated responses.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Choose Your Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <PricingTier
                name="Free"
                price="$0"
                description="Perfect for individuals just starting out"
                features={[
                  "Up to 100 auto-replies per month",
                  "Basic AI responses",
                  "Instagram DM integration",
                  "24/7 support",
                ]}
              />
              <PricingTier
                name="Pro"
                price="$29"
                period="per month"
                description="Ideal for growing influencers and small businesses"
                features={[
                  "Unlimited auto-replies",
                  "Advanced AI with personalization",
                  "Instagram DM and comment integration",
                  "Analytics dashboard",
                  "Priority support",
                ]}
                highlighted={true}
              />
              <PricingTier
                name="Team"
                price="$99"
                period="per month"
                description="For agencies and large teams"
                features={[
                  "Everything in Pro",
                  "Up to 5 team members",
                  "Multi-account management",
                  "Custom AI training",
                  "Dedicated account manager",
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ProfileBlock({
  imageSrc,
  name,
  role,
}: {
  imageSrc: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
        <Image
          src={imageSrc}
          // alt={`Profile picture of ${name}`}
          alt={``}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
}

function PricingTier({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
}: {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-lg p-8 ${
        highlighted
          ? "bg-primary text-primary-foreground shadow-lg scale-105"
          : "bg-muted"
      }`}
    >
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="text-3xl font-bold mb-2">
        {price} <span className="text-lg font-normal">{period}</span>
      </div>
      <p className="text-sm mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${
          highlighted
            ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            : ""
        }`}
      >
        Get Started
      </Button>
    </div>
  );
}
