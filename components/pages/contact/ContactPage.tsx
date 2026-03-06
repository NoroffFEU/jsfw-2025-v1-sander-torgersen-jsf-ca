"use client";

import { Input } from "@/components/ui/input";

export default function ContactPageComponent() {
  return (
    <div className="mx-auto max-w-lg px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="pb-2 text-2xl font-bold">Contact Us</h1>
      <p className="pb-8 text-muted-foreground">
        Have a question or feedback? Send us a message.
      </p>

      <form>
        <>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-muted-foreground"
          >
            Name
          </label>

          <Input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50 sm:text-sm"
            placeholder="Your name"
          />
        </>

        <>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-muted-foreground"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50 sm:text-sm"
            placeholder="Your email"
          />
        </>

        <>
          <label htmlFor="subject">Subject</label>
          <Input type="text" id="subject" name="subject" />
        </>

        <>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-muted-foreground"
          >
            Message
          </label>
          <Input
            type="text"
            id="message"
            name="message"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50 sm:text-sm"
            placeholder="Your message"
          />
        </>
      </form>
    </div>
  );
}
