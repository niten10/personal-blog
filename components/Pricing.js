import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
          Pricing Plans
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-8 md:mb-16 max-w-[600px] mx-auto">
          Choose the perfect plan for your needs. Upgrade or downgrade at any
          time.
        </p>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Basic Plan */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Basic</CardTitle>
              <CardDescription>
                For individuals just getting started
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold mb-4">
                Rs 99<span className="text-lg font-normal">/month</span>
              </div>
              <ul className="space-y-2 mb-4">
                <ListItem>Access to all basic features</ListItem>
                <ListItem>Up to 10 blog posts per month</ListItem>
                <ListItem>Basic analytics</ListItem>
                <ListItem>Community support</ListItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="flex flex-col border-primary">
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle className="text-2xl">Pro</CardTitle>{" "}
                <span class=" flex items-center bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase text-center">
                  Bestseller
                </span>
              </div>
              <CardDescription>
                For growing blogs and businesses
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold mb-4">
                Rs 999<span className="text-lg font-normal">/month</span>
              </div>
              <ul className="space-y-2 mb-4">
                <ListItem>All Basic features, plus:</ListItem>
                <ListItem>Unlimited blog posts</ListItem>
                <ListItem>Advanced analytics</ListItem>
                <ListItem>Priority support</ListItem>
                <ListItem>Custom domain</ListItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Upgrade to Pro
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>
                For large scale blogs and businesses
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold mb-4">
                Rs 2999<span className="text-lg font-normal">/month</span>
              </div>
              <ul className="space-y-2 mb-4">
                <ListItem>All Pro features, plus:</ListItem>
                <ListItem>Dedicated account manager</ListItem>
                <ListItem>Custom integrations</ListItem>
                <ListItem>Advanced security features</ListItem>
                <ListItem>SLA support</ListItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ListItem({ children }) {
  return (
    <li className="flex items-center">
      <Check className="text-green-500 mr-2 h-5 w-5" />
      <span>{children}</span>
    </li>
  );
}
