import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube } from "lucide-react";
import { toast } from "sonner";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Prayaas Academy" },
      { name: "description", content: "Get in touch with Prayaas Academy. Book an admission counselling session, request a callback or visit our campus." },
      { property: "og:title", content: "Contact Prayaas Academy" },
      { property: "og:description", content: "Talk to our mentors and start your success journey." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(10, "Enter a 10-digit phone number").max(15),
  course: z.string().min(1, "Please select a course"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

function ContactPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", course: "", message: "" },
  });

  const onSubmit = (data: FormData) => {
    console.log("Inquiry:", data);
    toast.success("Thank you! Our team will reach out within 24 hours.");
    form.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's start your <span className="gradient-text">success story</span></>}
        description="Have a question or want to enroll? Fill out the form and our admissions team will get back to you shortly."
      />

      <section className="pb-20">
        <div className="container-page grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold">Reach us directly</h3>
              <ul className="mt-5 space-y-4 text-sm">
                {[
                  { icon: MapPin, label: "Visit", value: "123 Education Street, Knowledge Park, India" },
                  { icon: Phone, label: "Call", value: "+91 98765 43210" },
                  { icon: Mail, label: "Email", value: "hello@prayaasclasses.in" },
                ].map((i) => (
                  <li key={i.label} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white" style={{ background: "var(--gradient-brand)" }}>
                      <i.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{i.label}</p>
                      <p className="font-medium">{i.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-2">
                {[Facebook, Instagram, Youtube].map((I, i) => (
                  <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-xl border border-border hover:bg-primary/10 transition">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-border shadow-soft">
              <iframe
                title="Prayaas Academy location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4!2d77.59!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft space-y-5"
            >
              <h3 className="font-display text-2xl font-bold">Admission Inquiry</h3>
              <p className="text-sm text-muted-foreground">We'll respond within 24 hours.</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" {...form.register("name")} />
                  {form.formState.errors.name && <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="98765 43210" {...form.register("phone")} />
                  {form.formState.errors.phone && <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" {...form.register("email")} />
                {form.formState.errors.email && <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label>Interested course</Label>
                <Select onValueChange={(v) => form.setValue("course", v, { shouldValidate: true })} value={form.watch("course")}>
                  <SelectTrigger><SelectValue placeholder="Select a course" /></SelectTrigger>
                  <SelectContent>
                    {["JEE Main + Advanced", "NEET UG", "Foundation (8-10)", "Class 11 & 12 Boards", "Crash Course", "Olympiad Prep"].map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.course && <p className="text-xs text-destructive">{form.formState.errors.course.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea id="message" rows={4} placeholder="Tell us a bit about your goals..." {...form.register("message")} />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full text-white shadow-soft" style={{ background: "var(--gradient-brand)" }}>
                Send Inquiry <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
