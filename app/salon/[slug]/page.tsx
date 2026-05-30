"use client";

import { services } from "@/data/services";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-display text-3xl">{service.name}</h1>

      <p className="mt-2 text-gray-700">{service.description}</p>

      <p className="mt-2 text-sm text-gray-600">
        From KES {service.startingPrice.toLocaleString()} •{" "}
        {service.durationMinutes} mins
      </p>

      {/* Booking Form */}
      <form className="mt-6 grid gap-4 rounded-2xl border border-pink-100 bg-white p-6">
        {/* Date */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred date
          </label>
          <input
            id="date"
            type="date"
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
          />
        </div>

        {/* Time */}
        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred time
          </label>
          <input
            id="time"
            type="time"
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
          />
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="07xx xxx xxx"
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-mbb-primary px-6 py-3 text-sm font-semibold text-white hover:bg-mbb-dark"
        >
          Request booking
        </button>

        <p className="text-xs text-gray-500">
          We will confirm your appointment via WhatsApp or SMS.
        </p>
      </form>
    </div>
  );
}
