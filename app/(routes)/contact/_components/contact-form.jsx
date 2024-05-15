"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Smile } from "lucide-react";
import { contactSchema } from "@/shared/utils/form/contactSchema";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data) {
    try {
      setLoading(true);
      const res = await fetch("https://appvil-eu.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Nepavyko išsiųsti");
      }
      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Klaida",
        description: "Nepavyko išsiųsti",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      {!submitted ? (
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="
            space-y-4
            h-full
            border rounded-3xl p-10 mt-2 md:mt-0
            md:w-1/2"
        >
          <div className="md:flex items-center gap-6 ">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="items-center justify-center w-full">
                  <FormLabel className="text-sm text-neutral-600 dark:text-neutral-300 bg-opacity-50">
                    Vardas *
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem className="items-center justify-center w-full">
                  <FormLabel className="text-sm text-neutral-600 dark:text-neutral-300 bg-opacity-50">
                    Pavardė *
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="items-center justify-center w-full">
                <FormLabel className="text-sm text-neutral-600 dark:text-neutral-300 bg-opacity-50">
                  El. paštas *
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="items-center justify-center w-full">
                <FormLabel className="text-sm text-neutral-600 dark:text-neutral-300 bg-opacity-50">
                  Žinutė *
                </FormLabel>
                <FormControl>
                  <Textarea style={{ height: "100px" }} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex space-x-4 items-center">
            <Checkbox />
            <span className="text-xs font-light">
              Sutinku su privatumo politika.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Button
              type="submit"
              className="text-sm font-light"
              disabled={loading}
              onClick={() => form.handleSubmit(onSubmit)}
            >
              Siųsti
            </Button>
          </div>
        </form>
      ) : (
        <>
          <div className="text-xl md:text-2xl flex items-center justify-center flex-col px-8">
            <div className="w-80 py-20">
              <Smile className="w-14 h-14 text-3xl text-neutral-600 dark:text-neutral-300 mx-auto" />
              <div className="text-neutral-600 dark:text-neutral-300 font-light text-center justify-center mx-auto py-10">
                Jūsų pranešimas sėkmingai išsiųstas! Greitu metu susisieksime su
                Jumis nurodytu el. paštu.
              </div>
            </div>
          </div>
        </>
      )}
    </Form>
  );
}
