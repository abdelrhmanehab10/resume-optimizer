"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import SocialLinksInput from "@/components/social-links-input";

const resumeBuilderFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  socialLinks: z
    .array(
      z.object({
        type: z.string().min(2).max(30),
        url: z.string().url(),
      })
    )
    .optional(),
  job: z.string().min(2).max(50),
  summary: z.string().min(20).max(120),
});

export const ResumeBuilderForm = () => {
  const form = useForm<z.infer<typeof resumeBuilderFormSchema>>({
    resolver: zodResolver(resumeBuilderFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      socialLinks: [],
      job: "",
      summary: "",
    },
  });

  function onSubmit(values: z.infer<typeof resumeBuilderFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="ex. Smith" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="socialLinks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job</FormLabel>
              <FormControl>
                <SocialLinksInput />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="job"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. Software Engineer, Product Manager, Data Analyst"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g. Experienced software engineer with 5+ years in frontend development, passionate about building user-centric web applications."
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
